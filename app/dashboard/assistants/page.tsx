"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Button } from "@/components/ui/button";
import { AssistantsList } from "@/components/assistants/assistants-list";
import { CreateAssistantDialog } from "@/components/assistants/create-assistant-dialog";

export default function AssistantsPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">المساعدين الأذكياء</h2>
            <p className="text-muted-foreground">
              قم بإنشاء وإدارة مساعديك الذكيين
            </p>
          </div>
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="ml-2 h-4 w-4" />
            مساعد جديد
          </Button>
        </div>
        
        <AssistantsList />
        <CreateAssistantDialog 
          open={isCreateDialogOpen} 
          onOpenChange={setIsCreateDialogOpen}
        />
      </div>
    </DashboardLayout>
  );
}