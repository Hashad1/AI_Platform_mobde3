import { Brain, Home, Settings, BarChart3, CreditCard } from "lucide-react";
import { NavItem } from "./nav-item";

const items = [
  { icon: Home, label: "لوحة التحكم", href: "/dashboard" },
  { icon: Brain, label: "المساعدين", href: "/dashboard/assistants" },
  { icon: BarChart3, label: "التحليلات", href: "/dashboard/analytics" },
  { icon: CreditCard, label: "الفواتير", href: "/dashboard/billing" },
  { icon: Settings, label: "الإعدادات", href: "/dashboard/settings" },
];

export function NavItems() {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <NavItem key={item.href} {...item} />
      ))}
    </div>
  );
}