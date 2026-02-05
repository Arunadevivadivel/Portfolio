import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonialImage from "@/assets/testimonial-client.jpg";

const testimonials = [
  {
    id: 1,
    text: "Working with Aruna was a game-changer. Her UX strategy improved our user engagement, and her design skills are top-notch! She's detail-oriented, creative, and truly understands how users think.",
    author: "Client Name",
    role: "CEO / Product Manager",
    image: testimonialImage,
  },
  {
    id: 2,
    text: "Aruna's attention to detail and creative solutions exceeded our expectations. The design process was smooth and collaborative, resulting in a product that truly represents our brand vision.",
    author: "Sarah Chen",
    role: "Startup Founder",
    image: testimonialImage,
  },
  {
    id: 3,
    text: "Outstanding work on our mobile application. The user interface is intuitive and beautiful. Our user engagement metrics have significantly improved since the redesign.",
    author: "James Miller",
    role: "Product Manager",
    image: testimonialImage,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label mb-3 block">Testimonials</span>
            <h2 className="section-title">
              What Our Client<br />Says
            </h2>
          </div>
          <button className="btn-outline self-start md:self-auto">
            Become a Client
          </button>
        </div>

        {/* Testimonial Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Quote */}
          <div className="card-soft">
            <div className="text-6xl text-muted-foreground/30 font-heading mb-4">"</div>
            <p className="text-lg leading-relaxed text-foreground/90 mb-8">
              {current.text}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-heading text-lg font-semibold">{current.author}</h4>
                <p className="text-sm text-muted-foreground">{current.role}</p>
              </div>
              
              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">0{currentIndex + 1}</span>
                  <span className="mx-1">/</span>
                  <span>0{testimonials.length}</span>
                </span>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-elevated max-w-md ml-auto">
              <img
                src={current.image}
                alt={current.author}
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
