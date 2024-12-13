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
import type { Assistant } from "@/lib/types/assistant";
import type { AssistantFormData } from "@/lib/validations/assistant";

interface EditAssistantDialogProps {
  assistant: Assistant;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function EditAssistantDialog({
  assistant,
  open,
  onOpenChange,
  onSuccess,
}: EditAssistantDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (data: AssistantFormData) => {
    try {
      setIsSubmitting(true);
      await AssistantService.update(assistant.id, data);
      
      toast({
        title: "تم تحديث المساعد بنجاح",
        description: "تم حفظ التغييرات بنجاح",
      });
      
      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      toast({
        title: "خطأ في تحديث المساعد",
        description: "حدث خطأ أثناء تحديث المساعد. الرجاء المحاولة مرة أخرى",
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
          <DialogTitle>تعديل المساعد</DialogTitle>
        </DialogHeader>
        <AssistantForm
          initialData={assistant}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}