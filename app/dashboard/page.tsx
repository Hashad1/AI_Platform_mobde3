import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Brain, Users, Zap } from "lucide-react";

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

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">مرحباً، محمد</h2>
          <p className="text-muted-foreground">
            هذه نظرة عامة على نشاط مساعديك الذكيين
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}