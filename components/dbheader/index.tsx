"use client";

import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";


export default function DBHeader() {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">İnfoFluencer</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <span className="text-lg font-bold">Profil</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>test@test.com</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <LogOutIcon className="w-4 h-4" />
            Çıkış Yap
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}