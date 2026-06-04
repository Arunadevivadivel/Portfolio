import { Star } from "lucide-react";
import profileImage from "@/assets/aruna.jpg.jpeg";
const brands = [{
  name: "Client A",
  logo: "Client A"
}, {
  name: "Client B",
  logo: "Client B"
}, {
  name: "Startup X",
  logo: "Startup X"
}, {
  name: "Product Y",
  logo: "Product Y"
}];
const Hero = () => {
  return <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="section-label mb-4 block">Portfolio</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6">
              Arunadevi—<br />UI/UX Designer
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-lg">
              Welcome to my creative space! I'm a passionate UI/UX designer with a love for transforming ideas into beautiful, user-centered digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
              I specialize in designing intuitive and engaging interfaces using tools like Wix Studio, Figma, Canva, and Gemini AI Studio. My goal is to bring clarity, functionality, and visual elegance to every project I work on.
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-border rounded-lg mb-8">
              <span className="font-heading text-lg font-medium">UI-UX Designer</span>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            </div>
            <div className="flex flex-wrap gap-4">
  <a href="mailto:arunadevivadivel@gmail.com" className="btn-primary">
    Contact Me
  </a>

<a
href="https://arunadevivadivel.github.io/aruna-portfolio/ARUNADEVI-UIUX.PDF(1).pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary"
>
  Download Resume
</a>
</div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:ml-auto lg:mr-0">
              {/* Profile Image */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-card shadow-elevated">
                <img alt="Arunadevi - UI/UX Designer" className="w-full h-full object-cover" src={profileImage} />
              </div>
              
              {/* Floating Review Badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card rounded-2xl p-4 shadow-card animate-float">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-xs text-muted-foreground max-w-[140px]">
                  "Verified and reliable for best design work"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-8 max-w-md">
            Trusted by top clients and brands for delivering user-focused design solutions.
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {brands.map(brand => <span key={brand.name} className="text-muted-foreground/60 font-medium text-lg tracking-wide hover:text-foreground transition-colors">
                {brand.logo}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
