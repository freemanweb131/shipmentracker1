import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
} from "lucide-react";

const companyLinks = [
  "About FedEx",
  "Our Portfolio",
  "Investor Relations",
  "Careers",
];

const companyLinks2 = [
  "FedEx Blog",
  "Corporate Responsibility",
  "Newsroom",
  "Contact Us",
];

const moreFedex = ["FedEx Compatible", "FedEx Developer Portal", "FedEx Logistics"];

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      {/* Main footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Our Company col 1 */}
          <div>
            <h4 className="text-xs font-bold text-[#4d148c] uppercase tracking-wider mb-4">
              Our Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Company col 2 */}
          <div>
            <h4 className="text-xs font-bold text-transparent uppercase tracking-wider mb-4">
              &nbsp;
            </h4>
            <ul className="space-y-2">
              {companyLinks2.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More from FedEx */}
          <div>
            <h4 className="text-xs font-bold text-[#4d148c] uppercase tracking-wider mb-4">
              More From FedEx
            </h4>
            <ul className="space-y-2">
              {moreFedex.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language */}
          <div>
            <h4 className="text-xs font-bold text-[#4d148c] uppercase tracking-wider mb-4">
              Language
            </h4>
            <div className="flex items-center gap-2 mb-3">
              <Globe size={16} className="text-gray-600" />
              <span className="text-sm text-gray-700">United States</span>
            </div>
            <select className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#4d148c]">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
              <option>中文</option>
            </select>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-10 pt-8">
          {/* Social Icons */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-xs font-bold text-[#4d148c] uppercase tracking-wider mr-2">
              Follow FedEx
            </span>
            {[
              { Icon: Mail, label: "Email" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-600 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#4d148c] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© FedEx 1995–2026</span>
          <div className="flex flex-wrap items-center gap-4">
            {["Site Map", "Cookie Consent", "Terms of Use", "Privacy & Security", "Ad Choices"].map(
              (item, i) => (
                <span key={item} className="flex items-center gap-4">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                  {i < 4 && <span className="text-purple-300">|</span>}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
