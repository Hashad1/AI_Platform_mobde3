"use client";

import { useId } from "react";
import { Control, useController } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormError } from "./form-error";

interface FormFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  control: Control<any>;
  multiline?: boolean;
}

export function FormField({
  name,
  label,
  placeholder,
  control,
  multiline,
}: FormFieldProps) {
  const id = useId();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const InputComponent = multiline ? Textarea : Input;

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <InputComponent
        id={id}
        placeholder={placeholder}
        {...field}
      />
      {error?.message && <FormError message={error.message} />}
    </div>
  );
}