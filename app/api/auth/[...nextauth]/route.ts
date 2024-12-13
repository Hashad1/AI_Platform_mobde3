import { NextResponse } from "next/server";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = loginSchema.parse(body);
    
    // TODO: Implement actual authentication logic
    const token = "mock_jwt_token";
    
    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 400 }
    );
  }
}