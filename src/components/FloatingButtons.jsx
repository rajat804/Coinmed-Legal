// components/FloatingButtons.jsx

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

      {/* Action Buttons */}
      <div
        className={`
          flex flex-col items-center gap-4
          transition-all duration-300
          ${open
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-5 invisible"}
        `}
      >

        {/* WhatsApp */}
        <a
          href="https://wa.me/+918009792188"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >

          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

          <div
            className="
              relative
              w-14 h-14
              rounded-full
              bg-green-500
              flex items-center justify-center
              shadow-[0_10px_25px_rgba(34,197,94,0.45)]
              transition-all duration-300
              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            <FaWhatsapp className="text-white text-[30px]" />
          </div>
        </a>

        {/* Call */}
        <a
          href="tel:+918009792188"
          className="group relative"
        >

          <span className="absolute inset-0 rounded-full bg-[#C6A43F] animate-ping opacity-30"></span>

          <div
            className="
              relative
              w-14 h-14
              rounded-full
              bg-gradient-to-br from-[#C6A43F] to-[#9f7f1e]
              flex items-center justify-center
              shadow-[0_10px_25px_rgba(198,164,63,0.45)]
              transition-all duration-300
              group-hover:scale-110
              group-hover:-rotate-6
            "
          >
            <Phone size={26} className="text-white" />
          </div>
        </a>

      </div>

      {/* Main Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          relative
          w-16 h-16
          rounded-full
          bg-[#0A1628]
          text-white
          flex items-center justify-center
          shadow-[0_10px_30px_rgba(10,22,40,0.45)]
          hover:scale-110
          transition-all duration-300
        "
      >

        {/* Pulse */}
        <span className="absolute inset-0 rounded-full bg-[#0A1628] animate-ping opacity-20"></span>

        {
          open
            ? <X size={30} className="relative z-10" />
            : <MessageCircle size={30} className="relative z-10" />
        }

      </button>

    </div>
  );
};

export default FloatingButtons;