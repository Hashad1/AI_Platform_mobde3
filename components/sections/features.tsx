import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Building2, GraduationCap, User } from "lucide-react";

const features = [
  {
    title: "للأفراد",
    description: "مساعد شخصي ذكي يساعدك في إدارة مهامك اليومية",
    icon: User,
  },
  {
    title: "للشركات",
    description: "حلول ذكية لتحسين الإنتاجية وأتمتة العمليات",
    icon: Building2,
  },
  {
    title: "للتعليم",
    description: "أدوات تعليمية متقدمة لتحسين تجربة التعلم",
    icon: GraduationCap,
  },
  {
    title: "تخصيص متقدم",
    description: "إمكانية تخصيص المساعد الذكي حسب احتياجاتك",
    icon: Brain,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">مميزات المنصة</h2>
          <p className="text-muted-foreground">اكتشف كيف يمكن لمنصتنا مساعدتك</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}