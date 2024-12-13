import { useState, useEffect, useCallback } from "react";
import { Assistant } from "@/lib/types/assistant";
import { AssistantService } from "@/lib/services/assistant-service";

export function useAssistants() {
  const [assistants, setAssistants] = useState<Assistant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchAssistants = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await AssistantService.getAll();
      setAssistants(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch assistants"));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteAssistant = useCallback(async (id: number) => {
    await AssistantService.delete(id);
    setAssistants(prev => prev.filter(assistant => assistant.id !== id));
  }, []);

  useEffect(() => {
    fetchAssistants();
  }, [fetchAssistants]);

  return {
    assistants,
    isLoading,
    error,
    refreshAssistants: fetchAssistants,
    deleteAssistant,
  };
}