import { ArrowUpRight } from "lucide-react";
import portfolioImg from "@/assets/project-portfolio.jpg";
import fashionImg from "@/assets/project-fashion.jpg";
import realEstateImg from "@/assets/project-realestate.jpg";
import managementImg from "@/assets/project-management.jpg";
import petImg from "@/assets/project-pet.jpg";

const projects = [
  {
    id: "01",
    title: "Portfolio",
    tags: ["UI/UX", "Web"],
    image: portfolioImg,
  },
  {
    id: "02",
    title: "Fashion App",
    tags: ["UI/UX Designer", "Mobile App"],
    image: fashionImg,
  },
  {
    id: "03",
    title: "Real State web",
    tags: ["UI/UX", "Webflow Dev"],
    image: realEstateImg,
  },
  {
    id: "04",
    title: "Management Web",
    tags: ["UI/UX", "Webflow"],
    image: managementImg,
  },
  {
    id: "05",
    title: "Fashion App",
    tags: ["UI/UX Designer", "Mobile App"],
    image: fashionImg,
  },
  {
    id: "06",
    title: "Pet App",
    tags: ["UI/UX", "Android Dev"],
    image: petImg,
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
          {projects.map((project) => (
            <div
              key={project.id + project.title}
              className="group card-soft hover:shadow-elevated transition-all duration-500 cursor-pointer"
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
              <button className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-warm-brown transition-colors">
                View project
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
