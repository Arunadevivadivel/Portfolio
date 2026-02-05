const footerLinks = [
  { name: "Terms", href: "#" },
  { name: "Privacy", href: "#" },
  { name: "Policy", href: "#" },
  { name: "Rules", href: "#" },
  { name: "Maps", href: "#" },
];

const socialLinks = [
  { name: "X", href: "#" },
  { name: "Fb", href: "#" },
  { name: "Li", href: "#" },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Your Designer. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                aria-label={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
