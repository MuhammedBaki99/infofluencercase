"use client";

import { TrendingUp, Users } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { motion } from "framer-motion";

const kpis = [
  {
    title: "Toplam Influencer",
    value: "3",
    icon: Users,
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Toplam Takipçi",
    value: "102,400",
    icon: Users,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Ortalama Etkileşim",
    value: "%4.7",
    icon: TrendingUp,
    color: "bg-yellow-100 text-yellow-700",
  },
];

const followersData = [
  { week: "1. Hafta", followers: 200 },
  { week: "2. Hafta", followers: 450 },
  { week: "3. Hafta", followers: 300 },
  { week: "4. Hafta", followers: 600 }
];

export default function DashboardPage() {
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {kpis.map((kpi, idx) => (
          <motion.div
            key={kpi.title}
            className="bg-white rounded-xl shadow border border-gray-100 p-6 flex items-center gap-4"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * idx, ease: "easeOut" }}
          >
            <motion.div
              className={`rounded-full p-3 ${kpi.color} flex items-center justify-center`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + 0.1 * idx, ease: "easeOut" }}
            >
              <kpi.icon className="w-6 h-6" />
            </motion.div>
            <div className="flex-1">
              <div className="text-sm text-gray-500">{kpi.title}</div>
              <div className="text-xl font-bold">{kpi.value}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="bg-white rounded-xl shadow border border-gray-100 p-6 mt-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <motion.h2
          className="text-lg font-semibold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          Haftalık Takipçi Artışı
        </motion.h2>
        <motion.div
          style={{ width: "100%", height: 300 }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={followersData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="followers" stroke="#7c3aed" strokeWidth={3} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}