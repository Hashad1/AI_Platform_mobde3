import { MoreVertical, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AssistantActionsProps {
  assistantId: number;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export function AssistantActions({
  assistantId,
  onEdit,
  onDelete,
}: AssistantActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onEdit(assistantId)}>
          <Pencil className="ml-2 h-4 w-4" />
          تعديل
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="text-destructive"
          onClick={() => onDelete(assistantId)}
        >
          <Trash className="ml-2 h-4 w-4" />
          حذف
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}