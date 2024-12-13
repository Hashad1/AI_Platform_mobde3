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

interface Assistant {
  id: number;
  name: string;
  description: string;
  messageCount: number;
  type: string;
}

const AssistantCard = memo(({ assistant }: { assistant: Assistant }) => (
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Pencil className="ml-2 h-4 w-4" />
            تعديل
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">
            <Trash className="ml-2 h-4 w-4" />
            حذف
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </CardHeader>
    <CardContent>
      <div className="flex items-center text-sm text-muted-foreground">
        <MessageSquare className="ml-1 h-4 w-4" />
        {assistant.messageCount} رسالة
      </div>
    </CardContent>
  </Card>
));

AssistantCard.displayName = "AssistantCard";

const assistants = [
  {
    id: 1,
    name: "مساعد المبيعات",
    description: "مساعد متخصص في المبيعات والتسويق",
    messageCount: 245,
    type: "sales",
  },
  {
    id: 2,
    name: "المساعد التعليمي",
    description: "مساعد لتحسين العملية التعليمية",
    messageCount: 412,
    type: "education",
  },
  {
    id: 3,
    name: "مساعد خدمة العملاء",
    description: "مساعد للرد على استفسارات العملاء",
    messageCount: 190,
    type: "support",
  },
];

export function AssistantsList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {assistants.map((assistant) => (
        <AssistantCard key={assistant.id} assistant={assistant} />
      ))}
    </div>
  );
}