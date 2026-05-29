"use client";

import * as React from "react";
import {
  TrendingUp,
  Users,
  ShoppingCart,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "next-themes";

/**
 * Interface representing a stats summary card item.
 */
interface StatsCardData {
  title: string;
  value: string;
  change: string;
  timeframe: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  badgeBg: string;
}

/**
 * Interface representing a monthly revenue data item for the AreaChart.
 */
interface RevenueData {
  month: string;
  revenue: number;
}

/**
 * Interface representing a single customer transaction item in the Recent Sales list.
 */
interface SaleItem {
  name: string;
  email: string;
  amount: string;
  initials: string;
  avatarBg: string;
  avatarText: string;
}

/**
 * Static stats dataset containing revenue, user count, sales volume, and active presence.
 */
const statsData: StatsCardData[] = [
  {
    title: "Total Revenue",
    value: "$45,231",
    change: "+20.1%",
    timeframe: "from last month",
    icon: TrendingUp,
    iconColor: "text-emerald-500 dark:text-emerald-400",
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+15.3%",
    timeframe: "from last month",
    icon: Users,
    iconColor: "text-blue-500 dark:text-blue-400",
    badgeBg: "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Total Sales",
    value: "1,247",
    change: "+8.2%",
    timeframe: "from last month",
    icon: ShoppingCart,
    iconColor: "text-amber-500 dark:text-amber-400",
    badgeBg: "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Active Now",
    value: "573",
    change: "+4.6%",
    timeframe: "from last month",
    icon: Activity,
    iconColor: "text-violet-500 dark:text-violet-400",
    badgeBg: "bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400",
  },
];

/**
 * Static dataset modeling monthly revenue increments (Jan - Jul).
 */
const revenueOverviewData: RevenueData[] = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 5500 },
  { month: "Jul", revenue: 7000 },
];

/**
 * Static recent sales dataset listing client transactions.
 */
const recentSalesData: SaleItem[] = [
  {
    name: "Alice Johnson",
    email: "alice@email.com",
    amount: "+$249.00",
    initials: "AJ",
    avatarBg: "bg-violet-100 dark:bg-violet-900/40",
    avatarText: "text-violet-700 dark:text-violet-300",
  },
  {
    name: "Bob Smith",
    email: "bob@email.com",
    amount: "+$149.00",
    initials: "BS",
    avatarBg: "bg-emerald-100 dark:bg-emerald-900/40",
    avatarText: "text-emerald-700 dark:text-emerald-300",
  },
  {
    name: "Carol White",
    email: "carol@email.com",
    amount: "+$399.00",
    initials: "CW",
    avatarBg: "bg-blue-100 dark:bg-blue-900/40",
    avatarText: "text-blue-700 dark:text-blue-300",
  },
  {
    name: "David Lee",
    email: "david@email.com",
    amount: "+$99.00",
    initials: "DL",
    avatarBg: "bg-amber-100 dark:bg-amber-900/40",
    avatarText: "text-amber-700 dark:text-amber-300",
  },
  {
    name: "Emma Davis",
    email: "emma@email.com",
    amount: "+$199.00",
    initials: "ED",
    avatarBg: "bg-rose-100 dark:bg-rose-900/40",
    avatarText: "text-rose-700 dark:text-rose-300",
  },
];

/**
 * DashboardPage component renders the primary analytics panel view.
 *
 * It is structured into:
 * 1. A responsive grid containing 4 quick-statistics cards.
 * 2. A content grid containing:
 *    - A 60% width Recharts AreaChart showing Revenue Overview.
 *    - A 40% width Recent Sales transaction ledger with client initials.
 *
 * @returns {React.ReactElement} The rendered dashboard dashboard contents.
 */
