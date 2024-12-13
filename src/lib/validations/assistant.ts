import { z } from "zod";
import { AssistantType } from "../types/assistant";

export const assistantSchema = z.object({
  name: z.string()
    .min(2, "اسم المساعد يجب أن يكون حرفين على الأقل")
    .max(50, "اسم المساعد لا يمكن أن يتجاوز 50 حرف"),
  type: z.enum(["sales", "education", "support", "custom"] as const, {
    required_error: "يجب اختيار نوع المساعد",
  }),
  description: z.string()
    .min(10, "الوصف يجب أن يكون 10 أحرف على الأقل")
    .max(500, "الوصف لا يمكن أن يتجاوز 500 حرف"),
});

export type AssistantFormData = z.infer<typeof assistantSchema>;