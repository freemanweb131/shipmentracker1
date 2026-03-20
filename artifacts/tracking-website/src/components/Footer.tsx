import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  ArrowUp,
} from "lucide-react";

const companyLinks = [
  { label: "About FedEx", href: "https://about.usps.com/" },
  { label: "Our Portfolio", href: "#" },
  { label: "Investor Relations", href: "#" },
  { label: "Careers", href: "#" },
];
const companyLinks2 = [
  { label: "FedEx Blog", href: "#" },
  { label: "Corporate Responsibility", href: "#" },
  { label: "Newsroom", href: "#" },
  { label: "Contact Us", href: "#" },
];
const moreFedex = [
  { label: "FedEx Compatible", href: "#" },
  { label: "FedEx Developer Portal", href: "#" },
  { label: "FedEx Logistics", href: "#" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 relative">
      {/* Back to top button */}
      <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 bg-[#4d148c] hover:bg-[#3a0f6b] text-white text-sm font-bold px-5 py-3 rounded-full transition-colors uppercase tracking-wider"
        >
          Back to top
          <span className="bg-white/20 rounded-full p-1">
            <ArrowUp size={14} />
          </span>
        </button>
      </div>

      {/* Main footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Our Company col 1 */}
          <div>
            <h4 className="text-xs font-bold text-[#4d148c] uppercase tracking-wider mb-4">
              Our Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-gray-900 hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Company col 2 */}
          <div>
            <h4 className="text-xs font-bold text-transparent uppercase tracking-wider mb-4">&nbsp;</h4>
            <ul className="space-y-2">
              {companyLinks2.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-gray-700 hover:text-gray-900 hover:underline">
                    {label}
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
              {moreFedex.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-gray-700 hover:text-gray-900 hover:underline">
                    {label}
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

        {/* Divider + Social */}
        <div className="border-t border-gray-300 mt-10 pt-8">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-xs font-bold text-[#4d148c] uppercase tracking-wider mr-2">
              Follow FedEx
            </span>
            {[
              { Icon: Mail, label: "Email", href: "#" },
              { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/USPS?rf=108501355848630" },
              { Icon: Twitter, label: "Twitter", href: "#" },
              { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/uspostalservice/?hl=en" },
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
              { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/usps" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-xs">
          <span>© FedEx 1995–2026</span>
        </div>
      </div>
    </footer>
  );
}
