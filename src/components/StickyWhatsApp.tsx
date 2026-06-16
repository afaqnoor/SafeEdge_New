import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/923000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}
