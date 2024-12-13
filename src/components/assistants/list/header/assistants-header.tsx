"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";

interface AssistantsHeaderProps {
  onCreateClick: () => void;
}

export function AssistantsHeader({ onCreateClick }: AssistantsHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <PageHeader
        title="المساعدين الأذكياء"
        description="قم بإنشاء وإدارة مساعديك الذكيين"
      />
      <Button onClick={onCreateClick}>
        <Plus className="ml-2 h-4 w-4" />
        مساعد جديد
      </Button>
    </div>
  );
}