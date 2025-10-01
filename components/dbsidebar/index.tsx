"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { User, Settings, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

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
    <motion.aside
      className="w-56 sticky top-0 min-h-screen bg-white border-r border-gray-200 flex flex-col py-8 px-4 gap-2"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="flex flex-col gap-2">
        {menu.map((item) => {
          const active = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
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
              <item.icon className={clsx("w-5 h-5", active ? "text-violet-700" : "text-gray-400")} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </motion.aside>
  );
}