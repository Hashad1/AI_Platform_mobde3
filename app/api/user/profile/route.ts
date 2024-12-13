import { NextResponse } from "next/server";
import { z } from "zod";

const profileSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
});

export async function GET() {
  // TODO: Get actual user data from database
  return NextResponse.json({
    name: "محمد أحمد",
    email: "mohamed@example.com",
    points: 1000,
    subscription: "professional",
  });
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const data = profileSchema.parse(body);
    
    // TODO: Update user profile in database
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid data" },
      { status: 400 }
    );
  }
}