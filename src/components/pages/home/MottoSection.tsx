
const MottoSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto">
        <div className="bg-primary text-primary-foreground rounded-lg p-12 relative overflow-hidden flex flex-col items-center justify-center text-center">
            <blockquote className="text-3xl font-medium leading-9 relative">
                <p><span className="text-accent">&ldquo;</span>Nunca fallarle al <span className="line-through">CLIENTE</span>, PROTEGIDO.<span className="text-accent">&rdquo;</span></p>
            </blockquote>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl">
                Nuestra mayor satisfacción es el éxito y la tranquilidad de las empresas que confían en nosotros.
            </p>
        </div>
      </div>
    </section>
  );
};

export default MottoSection;
