"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { AssistantsHeader } from "@/components/assistants/list/header/assistants-header";
import { AssistantsGrid } from "@/components/assistants/list/assistants-grid";
import { AssistantsEmpty } from "@/components/assistants/list/empty/assistants-empty";
import { AssistantsLoading } from "@/components/assistants/list/loading/assistants-loading";
import { AssistantsError } from "@/components/assistants/list/error/assistants-error";
import { CreateAssistantDialog } from "@/components/assistants/create/create-assistant-dialog";
import { useAssistants } from "@/hooks/use-assistants";
import { useToast } from "@/components/ui/use-toast";

export default function AssistantsPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const { assistants, isLoading, error, deleteAssistant, refreshAssistants } = useAssistants();
  const { toast } = useToast();

  const handleEdit = (id: number) => {
    // TODO: Implement edit functionality
    console.log("Edit assistant:", id);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteAssistant(id);
      toast({
        title: "تم حذف المساعد",
        description: "تم حذف المساعد بنجاح",
      });
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء حذف المساعد",
        variant: "destructive",
      });
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <AssistantsLoading />;
    }

    if (error) {
      return (
        <AssistantsError
          message={error.message}
          onRetry={refreshAssistants}
        />
      );
    }

    if (!assistants.length) {
      return (
        <AssistantsEmpty
          onCreateClick={() => setIsCreateDialogOpen(true)}
        />
      );
    }

    return (
      <AssistantsGrid
        assistants={assistants}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <AssistantsHeader
          onCreateClick={() => setIsCreateDialogOpen(true)}
        />
        {renderContent()}
        <CreateAssistantDialog 
          open={isCreateDialogOpen} 
          onOpenChange={setIsCreateDialogOpen}
        />
      </div>
    </DashboardLayout>
  );
}