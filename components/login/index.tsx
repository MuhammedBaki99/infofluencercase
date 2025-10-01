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
import { motion } from "framer-motion";

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
    <motion.div
      className="flex justify-center items-center h-screen"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Toaster />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Card className="w-80 bg-transparent shadow-none border-none">
          <CardHeader>
            <CardTitle className="text-center">Giriş Yap</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
              initial={false}
              animate={{}}
            >
              <motion.div
                className="flex flex-col gap-1"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email adresinizi girin"
                  required
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-1"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Label htmlFor="password">Şifre</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Şifrenizi girin"
                  required
                />
              </motion.div>
              {/* Hata mesajı artık sonner ile gösteriliyor */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button type="submit" className="w-full">
                  Giriş Yap
                </Button>
              </motion.div>
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}