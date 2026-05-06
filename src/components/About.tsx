import { Check, Download, Briefcase } from "lucide-react";
import aboutImage from "@/assets/about-portrait.jpg";

const experience = [
  {
    title: "UI/UX Designer – Intern",
    company: "3 Months Internship",
    description:
      "Gained hands-on experience in UI/UX design, wireframing, user flows, and visual design. Worked closely with team members to understand user requirements and convert them into clean, usable interfaces.",
  },
  {
    title: "UI/UX Designer – Full-Time",
    company: "Manovate Technology",
    duration: "1 Year Full-Time Experience",
    description:
      "Worked on real-world projects involving web and mobile applications. Contributed to user research, UI design, prototyping, and design improvements while collaborating with developers and stakeholders.",
  },
];

const highlights = [
  "Experience in real-time client projects",
  "Strong understanding of UX principles & UI consistency",
  "Skilled in design tools and modern workflows",
  "Good collaboration with developers and product teams",
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-elevated max-w-md mx-auto lg:mx-0 border border-border">
              <img
                src={aboutImage}
                alt="Portrait of Aruna, UI/UX Designer"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a passionate UI/UX Designer focused on creating intuitive, user-friendly, and visually clean digital experiences. I enjoy solving design problems through research, thoughtful layouts, and consistent design systems.
            </p>

            {/* Work Experience */}
            <div className="mb-8">
              <h3 className="font-heading text-xl font-semibold mb-5 flex items-center gap-2">
                <Briefcase size={20} className="text-muted-foreground" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div
                    key={exp.title}
                    className="relative pl-6 border-l-2 border-border"
                  >
                    <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                    <h4 className="font-heading text-base font-semibold">
                      {exp.title}
                    </h4>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {exp.company}
                      {exp.duration && ` · ${exp.duration}`}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-primary-foreground" />
                  </span>
                  <span className="text-foreground font-medium text-sm">{item}</span>
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
