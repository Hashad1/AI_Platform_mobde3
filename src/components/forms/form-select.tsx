"use client";

import { useId } from "react";
import { Control, useController } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormError } from "./form-error";

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  name: string;
  label: string;
  placeholder?: string;
  options: Option[];
  control: Control<any>;
}

export function FormSelect({
  name,
  label,
  placeholder,
  options,
  control,
}: FormSelectProps) {
  const id = useId();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Select
        value={field.value}
        onValueChange={field.onChange}
      >
        <SelectTrigger id={id}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error?.message && <FormError message={error.message} />}
    </div>
  );
}