export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: 'user' | 'admin';
  subscription: 'free' | 'pro' | 'enterprise';
  pointsBalance: number;
  created: Date;
}

export interface Assistant {
  id: number;
  name: string;
  type: 'sales' | 'education' | 'support' | 'custom';
  description: string;
  messageCount: number;
  owner: string;
  created: Date;
  lastUsed: Date;
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