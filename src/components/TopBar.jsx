// components/TopBar.jsx
import { 
  Mail, 
  Phone, 
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#0A1628] text-gray-300 text-sm py-3 px-4 md:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Left Side - Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:text-[#C6A43F] transition-colors cursor-pointer group">
            <Mail size={14} className="text-[#C6A43F] group-hover:scale-110 transition-transform" />
            <span>contact@insartlegal.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#C6A43F] transition-colors cursor-pointer group">
            <Phone size={14} className="text-[#C6A43F] group-hover:scale-110 transition-transform" />
            <span>+91 80097 92188</span>
          </div>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-[#C6A43F] transition-all hover:scale-110 transform">
            <FaFacebook size={16} />
          </a>
          <a href="#" className="hover:text-[#C6A43F] transition-all hover:scale-110 transform">
            <FaTwitter size={16} />
          </a>
          <a href="#" className="hover:text-[#C6A43F] transition-all hover:scale-110 transform">
            <FaLinkedin size={16} />
          </a>
          <a href="#" className="hover:text-[#C6A43F] transition-all hover:scale-110 transform">
            <FaInstagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;