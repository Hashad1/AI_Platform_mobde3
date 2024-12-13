"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AuthForm } from "@/components/auth/auth-form";
import { AuthInput } from "@/components/auth/auth-input";
import { useToast } from "@/components/ui/use-toast";
import { loginSchema, type LoginForm } from "@/lib/validations/auth";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        toast({
          title: "خطأ في تسجيل الدخول",
          description: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
          variant: "destructive",
        });
      } else {
        router.push("/dashboard");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthForm
      title="تسجيل الدخول"
      description="أدخل بياناتك للوصول إلى حسابك"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AuthInput
          id="email"
          label="البريد الإلكتروني"
          type="email"
          placeholder="example@domain.com"
          error={errors.email?.message}
          register={register("email")}
        />
        
        <AuthInput
          id="password"
          label="كلمة المرور"
          type="password"
          error={errors.password?.message}
          register={register("password")}
        />
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
        </Button>
      </form>
    </AuthForm>
  );
}