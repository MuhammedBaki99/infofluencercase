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
import Image from "next/image";
import { Mail, Lock } from "lucide-react";

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
      className="w-full flex justify-between items-center h-screen"
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
        <Card className="w-96 bg-transparent shadow-none border-none">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Giriş Yap</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit}
              initial={false}
              animate={{}}
            >
              <motion.div
                className="flex flex-col gap-2"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Label htmlFor="email" className="text-lg">Email</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="w-6 h-6" />
                  </span>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email adresinizi girin"
                    required
                    className="h-14 text-lg pl-12 pr-5"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col gap-2"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Label htmlFor="password" className="text-lg">Şifre</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock className="w-6 h-6" />
                  </span>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Şifrenizi girin"
                    required
                    className="h-14 text-lg pl-12 pr-5"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  type="submit"
                  className="w-full h-14 text-lg"
                >
                  Giriş Yap
                </Button>
              </motion.div>
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
      <Image src={"/login.png"} width={500} height={1000} alt="influencer login fotoğrafı" className="w-2/3 h-full" />
    </motion.div>
  );
}