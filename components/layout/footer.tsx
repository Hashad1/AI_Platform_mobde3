"use client";

import { Brain } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-6 w-6" />
              <span className="text-xl font-bold">منصة الذكاء الاصطناعي</span>
            </div>
            <p className="text-muted-foreground">
              منصة متقدمة لإنشاء وتخصيص المساعدين الأذكياء لمختلف المجالات
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary">المميزات</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary">الأسعار</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary">عن المنصة</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">الدعم</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">المساعدة</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">قانوني</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">الشروط والأحكام</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">سياسة الخصوصية</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} منصة الذكاء الاصطناعي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}