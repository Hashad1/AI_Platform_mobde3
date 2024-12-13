import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/validations/auth";
import { AuthService } from "@/lib/auth/auth-service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = registerSchema.parse(body);

    await AuthService.register(data);

    return NextResponse.json(
      { message: "تم إنشاء الحساب بنجاح" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء الحساب" },
      { status: 500 }
    );
  }
}