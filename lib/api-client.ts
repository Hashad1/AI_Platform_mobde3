import { z } from "zod";

const API_BASE_URL = "/api";

async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export const apiClient = {
  auth: {
    login: (email: string, password: string) =>
      fetchAPI("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }),
  },
  
  user: {
    getProfile: () => fetchAPI("/user/profile"),
    updateProfile: (data: z.infer<typeof profileSchema>) =>
      fetchAPI("/user/profile", {
        method: "PUT",
        body: JSON.stringify(data),
      }),
  },
  
  points: {
    getBalance: () => fetchAPI("/points"),
    recharge: (amount: number) =>
      fetchAPI("/points", {
        method: "POST",
        body: JSON.stringify({ amount, type: "recharge" }),
      }),
    deduct: (amount: number) =>
      fetchAPI("/points", {
        method: "POST",
        body: JSON.stringify({ amount, type: "deduct" }),
      }),
  },
  
  assistants: {
    list: () => fetchAPI("/assistants"),
    create: (data: z.infer<typeof assistantSchema>) =>
      fetchAPI("/assistants", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    get: (id: number) => fetchAPI(`/assistants/${id}`),
    update: (id: number, data: z.infer<typeof assistantUpdateSchema>) =>
      fetchAPI(`/assistants/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      }),
    delete: (id: number) =>
      fetchAPI(`/assistants/${id}`, {
        method: "DELETE",
      }),
  },
};