import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="px-6 py-3 border-b border-gray-200 bg-white">
      <ol className="flex items-center gap-1 text-sm text-gray-600">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={13} className="text-gray-400" />}
            {item.href ? (
              <a href={item.href} className="hover:underline hover:text-gray-900">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-800">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
