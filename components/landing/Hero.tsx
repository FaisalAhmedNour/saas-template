import * as React from "react";
import Link from "next/link";
import { ArrowRight, PlayCircle, BarChart3, Users, DollarSign, LayoutDashboard, Settings, Layers, Activity } from "lucide-react";

/**
 * Hero component renders the main landing section of the SaaS application.
 * It is fully responsive, dark-mode compatible, and showcases:
 * - A beta badge pill
 * - An engaging multi-color gradient header
 * - Primary and Secondary CTA links
 * - A responsive 3D-angled mock browser window showing a dummy SaaS dashboard
 * 
 * @returns {React.ReactElement} The Hero component.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white dark:bg-zinc-950 pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36"
    >
      {/* 
        Decorative background glow elements:
        These blur gradients create a premium, modern SaaS feel behind the hero content.
      */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-50 dark:opacity-30 blur-[120px]"
        aria-hidden="true"
      >
        <div className="absolute top-12 left-1/4 w-[300px] h-[300px] rounded-full bg-violet-400 dark:bg-violet-600" />
        <div className="absolute top-20 right-1/4 w-[250px] h-[250px] rounded-full bg-blue-400 dark:bg-blue-600" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Public Beta Badge */}
        <div 
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-200/50 bg-violet-50/80 dark:border-violet-900/50 dark:bg-violet-950/40 text-xs sm:text-sm font-semibold text-violet-700 dark:text-violet-300 backdrop-blur-sm animate-fade-in"
        >
          <span>🚀</span>
          <span>Now in Public Beta</span>
        </div>

        {/* Headline */}
        <h1 
          className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance leading-none"
        >
          Build Your SaaS{" "}
          <span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500 dark:from-violet-400 dark:to-blue-400"
          >
            Faster
          </span>{" "}
          Than Ever
        </h1>

        {/* Subheadline */}
        <p 
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-400 text-balance"
        >
          The ultimate Next.js starter template. Ship your product in days, not months.
        </p>

        {/* Action Buttons */}
        <div 
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center px-4 sm:px-0"
        >
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg text-base font-semibold bg-violet-600 hover:bg-violet-700 text-white dark:bg-violet-500 dark:hover:bg-violet-600 shadow-lg shadow-violet-500/25 dark:shadow-violet-500/10 transition-all duration-200"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg text-base font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-200"
          >
            <PlayCircle className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
            View Demo
          </Link>
        </div>

        {/* Trust Badges */}
        <div 
          className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium"
        >
          <span className="flex items-center gap-1">✓ No credit card required</span>
          <span className="flex items-center gap-1">✓ Free forever plan</span>
        </div>

        {/* 
          Mock Browser Window Wrapper:
          Uses css 3D transform (perspective and rotateX) to render a tilted mockup dashboard.
          A custom transform style is used to guarantee clean rendering without modifying tailwind config.
        */}
        <div 
          className="mt-16 sm:mt-20 md:mt-24 w-full max-w-5xl mx-auto px-1 sm:px-4"
        >
          <div 
            className="relative bg-zinc-100 dark:bg-zinc-900 rounded-xl p-1.5 sm:p-2 border border-zinc-200 dark:border-zinc-800 shadow-2xl dark:shadow-black/60 transition-all duration-700 ease-out hover:scale-[1.01] hover:shadow-violet-500/10 dark:hover:shadow-violet-500/5 group"
            style={{ 
              transform: "perspective(1200px) rotateX(10deg)",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Glossy overlay effect for light source highlight */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 dark:to-white/5 rounded-xl pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Fake Browser Toolbar */}
            <div 
              className="flex items-center justify-between h-9 px-3 bg-zinc-50/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 rounded-t-lg"
            >
              {/* Window Controls */}
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 dark:bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 dark:bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 dark:bg-green-500/80" />
              </div>

              {/* Fake URL Bar */}
              <div 
                className="text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-400 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 rounded-md px-6 sm:px-12 py-0.5 max-w-xs sm:max-w-md w-full mx-auto text-center truncate select-none font-mono"
              >
                saasify.dev/dashboard
              </div>

              {/* Window Action Spacer */}
              <div className="w-[38px] flex justify-end" aria-hidden="true" />
            </div>

            {/* Mock Dashboard Layout */}
            <div className="flex bg-white dark:bg-zinc-950 rounded-b-lg overflow-hidden h-[240px] sm:h-[320px] md:h-[380px] text-left">
              {/* Dark Left Sidebar */}
              <aside 
                className="w-12 sm:w-16 md:w-48 bg-zinc-900 dark:bg-zinc-950 border-r border-zinc-800 flex flex-col justify-between py-4 px-2 md:px-3 text-zinc-400 flex-shrink-0"
              >
                <div className="flex flex-col gap-4">
                  {/* Fake Logo */}
                  <div className="flex items-center gap-2 px-2 py-1 mb-2">
                    <span className="p-1 rounded-md bg-violet-600 text-white flex-shrink-0">
                      <Layers className="h-3.5 w-3.5" />
                    </span>
                    <span className="hidden md:inline text-xs font-bold text-zinc-100 tracking-wider">
                      SAASIFY
                    </span>
                  </div>

                  {/* Nav Links */}
                  <nav className="flex flex-col gap-1">
                    {[
                      { icon: LayoutDashboard, label: "Overview", active: true },
                      { icon: BarChart3, label: "Analytics" },
                      { icon: Users, label: "Customers" },
                      { icon: Settings, label: "Settings" }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors select-none cursor-pointer ${
                          item.active 
                            ? "bg-zinc-800 text-zinc-100" 
                            : "hover:bg-zinc-800/40 hover:text-zinc-200"
                        }`}
                      >
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                        <span className="hidden md:inline">{item.label}</span>
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Sidebar Footer */}
                <div className="px-2">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="h-6 w-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 font-bold text-[10px] flex-shrink-0">
                      JD
                    </div>
                    <span className="hidden md:inline text-zinc-400 truncate">John Doe</span>
                  </div>
                </div>
              </aside>

              {/* Main Content Area */}
              <main className="flex-1 bg-zinc-50 dark:bg-zinc-900/40 p-3 sm:p-5 md:p-6 overflow-hidden flex flex-col gap-4 sm:gap-6">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-zinc-800 dark:text-zinc-200">
                      Dashboard
                    </h3>
                    <p className="hidden sm:block text-[10px] md:text-xs text-zinc-400 dark:text-zinc-400 mt-0.5">
                      Welcome back! Here is your business snapshot.
                    </p>
                  </div>
                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] md:text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-900/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live System
                  </div>
                </div>

                {/* 3 Placeholder Stat Cards */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {[
                    { icon: DollarSign, label: "Revenue", value: "$14,235", change: "+12.4%", color: "text-violet-500" },
                    { icon: Users, label: "Active Users", value: "3,842", change: "+8.2%", color: "text-blue-500" },
                    { icon: Activity, label: "Conversion", value: "2.48%", change: "+1.3%", color: "text-emerald-500" }
                  ].map((card, idx) => (
                    <div 
                      key={idx}
                      className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm rounded-lg p-2.5 sm:p-4 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[9px] sm:text-xs text-zinc-400 dark:text-zinc-400 font-medium truncate">
                          {card.label}
                        </span>
                        <card.icon className={`h-3 w-3 sm:h-4 sm:w-4 ${card.color} opacity-80 flex-shrink-0`} />
                      </div>
                      <div className="mt-1 sm:mt-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                        <span className="text-xs sm:text-sm md:text-lg font-bold text-zinc-800 dark:text-zinc-100">
                          {card.value}
                        </span>
                        <span className="text-[8px] sm:text-[10px] text-emerald-500 font-semibold">
                          {card.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Placeholder Chart Container */}
                <div 
                  className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm rounded-lg p-3 sm:p-4 flex flex-col justify-between min-h-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-xs font-bold text-zinc-700 dark:text-zinc-300">
                      Growth Analytics
                    </span>
                    {/* Dummy Legend */}
                    <div className="flex gap-2 text-[8px] sm:text-[10px] text-zinc-400">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                        Target
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Actual
                      </span>
                    </div>
                  </div>

                  {/* Clean CSS-based bar chart */}
                  <div className="flex-1 flex items-end justify-between gap-1.5 sm:gap-3 md:gap-4 h-full pt-1">
                    {[35, 45, 30, 60, 50, 75, 90, 65, 80, 70, 85, 95].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end">
                        {/* Interactive bar with a gradient color style */}
                        <div 
                          className="w-full bg-gradient-to-t from-violet-500/80 to-violet-600 dark:from-violet-600/60 dark:to-violet-500 rounded-t-sm transition-all duration-300 hover:brightness-110" 
                          style={{ height: `${val}%` }}
                        />
                        {/* Month placeholder label (visible on md+) */}
                        <span className="hidden md:inline text-[8px] text-zinc-400 mt-1 select-none font-mono">
                          {["J","F","M","A","M","J","J","A","S","O","N","D"][idx]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
