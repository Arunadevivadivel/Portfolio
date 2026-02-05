const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 text-primary-foreground/10 text-4xl">✦</div>
      <div className="absolute bottom-8 right-8 text-primary-foreground/10 text-4xl">✦</div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-foreground/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-8">
            Let's Get In Touch
          </h2>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-foreground text-primary rounded-full font-medium transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-elevated"
          >
            Become a Client
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
