"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DemoState = "excel" | "youtube" | "scrolling" | "notification";

export function DistractionDemo() {
  const [state, setState] = useState<DemoState>("excel");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      // Start with Excel
      await wait(2000);

      // Switch to YouTube
      setState("youtube");
      await wait(2000);

      // Start scrolling
      setState("scrolling");
      await wait(2500);

      // Show notification
      setState("notification");
      await wait(3000);

      // Reset and loop
      setState("excel");
    };

    sequence();
    const interval = setInterval(sequence, 11500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Desktop Frame */}
      <div className="relative bg-zinc-900 rounded-lg border-4 border-zinc-800 overflow-hidden shadow-2xl">
        {/* Browser Chrome */}
        <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2 border-b border-zinc-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 ml-4">
            <div className="bg-zinc-700 rounded px-3 py-1 text-xs font-mono text-zinc-400">
              {state === "excel" && "excel.company.com"}
              {(state === "youtube" || state === "scrolling" || state === "notification") && "youtube.com"}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative bg-zinc-950 aspect-video overflow-hidden">
          <AnimatePresence mode="wait">
            {state === "excel" && (
              <motion.div
                key="excel"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 p-6"
              >
                {/* Excel-like interface */}
                <div className="bg-white rounded border border-zinc-300 h-full p-4 overflow-hidden">
                  <div className="flex gap-2 mb-3">
                    <div className="px-3 py-1 bg-zinc-100 rounded text-xs font-semibold text-zinc-700">File</div>
                    <div className="px-3 py-1 hover:bg-zinc-100 rounded text-xs text-zinc-600">Edit</div>
                    <div className="px-3 py-1 hover:bg-zinc-100 rounded text-xs text-zinc-600">View</div>
                  </div>

                  {/* Excel Grid with Data */}
                  <div className="border border-zinc-300 rounded overflow-hidden">
                    {/* Header Row */}
                    <div className="grid grid-cols-4 bg-zinc-100 border-b border-zinc-300">
                      <div className="px-2 py-1 text-xs font-bold text-zinc-700 border-r border-zinc-300">Month</div>
                      <div className="px-2 py-1 text-xs font-bold text-zinc-700 border-r border-zinc-300">Revenue</div>
                      <div className="px-2 py-1 text-xs font-bold text-zinc-700 border-r border-zinc-300">Expenses</div>
                      <div className="px-2 py-1 text-xs font-bold text-zinc-700">Profit</div>
                    </div>

                    {/* Data Rows */}
                    {[
                      { month: "October", revenue: "$847,293", expenses: "$524,100", profit: "$323,193" },
                      { month: "November", revenue: "$912,458", expenses: "$589,230", profit: "$323,228" },
                      { month: "December", revenue: "", expenses: "", profit: "" },
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-4 border-b border-zinc-200 hover:bg-zinc-50">
                        <div className="px-2 py-1.5 text-xs text-zinc-700 border-r border-zinc-200">{row.month}</div>
                        <div className="px-2 py-1.5 text-xs text-zinc-700 border-r border-zinc-200">{row.revenue}</div>
                        <div className="px-2 py-1.5 text-xs text-zinc-700 border-r border-zinc-200">{row.expenses}</div>
                        <div className="px-2 py-1.5 text-xs text-zinc-700">
                          {row.profit}
                          {i === 2 && (
                            <motion.span
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="inline-block w-1 h-3 bg-blue-600 ml-0.5"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 text-xs text-zinc-500 font-medium">Q4 Revenue Report.xlsx</div>
                </div>
              </motion.div>
            )}

            {(state === "youtube" || state === "scrolling" || state === "notification") && (
              <motion.div
                key="youtube"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-zinc-950"
              >
                {/* YouTube-like interface */}
                <div className="h-full overflow-hidden">
                  <motion.div
                    animate={state === "scrolling" || state === "notification" ? { y: -400 } : { y: 0 }}
                    transition={{ duration: 2.5, ease: "linear" }}
                    className="p-4 space-y-3"
                  >
                    {/* Video thumbnails */}
                    {[
                      {
                        title: "10 Productivity Hacks That Actually Work",
                        channel: "TechTips Daily",
                        views: "2.4M views",
                        time: "12:45",
                        color: "from-blue-600 to-purple-600",
                      },
                      {
                        title: "Why Your Brain Craves Distraction",
                        channel: "Science Explained",
                        views: "892K views",
                        time: "18:22",
                        color: "from-green-600 to-teal-600",
                      },
                      {
                        title: "Excel Power User Tips & Tricks",
                        channel: "Office Mastery",
                        views: "1.2M views",
                        time: "15:33",
                        color: "from-emerald-600 to-green-700",
                      },
                      {
                        title: "Funny Cat Compilation 2026",
                        channel: "Cute Pets",
                        views: "8.9M views",
                        time: "10:12",
                        color: "from-orange-600 to-red-600",
                      },
                      {
                        title: "How I Stay Focused While Working",
                        channel: "Productivity Pro",
                        views: "445K views",
                        time: "14:18",
                        color: "from-purple-600 to-pink-600",
                      },
                      {
                        title: "The Ultimate Gaming Setup Tour",
                        channel: "Tech Review",
                        views: "3.1M views",
                        time: "20:45",
                        color: "from-red-600 to-rose-600",
                      },
                    ].map((video, i) => (
                      <div key={i} className="flex gap-3 hover:bg-zinc-900/50 p-2 rounded transition-colors">
                        <div className="relative w-44 h-24 flex-shrink-0 rounded-lg overflow-hidden group">
                          <div className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-90`}>
                            <div className="absolute inset-0 bg-black/20"></div>
                          </div>
                          {/* Play icon overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent ml-1"></div>
                            </div>
                          </div>
                          {/* Duration badge */}
                          <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-bold text-white">
                            {video.time}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-white line-clamp-2 mb-1">
                            {video.title}
                          </h3>
                          <p className="text-xs text-zinc-400 mb-0.5">{video.channel}</p>
                          <p className="text-xs text-zinc-500">{video.views} • 2 days ago</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification Popup */}
          <AnimatePresence>
            {state === "notification" && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ type: "spring", damping: 20 }}
                className="absolute top-4 right-4 bg-amber-500 text-black rounded-lg shadow-2xl border-2 border-amber-600 overflow-hidden max-w-sm"
              >
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center text-xl">
                        ⚠️
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-xs font-bold mb-1">OMI AI GUARDIAN</div>
                      <div className="text-sm font-semibold mb-2">Hold up! 🤚</div>
                      <p className="text-sm leading-snug">
                        You've been "researching" YouTube for 12 minutes. That Q4 report isn't going to finish itself...
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-black text-amber-500 rounded font-mono text-xs font-bold hover:bg-black/90">
                      BACK TO WORK
                    </button>
                    <button className="px-3 py-2 bg-black/20 text-black rounded font-mono text-xs hover:bg-black/30">
                      5 MORE MIN
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Timeline indicator */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {(["excel", "youtube", "scrolling", "notification"] as DemoState[]).map((s, i) => (
          <div
            key={s}
            className={`h-1 rounded-full transition-all duration-300 ${
              state === s ? "w-12 bg-amber-500" : "w-8 bg-zinc-700"
            }`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="mt-4 text-center">
        <p className="text-sm text-zinc-500 font-mono">
          {state === "excel" && "Filling out the December revenue data..."}
          {state === "youtube" && "\"Just need to check one thing on YouTube...\""}
          {state === "scrolling" && "12 minutes later, still scrolling..."}
          {state === "notification" && "Omi catches the distraction spiral ✨"}
        </p>
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
