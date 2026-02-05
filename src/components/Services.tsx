import servicesImage from "@/assets/services-workspace.jpg";

const services = [
  {
    number: "01",
    title: "User Experience (UX) Design",
    description: "Crafting intuitive, user-first flows that make interactions feel natural and delightful.",
  },
  {
    number: "02",
    title: "User Interface (UI) Design",
    description: "Clean, modern visuals that leave a lasting impression — optimized for web and mobile.",
  },
  {
    number: "03",
    title: "Website Design Using Wix Studio",
    description: "Custom, responsive websites built on Wix Studio with attention to UX fundamentals.",
  },
  {
    number: "04",
    title: "Prototyping & UX Testing",
    description: "Figma and Canva prototypes to validate ideas and shape final design decisions.",
  },
  {
    number: "05",
    title: "AI-Assisted Design + Tools",
    description: "Leveraging Gemini AI Studio for smarter ideation and rapid UX iteration.",
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
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
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
