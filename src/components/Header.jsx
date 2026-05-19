// components/Header.jsx

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { assets } from "../assets/js/assets";

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
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src={assets.removeLogo}
              alt="Coinmed Legal Logo"
              className="w-[150px] md:w-[170px] h-auto object-contain transition duration-300 group-hover:scale-105"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            {navItems.map((item, idx) => (

              <div key={idx} className="relative group">

                {/* Dropdown Menu */}
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-gray-700 hover:text-[#C6A43F] font-medium transition"
                    >
                      {item.name}

                      <ChevronDown
                        size={16}
                        className="transition duration-300 group-hover:rotate-180"
                      />
                    </button>

                    {/* Dropdown Content */}
                    <div
                      className="
                        absolute left-0 top-full mt-3
                        w-56 bg-white rounded-xl shadow-2xl
                        border border-gray-100
                        opacity-0 invisible
                        translate-y-3
                        group-hover:opacity-100
                        group-hover:visible
                        group-hover:translate-y-0
                        transition-all duration-300
                        overflow-hidden
                      "
                    >
                      {item.dropdown.map((sub, i) => (
                        <NavLink
                          key={i}
                          to={sub.path}
                          className={({ isActive }) =>
                            `block px-5 py-3 text-sm font-medium transition
                            ${
                              isActive
                                ? "bg-[#C6A43F] text-white"
                                : "text-gray-700 hover:bg-[#C6A43F] hover:text-white"
                            }`
                          }
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
                      `relative font-medium transition duration-300
                      ${
                        isActive
                          ? "text-[#C6A43F]"
                          : "text-gray-700 hover:text-[#C6A43F]"
                      }

                      after:absolute
                      after:left-0
                      after:-bottom-1
                      after:h-[2px]
                      after:bg-[#C6A43F]
                      after:transition-all
                      after:duration-300
                      ${
                        isActive
                          ? "after:w-full"
                          : "after:w-0 hover:after:w-full"
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
            <button
              onClick={() => setIsOpen(true)}
              className="text-[#0A1628]"
            >
              <Menu size={28} />
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
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-5 border-b">

          <img
            src={assets.removeLogo}
            alt="logo"
            className="w-[120px]"
          />

          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="p-5 space-y-2">

          {navItems.map((item, idx) => (

            <div key={idx}>

              {/* Mobile Dropdown */}
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setPagesDropdown(!pagesDropdown)}
                    className="w-full flex justify-between items-center py-3 font-medium text-gray-700 hover:text-[#C6A43F]"
                  >
                    {item.name}

                    <ChevronDown
                      size={18}
                      className={`transition duration-300 ${
                        pagesDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      pagesDropdown
                        ? "max-h-60 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 border-l-2 border-[#C6A43F] space-y-2">

                      {item.dropdown.map((sub, i) => (
                        <NavLink
                          key={i}
                          to={sub.path}
                          onClick={() => {
                            setIsOpen(false);
                            setPagesDropdown(false);
                          }}
                          className={({ isActive }) =>
                            `block py-2 text-sm transition ${
                              isActive
                                ? "text-[#C6A43F] font-semibold"
                                : "text-gray-600 hover:text-[#C6A43F]"
                            }`
                          }
                        >
                          {sub.name}
                        </NavLink>
                      ))}

                    </div>
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 font-medium transition ${
                      isActive
                        ? "text-[#C6A43F]"
                        : "text-gray-700 hover:text-[#C6A43F]"
                    }`
                  }
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