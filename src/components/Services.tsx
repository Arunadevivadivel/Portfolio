import servicesImage from "@/assets/services-workspace.jpg";

const services = [
  {
    number: "01",
    title: "User Experience (UX)",
    description: "A skilled UI/UX designer understands the significance of both UI (UI) focuses of both UI...",
    features: ["Research", "Analysis", "Design"],
  },
  {
    number: "02",
    title: "Front-End Development",
    description: "Building responsive, performant web interfaces with modern technologies.",
  },
  {
    number: "03",
    title: "User Experience (UX)",
    description: "Creating intuitive user flows and seamless experiences.",
  },
  {
    number: "04",
    title: "Website Optimization",
    description: "Improving site performance, SEO, and user engagement metrics.",
  },
  {
    number: "05",
    title: "User Interface (UI) Design",
    description: "Crafting beautiful, accessible, and consistent visual designs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label mb-3 block">My Services</span>
            <h2 className="section-title max-w-sm">
              Unmatched Services for Your Needs
            </h2>
          </div>
          <button className="btn-outline self-start md:self-auto">
            Start a Project
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={servicesImage}
                alt="Designer workspace"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right - Services List */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={service.number}
                className={`group py-6 cursor-pointer transition-all duration-300 hover:pl-4 ${
                  index !== services.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm text-muted-foreground font-medium mt-1">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-warm-brown transition-colors flex items-center gap-2">
                      <span className="text-muted-foreground">—</span>
                      {service.title}
                    </h3>
                    {service.features && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                          >
                            • {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
