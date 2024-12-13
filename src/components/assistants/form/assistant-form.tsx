"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/form-field";
import { FormSelect } from "@/components/forms/form-select";
import { assistantSchema, type AssistantFormData } from "@/lib/validations/assistant";

const assistantTypes = [
  { value: "sales", label: "مبيعات" },
  { value: "education", label: "تعليم" },
  { value: "support", label: "دعم فني" },
  { value: "custom", label: "مخصص" },
];

interface AssistantFormProps {
  initialData?: Partial<AssistantFormData>;
  isSubmitting?: boolean;
  onSubmit: (data: AssistantFormData) => Promise<void>;
}

export function AssistantForm({
  initialData,
  isSubmitting,
  onSubmit,
}: AssistantFormProps) {
  const form = useForm<AssistantFormData>({
    resolver: zodResolver(assistantSchema),
    defaultValues: initialData || {
      name: "",
      type: undefined,
      description: "",
    },
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
        control={form.control}
        name="name"
        label="اسم المساعد"
        placeholder="أدخل اسم المساعد"
      />

      <FormSelect
        control={form.control}
        name="type"
        label="نوع المساعد"
        placeholder="اختر نوع المساعد"
        options={assistantTypes}
      />

      <FormField
        control={form.control}
        name="description"
        label="وصف المساعد"
        placeholder="أدخل وصفاً مختصراً للمساعد"
        multiline
      />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "جاري الحفظ..." : "حفظ المساعد"}
      </Button>
    </form>
  );
}