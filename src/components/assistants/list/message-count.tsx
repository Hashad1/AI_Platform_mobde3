import { MessageSquare } from "lucide-react";

interface MessageCountProps {
  count: number;
}

export function MessageCount({ count }: MessageCountProps) {
  return (
    <div className="flex items-center text-sm text-muted-foreground">
      <MessageSquare className="ml-1 h-4 w-4" />
      {count} رسالة
    </div>
  );
}