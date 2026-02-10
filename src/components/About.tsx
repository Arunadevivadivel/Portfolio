import { Check, Download } from "lucide-react";
import aboutImage from "@/assets/about-portrait.jpg";

const highlights = [
  "User-centric design mindset",
  "Experience with web & mobile apps",
  "Strong understanding of UX research & UI systems",
  "Detail-oriented and collaborative designer",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label mb-3 block">About Me</span>
          <h2 className="section-title max-w-md">About Me</h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-elevated max-w-md mx-auto lg:mx-0">
              <img
                src={aboutImage}
                alt="Abstract design graphic representing creative UI/UX design"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a passionate UI/UX Designer who loves crafting clean, intuitive, and meaningful digital experiences. I focus on understanding user needs and translating them into visually appealing and functional designs.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-primary-foreground" />
                  </span>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#" className="btn-primary inline-flex items-center gap-2">
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
