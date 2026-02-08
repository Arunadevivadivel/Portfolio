import { MessageCircle, Linkedin } from "lucide-react";

const FloatingSocials = () => {
  const phoneNumber = "919597153053";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const linkedinUrl = "https://www.linkedin.com/in/arunadevi-vadivel";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect on LinkedIn"
        className="w-14 h-14 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Linkedin size={26} fill="white" strokeWidth={0} />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={28} fill="white" strokeWidth={0} />
      </a>
    </div>
  );
};

export default FloatingSocials;