export default function DashboardPage() {
  const { theme } = useTheme();
  
  // Track mount status on client to prevent Recharts SSR hydration issues
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Determine standard colors for AreaChart grid lines and axis texts based on current theme
  const isDark = theme === "dark";
  const axisColor = isDark ? "#71717a" : "#a1a1aa";
  const gridColor = isDark ? "rgba(39, 39, 42, 0.5)" : "rgba(228, 228, 231, 0.5)";

  return (
    <div className="space-y-6">
      {/* Page Heading & Welcome Banner */}
      <div className="flex flex-col space-y-1.5 text-left">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Overview
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Here is a breakdown of your business metrics for the current billing cycle.
        </p>
      </div>

      {/* 
        ========================================================================
        SECTION 1: STATS GRID
        - Grid Layout: 1 col on mobile, 2 cols on tablet, 4 cols on desktop
        ========================================================================
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, idx) => {
          const Icon = stat.icon;

          return (
            <Card
              key={idx}
              className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 select-none">
                  {stat.title}
                </span>
                <div
                  className={`p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 transition-colors group-hover:bg-violet-50 dark:group-hover:bg-violet-950/20 group-hover:border-violet-200 dark:group-hover:border-violet-800/50`}
                >
                  <Icon className={`h-5 w-5 ${stat.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                </div>
              </CardHeader>
              <CardContent className="text-left">
                <div className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {stat.value}
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${stat.badgeBg}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    {stat.timeframe}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 
        ========================================================================
        SECTION 2: VISUAL OVERVIEW GRID
        - Layout: side-by-side on desktop (3:2 grid ratio), stacked on mobile
        ========================================================================
      */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Card: Area Chart (60% equivalent on desktop) */}
        <Card className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 shadow-sm lg:col-span-3">
          <CardHeader className="text-left flex flex-row items-center justify-between pb-6">
            <div>
              <CardTitle className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Revenue Overview
              </CardTitle>
              <CardDescription className="text-sm mt-0.5 text-zinc-500 dark:text-zinc-400">
                Monthly analytics representing cashflow inflow.
              </CardDescription>
            </div>
            {/* Subtle metric icon decoration */}
            <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
              <ArrowUpRight className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
            </div>
          </CardHeader>
          <CardContent className="h-[350px] w-full pr-4">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={revenueOverviewData}
                  margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                  <defs>
                    {/* Linear gradient definitions for glowing fill area overlay */}
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
                  <XAxis
                    dataKey="month"
                    stroke={axisColor}
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis
                    stroke={axisColor}
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(val: number) => `$${val}`}
                    dx={-5}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? "#18181b" : "#ffffff",
                      borderColor: isDark ? "#27272a" : "#e4e4e7",
                      borderRadius: "0.5rem",
                      color: isDark ? "#f4f4f5" : "#18181b",
                    }}
                    formatter={(value: string | number | readonly (string | number)[] | undefined) => {
                      if (value === undefined || value === null) return ["$0", "Revenue"];
                      const numericVal = typeof value === "number" ? value : Number(value);
                      return [`$${numericVal.toLocaleString()}`, "Revenue"];
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8b5cf6"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                    activeDot={{ r: 6, strokeWidth: 0, fill: "#8b5cf6" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full w-full flex items-center justify-center text-zinc-500">
                Loading analytics visual...
              </div>
            )}
          </CardContent>
        </Card>

        {/* Right Card: Recent Sales list (40% equivalent on desktop) */}
        <Card className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 shadow-sm lg:col-span-2">
          <CardHeader className="text-left pb-4">
            <CardTitle className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Recent Sales
            </CardTitle>
            <CardDescription className="text-sm mt-0.5 text-zinc-500 dark:text-zinc-400">
              5 sales this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Sales ledger list items container */}
            <div className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
              {recentSalesData.map((sale, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 px-1 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    {/* Circle initials avatar */}
                    <div
                      className={`h-9 w-9 shrink-0 rounded-full flex items-center justify-center font-bold text-xs border border-zinc-200/50 dark:border-zinc-800/30 ${sale.avatarBg} ${sale.avatarText} transition-transform duration-200 group-hover:scale-105 select-none`}
                    >
                      {sale.initials}
                    </div>
                    {/* Customer Info */}
                    <div className="flex flex-col min-w-0 text-left">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {sale.name}
                      </span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500 truncate">
                        {sale.email}
                      </span>
                    </div>
                  </div>

                  {/* Transaction amount */}
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 tracking-tight shrink-0 select-none">
                    {sale.amount}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
