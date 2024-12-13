import { NextResponse } from "next/server";
import { z } from "zod";

const assistantSchema = z.object({
  name: z.string().min(1),
  type: z.enum(["sales", "education", "support", "custom"]),
  description: z.string(),
});

export async function GET() {
  // TODO: Get actual assistants from database
  return NextResponse.json({
    assistants: [
      {
        id: 1,
        name: "مساعد المبيعات",
        description: "مساعد متخصص في المبيعات والتسويق",
        messageCount: 245,
        type: "sales",
      },
      {
        id: 2,
        name: "المساعد التعليمي",
        description: "مساعد لتحسين العملية التعليمية",
        messageCount: 412,
        type: "education",
      },
    ],
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = assistantSchema.parse(body);
    
    // TODO: Create assistant in database
    
    return NextResponse.json({
      id: 3,
      ...data,
      messageCount: 0,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid assistant data" },
      { status: 400 }
    );
  }
}