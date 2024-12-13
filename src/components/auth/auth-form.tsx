"use client";

import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthFormProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function AuthForm({ title, description, children }: AuthFormProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">{title}</CardTitle>
          <p className="text-center text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}