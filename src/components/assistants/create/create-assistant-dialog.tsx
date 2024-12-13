"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AssistantForm } from "../form/assistant-form";
import { useToast } from "@/components/ui/use-toast";
import { AssistantService } from "@/lib/services/assistant-service";
import type { AssistantFormData } from "@/lib/validations/assistant";

interface CreateAssistantDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function CreateAssistantDialog({
  open,
  onOpenChange,
  onSuccess,
}: CreateAssistantDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (data: AssistantFormData) => {
    try {
      setIsSubmitting(true);
      await AssistantService.create(data);
      
      toast({
        title: "تم إنشاء المساعد بنجاح",
        description: "يمكنك الآن البدء في استخدام المساعد الجديد",
      });
      
      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      toast({
        title: "خطأ في إنشاء المساعد",
        description: "حدث خطأ أثناء إنشاء المساعد. الرجاء المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>إنشاء مساعد جديد</DialogTitle>
        </DialogHeader>
        <AssistantForm
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}