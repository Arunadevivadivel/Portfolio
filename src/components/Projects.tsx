import { ArrowUpRight } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.png";
import fitnessImg from "@/assets/project-fitness.png";
import realEstateImg from "@/assets/project-realestate.png";
import managementImg from "@/assets/project-management.png";
import fashionImg from "@/assets/project-fashion.png";
import petImg from "@/assets/project-pet.png";

const projects = [
  {
    id: "01",
    title: "AI Chatbot Automation Website",
    tags: ["UI/UX", "Product Design"],
    image: ecommerceImg,
    link: "https://www.figma.com/design/FLqokS3IOrDJcWwXgfVM2o/TheBotMate?node-id=0-1&t=mAgT3Fz8qoqUNT9b-1",
  },
  {
    id: "02",
    title: "Pet Vaccination Tracking",
    tags: ["Mobile UX", "Visual Design"],
    image: fitnessImg,
    link: "https://www.figma.com/design/Ax3q3hgKnZEgGhPvlqlIwV/Veterinary-doctors?node-id=0-1&t=TNubuBOuwy7lHFDf-1",
  },
  {
    id: "03",
    title: "AI-Powered Call Analyzer",
    tags: ["UI Design", "Responsive Layout"],
    image: realEstateImg,
    link: "",
  },
  {
    id: "04",
    title: "HRMS Dashboard",
    tags: ["UX Strategy", "Interaction Design"],
    image: managementImg,
    link: "",
  },
  {
    id: "05",
    title: "CONSTRUCTION WEBSITE",
    tags: ["UX Wireframes", "Hi-Fi Prototype"],
    image: fashionImg,
    link: "https://www.klvinteriors.com/",
  },
  {
    id: "06",
    title: "Pet Care Service App",
    tags: ["User Flow", "UI/UX Design"],
    image: petImg,
    link: "https://www.esgityadvisors.com/",
  },
];

const Projects = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label mb-3 block">Latest Projects</span>
            <h2 className="section-title">
              Projects and<br />practice
            </h2>
          </div>
          <button className="btn-primary self-start md:self-auto">
            See All
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Wrapper = project.link ? "a" : "div";
            const wrapperProps = project.link
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={project.id + project.title}
                {...wrapperProps}
                className="group card-soft hover:shadow-elevated transition-all duration-500 cursor-pointer block"
              >
                {/* Project Number */}
                <span className="text-sm text-muted-foreground font-medium mb-3 block">
                  {project.id}
                </span>
                
                {/* Title */}
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* View Button */}
                <span className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-warm-brown transition-colors">
                  View project
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
