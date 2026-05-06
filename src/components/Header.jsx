// components/Header.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Scale } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Pages",
      dropdown: [
        { name: "About Us", path: "/about" },
        { name: "FAQ", path: "/faq" },
        { name: "Gallery", path: "/gallery" },
      ],
    },
    { name: "Attorney", path: "/attorney" },
    { name: "Internship", path: "/internship" },
    { name: "Members", path: "/members" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-[#0A1628] p-2 rounded-lg group-hover:rotate-6 transition">
              <Scale size={26} className="text-[#C6A43F]" />
            </div>
            <div>
              <h1 className="text-xl font-bold">
                <span className="text-[#0A1628]">Coinmed</span>
                <span className="text-[#C6A43F]"> Legal</span>
              </h1>
              <p className="text-[10px] text-gray-500">
                Advocates & Consultants
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">

                {/* Dropdown */}
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-gray-700 hover:text-[#C6A43F] font-medium"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className="group-hover:rotate-180 transition"
                      />
                    </button>

                    <div className="absolute left-0 top-full mt-2 w-52 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                      {item.dropdown.map((sub, i) => (
                        <NavLink
                          key={i}
                          to={sub.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#C6A43F] hover:text-white"
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative font-medium transition ${
                        isActive
                          ? "text-[#C6A43F]"
                          : "text-gray-700 hover:text-[#C6A43F]"
                      } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#C6A43F] after:transition-all after:duration-300 ${
                        isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="p-4 space-y-3">
          {navItems.map((item, idx) => (
            <div key={idx}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setPagesDropdown(!pagesDropdown)}
                    className="w-full flex justify-between items-center py-2 font-medium"
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition ${
                        pagesDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {pagesDropdown && (
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((sub, i) => (
                        <NavLink
                          key={i}
                          to={sub.path}
                          onClick={() => {
                            setIsOpen(false);
                            setPagesDropdown(false);
                          }}
                          className="block text-sm text-gray-600 hover:text-[#C6A43F]"
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-700 hover:text-[#C6A43F]"
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;