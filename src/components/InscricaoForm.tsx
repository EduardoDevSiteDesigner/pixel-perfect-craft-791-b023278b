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
      <div ref={ref} className={`container mx-auto px-4 max-w-4xl ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-4xl md:text-5xl font-black text-navy text-center mb-8">
          FORMULÁRIO DE INSCRIÇÃO
        </h2>
        <p className="text-center text-navy mb-8 text-xl md:text-2xl font-heading font-bold">PREENCHA SEUS DADOS E ANEXE SEU TEXTO.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-navy/40 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/10">
          {/* Nome Completo */}
          <div>
            <label className={labelClass}>Nome Completo:</label>
            <input {...register("first_name")} placeholder="Digite seu nome" className={inputClass} />
            {errors.first_name && <p className={errorClass}>{errors.first_name.message}</p>}
          </div>

          {/* Nome artístico */}
          <div>
            <label className={labelClass}>Nome artístico (como seu nome será impresso no livro): *</label>
            <input {...register("last_name")} placeholder="Nome artístico" className={inputClass} />
            {errors.last_name && <p className={errorClass}>{errors.last_name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>E-mail: *</label>
            <input {...register("email")} type="email" placeholder="Email" className={inputClass} />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          {/* País + CEP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>País: *</label>
              <select {...register("country")} className={inputClass}>
                <option value="" className="text-navy">Selecione o país</option>
                {COUNTRIES.map(c => (
                  <option key={c} value={c} className="text-navy">{c}</option>
                ))}
              </select>
              {errors.country && <p className={errorClass}>{errors.country.message}</p>}
            </div>
            <div>
              <label className={labelClass}>CEP: *</label>
              <input {...register("cep")} placeholder="CEP" className={inputClass} />
              {errors.cep && <p className={errorClass}>{errors.cep.message}</p>}
            </div>
          </div>

          {/* Estado + Cidade */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Estado: *</label>
              <input {...register("estado")} placeholder="Estado" className={inputClass} />
              {errors.estado && <p className={errorClass}>{errors.estado.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Cidade: *</label>
              <input {...register("cidade")} placeholder="Cidade" className={inputClass} />
              {errors.cidade && <p className={errorClass}>{errors.cidade.message}</p>}
            </div>
          </div>

          {/* Bairro + Endereço */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Bairro: *</label>
              <input {...register("bairro")} placeholder="Bairro" className={inputClass} />
              {errors.bairro && <p className={errorClass}>{errors.bairro.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Endereço: *</label>
              <input {...register("endereco")} placeholder="Endereço" className={inputClass} />
              {errors.endereco && <p className={errorClass}>{errors.endereco.message}</p>}
            </div>
          </div>

          {/* Número + Complemento */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            <div className="col-span-1">
              <label className={labelClass}>Número: *</label>
              <input {...register("numero")} type="number" className={inputClass} />
              {errors.numero && <p className={errorClass}>{errors.numero.message}</p>}
            </div>
            <div className="col-span-2 md:col-span-4">
              <label className={labelClass}>Complemento:</label>
              <input {...register("complemento")} placeholder="Complemento" className={inputClass} />
            </div>
          </div>

          {/* CPF */}
          <div>
            <label className={labelClass}>CPF: *</label>
            <input {...register("cpf")} placeholder="CPF" className={inputClass} />
            {errors.cpf && <p className={errorClass}>{errors.cpf.message}</p>}
          </div>

          {/* Telefone */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
            <div className="col-span-1">
              <label className={labelClass}>País:</label>
              <input {...register("ddd_pais")} placeholder="+55" className={inputClass} />
            </div>
            <div className="col-span-3 md:col-span-5">
              <label className={labelClass}>Celular/WhatsApp (com DDD): *</label>
              <input {...register("telefone")} type="tel" placeholder="Celular/Whatsapp" className={inputClass} />
              {errors.telefone && <p className={errorClass}>{errors.telefone.message}</p>}
            </div>
          </div>

          {/* Título do poema */}
          <div>
            <label className={labelClass}>Título do poema:</label>
            <input {...register("titulo_poema")} placeholder="Título do poema" className={inputClass} />
          </div>

          {/* Upload de arquivo */}
          <div>
            <label className={labelClass}>
              ATENÇÃO: Antes de enviar o arquivo verifique sua extensão. A extensão máxima do texto é de ATÉ 30 LINHAS (1 página). *
            </label>
            <div
              onDrop={handleDrop}
              onDragOver={e => e.preventDefault()}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center cursor-pointer hover:border-primary/60 hover:bg-white/5 transition-all"
            >
              <Upload className="w-10 h-10 text-white/60 mx-auto mb-3" />
              <p className="text-white/80 font-semibold">Arraste seus arquivos ou clique para selecionar</p>
              <p className="text-white/50 text-sm mt-1">PDF, DOC, DOCX, TXT, RTF, JPG, PNG (máx. 2 arquivos)</p>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.dot,.dotx,.docm,.dotm,.txt,.rtf,.jpg,.jpeg,.png,.gif,.bmp,.xls,.xlsx,.ppt,.pptx,.odt,.ods,.odp,.wps,.wpd"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            {files.length > 0 && (
              <div className="mt-3 space-y-2">
                {files.map((file, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2">
                    <FileText className="w-5 h-5 text-white/70 shrink-0" />
                    <span className="text-white text-sm truncate flex-1">{file.name}</span>
                    <span className="text-white/50 text-xs shrink-0">{(file.size / 1024).toFixed(0)} KB</span>
                    <button type="button" onClick={() => removeFile(i)} className="text-white/50 hover:text-red-300 transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Termos */}
          <div className="flex items-start gap-3">
            <input
              {...register("termos")}
              type="checkbox"
              id="termos"
              className="mt-1 w-5 h-5 rounded border-white/30 accent-primary cursor-pointer"
            />
            <label htmlFor="termos" className="text-white text-sm cursor-pointer">
              Declaro ter lido e concordar com os{" "}
              <a
                href="https://articule.art.br/wp-content/uploads/2026/02/REGULAMENTO-POEMAS-DE-AMOR-PARA-CURAR-O-MUNDO-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:text-accent/80 transition-colors"
              >
                Termos do Regulamento
              </a>. *
            </label>
          </div>
          {errors.termos && <p className={errorClass}>{errors.termos.message}</p>}

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-black text-xl py-4 px-16 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  ENVIANDO...
                </span>
              ) : (
                "ENVIAR"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InscricaoForm;
