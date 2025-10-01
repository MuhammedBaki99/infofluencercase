"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { User, Settings, LayoutDashboard, Menu } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Influencerlar",
    href: "/dashboard/influencerlar",
    icon: User,
  },
  {
    name: "Ayarlar",
    href: "/dashboard/ayarlar",
    icon: Settings,
  },
];

export default function DBSidebar() {
  const pathname = usePathname();

  return (
    <> 
      <motion.aside
        className="w-56 h-screen bg-white border-r border-gray-200 flex-col py-8 px-4 gap-2 hidden md:flex"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="flex flex-col gap-2">
          {menu.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors",
                  active
                    ? "bg-violet-100 text-violet-700 shadow border border-violet-300"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <item.icon
                  className={clsx(
                    "w-5 h-5",
                    active ? "text-violet-700" : "text-gray-400"
                  )}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </motion.aside>
 
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed bottom-6 right-6 z-50 bg-white border border-gray-200 shadow-lg rounded-full p-3"
              aria-label="Menüyü Aç"
            >
              <Menu className="w-7 h-7 text-gray-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            align="start"
            className="w-56 p-2 bg-white border border-gray-200 shadow-lg rounded-xl"
            sideOffset={16}
          >
            <nav className="flex flex-col gap-2">
              {menu.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/dashboard" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors",
                      active
                        ? "bg-violet-100 text-violet-700 shadow border border-violet-300"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <item.icon
                      className={clsx(
                        "w-5 h-5",
                        active ? "text-violet-700" : "text-gray-400"
                      )}
                    />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}