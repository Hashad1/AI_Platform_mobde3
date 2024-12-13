import bcrypt from "bcryptjs";
import { getUserByEmail, createUser } from "@/lib/db";
import type { RegisterForm } from "@/lib/validations/auth";

export class AuthService {
  static async register(data: RegisterForm) {
    const existingUser = await getUserByEmail(data.email);
    
    if (existingUser) {
      throw new Error("البريد الإلكتروني مستخدم بالفعل");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    return createUser(
      { name: data.name, email: data.email },
      hashedPassword
    );
  }

  static async validateCredentials(email: string, password: string) {
    const user = await getUserByEmail(email);
    
    if (!user) {
      return null;
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    return isValid ? user : null;
  }
}