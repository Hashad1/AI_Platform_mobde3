"use client";

import { Assistant } from "@/lib/types/assistant";
import { AssistantCard } from "./assistant-card";

interface AssistantsGridProps {
  assistants: Assistant[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export function AssistantsGrid({
  assistants,
  onEdit,
  onDelete,
}: AssistantsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {assistants.map((assistant) => (
        <AssistantCard
          key={assistant.id}
          assistant={assistant}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}