export type AssistantType = 'sales' | 'education' | 'support' | 'custom';

export interface Assistant {
  id: number;
  name: string;
  description: string;
  messageCount: number;
  type: AssistantType;
}

export interface CreateAssistantData {
  name: string;
  type: AssistantType;
  description: string;
}

export interface UpdateAssistantData extends Partial<CreateAssistantData> {}