import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Upload, X, FileText, Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const WEBHOOK_URL = "https://n8n-n8n.s7gbvq.easypanel.host/webhook/poemas";

const formSchema = z.object({
  first_name: z.string().min(1, "Nome é obrigatório"),
  last_name: z.string().min(1, "Nome artístico é obrigatório"),
  email: z.string().email("E-mail inválido"),
  country: z.string().min(1, "País é obrigatório"),
  cep: z.string().min(1, "CEP é obrigatório"),
  estado: z.string().min(1, "Estado é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  endereco: z.string().min(1, "Endereço é obrigatório"),
  numero: z.string().min(1, "Número é obrigatório"),
  complemento: z.string().optional(),
  cpf: z.string().min(1, "CPF é obrigatório"),
  ddd_pais: z.string().optional(),
  telefone: z.string().min(1, "Celular/WhatsApp é obrigatório"),
  titulo_poema: z.string().optional(),
  termos: z.literal(true, { errorMap: () => ({ message: "Você deve aceitar os termos" }) }),
});

type FormData = z.infer<typeof formSchema>;

const COUNTRIES = [
  "Brasil", "Portugal", "Angola", "Moçambique", "Cabo Verde",
  "Estados Unidos", "Argentina", "Uruguai", "Paraguai", "Chile",
  "Colômbia", "México", "Espanha", "França", "Itália", "Alemanha",
  "Reino Unido", "Japão", "China", "Índia", "Canadá", "Austrália",
  "Outro",
];

const sanitizeFileName = (name: string): string => {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/_+/g, "_");
};

const InscricaoForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ddd_pais: "+55",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    const valid = selected.filter(f => {
      if (!f.name.match(/\.(pdf|doc|docx|dot|dotx|docm|dotm|txt|rtf|jpg|jpeg|png|gif|bmp|xls|xlsx|ppt|pptx|odt|ods|odp|wps|wpd)$/i)) {
        toast({ title: "Arquivo não permitido", description: `"${f.name}" não é um tipo válido.`, variant: "destructive" });
        return false;
      }
      return true;
    });

    const total = [...files, ...valid].slice(0, 2);
    if (files.length + valid.length > 2) {
      toast({ title: "Limite de arquivos", description: "Máximo de 2 arquivos.", variant: "destructive" });
    }
    setFiles(total);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dt = e.dataTransfer;
    if (dt.files) {
      const fakeEvent = { target: { files: dt.files } } as React.ChangeEvent<HTMLInputElement>;
      handleFileChange(fakeEvent);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (files.length === 0) {
      toast({ title: "Arquivo obrigatório", description: "Anexe pelo menos um arquivo com seu texto.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      // Upload files to storage
      const fileUrls: string[] = [];
      for (const file of files) {
        const fileName = `${Date.now()}-${sanitizeFileName(file.name)}`;
        const { error: uploadError } = await supabase.storage
          .from("inscricoes-files")
          .upload(fileName, file);
        if (uploadError) throw uploadError;
        const { data: urlData } = supabase.storage
          .from("inscricoes-files")
          .getPublicUrl(fileName);
        fileUrls.push(urlData.publicUrl);
      }

      // Save to database
      const { error: dbError } = await supabase.from("inscricoes").insert({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        country: data.country,
        cep: data.cep,
        estado: data.estado,
        cidade: data.cidade,
        bairro: data.bairro,
        endereco: data.endereco,
        numero: data.numero,
        complemento: data.complemento || null,
        cpf: data.cpf,
        ddd_pais: data.ddd_pais || "+55",
        telefone: data.telefone,
        titulo_poema: data.titulo_poema || null,
        file_urls: fileUrls,
      });
      if (dbError) throw dbError;

      // Also send to webhook
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });
      files.forEach((file, i) => {
        formData.append(`file_${i}`, file);
      });
      fetch(WEBHOOK_URL, { method: "POST", body: formData }).catch(() => { });

      setIsSubmitted(true);
      // Dispara evento PageView do Meta Pixel após conclusão do formulário
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'PageView');
      }
      toast({ title: "Inscrição enviada!", description: "Seu poema foi enviado com sucesso." });
      reset();
      setFiles([]);
    } catch {
      toast({ title: "Erro ao enviar", description: "Tente novamente mais tarde.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
  const labelClass = "block text-white font-semibold mb-1.5 text-sm";
  const errorClass = "text-red-300 text-xs mt-1";

  if (isSubmitted) {
    return (
      <section className="bg-sky pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <CheckCircle2 className="w-20 h-20 text-white mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">INSCRIÇÃO ENVIADA!</h2>
          <p className="text-white/90 text-xl mb-8">Obrigado por participar! Sua inscrição foi recebida com sucesso.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all"
          >
            Enviar outro poema
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-sky pt-16 pb-24 md:pt-20 md:pb-32">
      <div ref={ref} className={`container mx-auto px-4 max-w-4xl text-center ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="bg-white rounded-2xl px-6 py-12 md:px-12 md:py-16 shadow-lg">
          <h2 className="font-heading text-4xl md:text-6xl font-black mb-4" style={{ color: 'hsl(300 50% 35%)' }}>
            INSCRIÇÕES ENCERRADAS
          </h2>
          <p className="text-navy text-lg md:text-xl font-semibold">
            Agradecemos a todos os poetas que participaram. Não estamos mais recebendo novas inscrições.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InscricaoForm;
