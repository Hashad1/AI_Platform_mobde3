import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AssistantsErrorProps {
  message: string;
  onRetry: () => void;
}

export function AssistantsError({ message, onRetry }: AssistantsErrorProps) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>خطأ</AlertTitle>
      <AlertDescription className="flex items-center justify-between">
        <span>{message}</span>
        <Button variant="outline" size="sm" onClick={onRetry}>
          إعادة المحاولة
        </Button>
      </AlertDescription>
    </Alert>
  );
}