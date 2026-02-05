import { useState } from "react";

const socialLinks = [
  { name: "Dribbble", href: "#" },
  { name: "Behance", href: "#" },
  { name: "Instagram", href: "#" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label mb-3 block">Testimonials</span>
          <h2 className="section-title">
            Let's Get in<br />Touch
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              Have a question, feedback, or interested in collaborating? 
              We'd love to hear from you!
            </p>
            
            {/* Social Links */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-4">Follow</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.name.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-soft"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-soft"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-soft resize-none"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
