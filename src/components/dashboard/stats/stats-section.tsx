import { Brain, Users, Zap } from "lucide-react";
import { StatCard } from "./stat-card";

const stats = [
  {
    title: "المساعدين النشطين",
    value: "3",
    icon: Brain,
  },
  {
    title: "الرسائل المتبقية",
    value: "847",
    icon: Zap,
  },
  {
    title: "المستخدمين",
    value: "12",
    icon: Users,
  },
];

export function StatsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}