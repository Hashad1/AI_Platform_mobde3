import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 px-4 md:px-6 lg:py-32">
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            منصة ذكاء اصطناعي متقدمة لإنشاء مساعدين أذكياء
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            أنشئ مساعدك الذكي المخصص للعمل في مجالك. حلول مبتكرة للأفراد والشركات.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Sparkles className="h-5 w-5" />
              ابدأ مجاناً
            </Button>
            <Button size="lg" variant="outline">
              تعرف على المزيد
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}