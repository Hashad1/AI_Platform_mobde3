"use client";

import { memo } from "react";
import { Brain, MessageSquare, MoreVertical, Pencil, Trash } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Assistant } from "@/lib/types/assistant";

interface AssistantCardProps {
  assistant: Assistant;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const AssistantCard = memo(function AssistantCard({ 
  assistant,
  onEdit,
  onDelete,
}: AssistantCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-4 space-x-reverse">
          <Brain className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-semibold">{assistant.name}</h3>
            <p className="text-sm text-muted-foreground">
              {assistant.description}
            </p>
          </div>
        </div>
        <AssistantActions
          assistantId={assistant.id}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </CardHeader>
      <CardContent>
        <MessageCount count={assistant.messageCount} />
      </CardContent>
    </Card>
  );
});