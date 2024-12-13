import { PointsTransaction } from "@/types";

export async function getPointsBalance(userId: string): Promise<number> {
  // TODO: Implement actual balance fetching
  return 1000;
}

export async function createTransaction(
  userId: string,
  amount: number,
  type: "credit" | "debit",
  description: string
): Promise<PointsTransaction> {
  // TODO: Implement actual transaction creation
  return {
    id: Math.random().toString(),
    userId,
    amount,
    type,
    description,
    created: new Date(),
  };
}