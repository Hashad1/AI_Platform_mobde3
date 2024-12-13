import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormError } from "@/components/forms/form-error";

interface AuthInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  register: any;
}

export function AuthInput({
  id,
  label,
  type = "text",
  placeholder,
  error,
  register,
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && <FormError message={error} />}
    </div>
  );
}