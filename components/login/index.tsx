"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    if (email === "test@test.com" && password === "1234") {
      router.push("/dashboard");
    } else {
      setError("Email veya şifre hatalı.");
      toast.error("Email veya şifre hatalı.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster />
      <Card className="w-80 bg-transparent shadow-none border-none">
        <CardHeader>
          <CardTitle className="text-center">Giriş Yap</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email adresinizi girin"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="password">Şifre</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Şifrenizi girin"
                required
              />
            </div>
            {/* Hata mesajı artık sonner ile gösteriliyor */}
            <Button type="submit" className="w-full">
              Giriş Yap
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}