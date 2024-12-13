export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  subscription: 'free' | 'pro' | 'enterprise';
  pointsBalance: number;
  created: Date;
}

export interface Assistant {
  id: string;
  name: string;
  type: 'sales' | 'education' | 'support' | 'custom';
  description: string;
  created: Date;
  lastUsed: Date;
  messageCount: number;
  owner: string;
}

export interface PointsTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'credit' | 'debit';
  description: string;
  created: Date;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: 'success' | 'error';
}