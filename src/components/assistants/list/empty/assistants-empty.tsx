import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AssistantsEmptyProps {
  onCreateClick: () => void;
}

export function AssistantsEmpty({ onCreateClick }: AssistantsEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <Brain className="h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-semibold mb-2">لا يوجد مساعدين</h3>
      <p className="text-muted-foreground mb-4">
        قم بإنشاء مساعدك الأول للبدء في استخدام المنصة
      </p>
      <Button onClick={onCreateClick}>
        <Plus className="ml-2 h-4 w-4" />
        إنشاء مساعد
      </Button>
    </div>
  );
}