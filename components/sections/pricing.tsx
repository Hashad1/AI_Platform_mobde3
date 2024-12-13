import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "مجاني",
    price: "0",
    description: "للاستخدام الشخصي",
    features: [
      "إنشاء مساعد ذكي واحد",
      "100 رسالة شهرياً",
      "الميزات الأساسية",
      "دعم المجتمع",
    ],
  },
  {
    name: "احترافي",
    price: "49",
    description: "للمحترفين والشركات الصغيرة",
    features: [
      "إنشاء 5 مساعدين أذكياء",
      "1000 رسالة شهرياً",
      "ميزات متقدمة",
      "دعم فني على مدار الساعة",
      "تخصيص متقدم",
    ],
  },
  {
    name: "للمؤسسات",
    price: "199",
    description: "للشركات الكبيرة",
    features: [
      "عدد غير محدود من المساعدين",
      "رسائل غير محدودة",
      "جميع الميزات المتقدمة",
      "دعم فني مخصص",
      "تدريب وإعداد مخصص",
      "تحليلات متقدمة",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">خطط الأسعار</h2>
          <p className="text-muted-foreground">اختر الخطة المناسبة لاحتياجاتك</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/شهرياً</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">اشترك الآن</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}