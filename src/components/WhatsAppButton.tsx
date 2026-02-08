import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919597153053";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  );
};

export default WhatsAppButton;
