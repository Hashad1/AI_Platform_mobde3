import { User, Assistant, PointsTransaction } from '@/lib/types';

// Temporary in-memory storage until database is set up
const users: User[] = [];
const assistants: Assistant[] = [];
const transactions: PointsTransaction[] = [];

export async function getUserByEmail(email: string): Promise<User | null> {
  return users.find(user => user.email === email) || null;
}

export async function createUser(
  userData: Partial<User>,
  passwordHash: string
): Promise<User> {
  const user: User = {
    id: String(users.length + 1),
    email: userData.email!,
    name: userData.name!,
    role: 'user',
    subscription: 'free',
    pointsBalance: 1000,
    passwordHash,
    created: new Date(),
  };
  
  users.push(user);
  return user;
}

export async function getAssistantsByUserId(userId: string): Promise<Assistant[]> {
  return assistants.filter(assistant => assistant.owner === userId);
}

export async function createAssistant(assistant: Partial<Assistant>): Promise<Assistant> {
  const newAssistant: Assistant = {
    id: assistants.length + 1,
    name: assistant.name!,
    type: assistant.type!,
    description: assistant.description!,
    messageCount: 0,
    owner: assistant.owner!,
    created: new Date(),
    lastUsed: new Date(),
  };
  
  assistants.push(newAssistant);
  return newAssistant;
}

export async function createPointsTransaction(
  transaction: Partial<PointsTransaction>
): Promise<PointsTransaction> {
  const newTransaction: PointsTransaction = {
    id: String(transactions.length + 1),
    userId: transaction.userId!,
    amount: transaction.amount!,
    type: transaction.type!,
    description: transaction.description!,
    created: new Date(),
  };
  
  transactions.push(newTransaction);
  
  const user = users.find(u => u.id === transaction.userId);
  if (user) {
    user.pointsBalance += transaction.type === 'credit' ? transaction.amount! : -transaction.amount!;
  }
  
  return newTransaction;
}