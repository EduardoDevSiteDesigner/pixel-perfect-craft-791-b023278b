const WhatsAppButton = () => {
  const message = encodeURIComponent("Olá, gostaria de mais informações");
  const phone = "5521994728748";

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-xl transition-transform hover:scale-110"
      aria-label="Contato pelo WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.742 3.072 9.37L1.062 31.37l6.244-2.004A15.91 15.91 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.342 22.616c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.824-6.81-8.062-7.124-.228-.314-1.926-2.566-1.926-4.894s1.218-3.47 1.65-3.944c.39-.428 1.026-.642 1.638-.642.198 0 .376.01.536.018.432.018.648.044.934.724.354.846 1.218 2.964 1.326 3.18.108.216.216.504.072.804-.134.306-.252.498-.468.762-.216.264-.444.468-.66.75-.198.252-.42.522-.18.954.24.432 1.068 1.764 2.294 2.856 1.578 1.404 2.904 1.842 3.336 2.04.432.198.684.168.936-.1.264-.276 1.116-1.296 1.416-1.74.294-.444.594-.372.996-.222.408.144 2.58 1.218 3.024 1.44.444.222.738.33.846.516.108.186.108 1.08-.282 2.18z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
