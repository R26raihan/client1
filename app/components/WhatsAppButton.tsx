import { MessageCircle } from "lucide-react";
import { waLink } from "../lib/site-config";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}
