import { Assistant, CreateAssistantData, UpdateAssistantData } from "../types/assistant";

export class AssistantService {
  static async getAll(): Promise<Assistant[]> {
    const response = await fetch("/api/assistants");
    if (!response.ok) {
      throw new Error("Failed to fetch assistants");
    }
    const data = await response.json();
    return data.assistants;
  }

  static async create(data: CreateAssistantData): Promise<Assistant> {
    const response = await fetch("/api/assistants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error("Failed to create assistant");
    }
    
    return response.json();
  }

  static async update(id: number, data: UpdateAssistantData): Promise<Assistant> {
    const response = await fetch(`/api/assistants/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error("Failed to update assistant");
    }
    
    return response.json();
  }

  static async delete(id: number): Promise<void> {
    const response = await fetch(`/api/assistants/${id}`, {
      method: "DELETE",
    });
    
    if (!response.ok) {
      throw new Error("Failed to delete assistant");
    }
  }
}