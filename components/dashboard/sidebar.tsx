"use client";

import { Brain, Home, Settings, BarChart3, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const sidebarItems = [
  { icon: Home, label: "لوحة التحكم", href: "/dashboard" },
  { icon: Brain, label: "المساعدين", href: "/dashboard/assistants" },
  { icon: BarChart3, label: "التحليلات", href: "/dashboard/analytics" },
  { icon: CreditCard, label: "الفواتير", href: "/dashboard/billing" },
  { icon: Settings, label: "الإعدادات", href: "/dashboard/settings" },
];

export function Sidebar() {
  return (
    <div className="border-l bg-background w-64 min-h-[calc(100vh-4rem)]">
      <ScrollArea className="h-full py-6">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  window.location.pathname === item.href && "bg-secondary"
                )}
              >
                <item.icon className="ml-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}