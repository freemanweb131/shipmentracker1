import { useState } from "react";
import { Search, User, ChevronDown, Menu, X, Package } from "lucide-react";

const navItems = [
  {
    label: "Shipping",
    dropdown: ["Create a Shipment", "Schedule a Pickup", "Shipping Rates & Fees", "International Shipping", "Freight Shipping"],
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMouseEnter = (label: string) => setOpenDropdown(label);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <header className="relative z-50">
      <nav className="bg-[#4d148c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0">
              <div className="flex items-center">
                <span className="text-white font-extrabold text-3xl tracking-tight">
                  <span className="text-white">Fed</span>
                  <span className="text-[#ff6200]">Ex</span>
                  <span className="text-[#ff6200] font-bold text-xl">.</span>
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white hover:text-gray-200 transition-colors whitespace-nowrap">
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full mt-0 w-52 bg-white shadow-lg border border-gray-200 z-50">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-purple-50 hover:text-[#4d148c] transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-gray-200 transition-colors whitespace-nowrap">
                <User size={18} />
                Sign Up or Log In
              </a>
              <button className="text-white hover:text-gray-200 transition-colors">
                <Search size={20} />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#4d148c] border-t border-purple-700">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-sm font-medium text-white hover:bg-purple-800 rounded"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.dropdown.map((sub) => (
                        <a key={sub} href="#" className="block py-1.5 px-3 text-sm text-purple-200 hover:text-white">
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-purple-700">
                <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-white">
                  <User size={16} /> Sign Up or Log In
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
