import { NextResponse } from "next/server";
import { z } from "zod";

const pointsTransactionSchema = z.object({
  amount: z.number().positive(),
  type: z.enum(["recharge", "deduct"]),
});

export async function GET() {
  // TODO: Get actual points balance from database
  return NextResponse.json({
    balance: 1000,
    history: [
      {
        id: 1,
        type: "recharge",
        amount: 500,
        date: new Date().toISOString(),
      },
    ],
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, type } = pointsTransactionSchema.parse(body);
    
    // TODO: Process points transaction in database
    
    return NextResponse.json({
      success: true,
      newBalance: type === "recharge" ? 1500 : 500,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid transaction" },
      { status: 400 }
    );
  }
}