"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DemoState = "excel" | "typing" | "moving-cursor" | "clicking" | "youtube" | "scrolling" | "notification";

export function DistractionDemo() {
  const [state, setState] = useState<DemoState>("excel");
  const [typedText, setTypedText] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const sequence = async () => {
      // Start with Excel
      setState("excel");
      setTypedText("");
      await wait(500);

      // Start typing
      setState("typing");
      const text = "$945,120";
      for (let i = 0; i <= text.length; i++) {
        setTypedText(text.substring(0, i));
        await wait(150);
      }
      await wait(800);

      // Move cursor to YouTube icon
      setState("moving-cursor");
      await wait(1200);

      // Click animation
      setState("clicking");
      await wait(400);

      // Switch to YouTube
      setState("youtube");
      await wait(2000);

      // Start scrolling
      setState("scrolling");
      await wait(2500);

      // Show notification (doubled duration)
      setState("notification");
      await wait(6000);

      // Reset and loop
      setState("excel");
    };

    sequence();
    const interval = setInterval(sequence, 17000);
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
              {(state === "excel" || state === "typing" || state === "moving-cursor" || state === "clicking") && "excel.company.com"}
              {(state === "youtube" || state === "scrolling" || state === "notification") && "youtube.com"}
            </div>
          </div>
          {/* YouTube Bookmark Icon */}
          <motion.div
            className="relative w-8 h-8 bg-red-600 rounded flex items-center justify-center cursor-pointer hover:bg-red-500 transition-colors"
            animate={
              state === "clicking"
                ? { scale: [1, 0.9, 1] }
                : { scale: 1 }
            }
            transition={{ duration: 0.2 }}
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="relative bg-zinc-950 aspect-video overflow-hidden">
          <AnimatePresence mode="wait">
            {(state === "excel" || state === "typing" || state === "moving-cursor" || state === "clicking") && (
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
                      { month: "December", revenue: typedText, expenses: "", profit: "" },
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-4 border-b border-zinc-200 hover:bg-zinc-50">
                        <div className="px-2 py-1.5 text-xs text-zinc-700 border-r border-zinc-200">{row.month}</div>
                        <div className="px-2 py-1.5 text-xs text-zinc-700 border-r border-zinc-200">
                          {row.revenue}
                          {i === 2 && state === "typing" && (
                            <motion.span
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                              className="inline-block w-1 h-3 bg-blue-600 ml-0.5"
                            />
                          )}
                        </div>
                        <div className="px-2 py-1.5 text-xs text-zinc-700 border-r border-zinc-200">{row.expenses}</div>
                        <div className="px-2 py-1.5 text-xs text-zinc-700">{row.profit}</div>
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

          {/* Animated Mouse Cursor */}
          <AnimatePresence>
            {(state === "moving-cursor" || state === "clicking") && (
              <motion.div
                className="absolute pointer-events-none z-50"
                initial={{ x: "50%", y: "60%" }}
                animate={
                  state === "moving-cursor" || state === "clicking"
                    ? { x: "calc(100% - 80px)", y: "-40px" }
                    : { x: "50%", y: "60%" }
                }
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {/* Cursor Arrow */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 3L19 12L12 13L9 20L5 3Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="1"
                  />
                </svg>
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
        {[
          { key: "work", active: state === "excel" || state === "typing" || state === "moving-cursor" || state === "clicking" },
          { key: "youtube", active: state === "youtube" },
          { key: "scrolling", active: state === "scrolling" },
          { key: "notification", active: state === "notification" },
        ].map((phase, i) => (
          <div
            key={phase.key}
            className={`h-1 rounded-full transition-all duration-300 ${
              phase.active ? "w-12 bg-amber-500" : "w-8 bg-zinc-700"
            }`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="mt-4 text-center">
        <p className="text-sm text-zinc-500 font-mono">
          {state === "excel" && "Working on the Q4 revenue report..."}
          {state === "typing" && "Entering December revenue data..."}
          {state === "moving-cursor" && "\"Just a quick check on YouTube...\""}
          {state === "clicking" && "Clicking..."}
          {state === "youtube" && "\"Just one video...\""}
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
