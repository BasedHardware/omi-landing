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
                <div className="bg-zinc-900 rounded border border-zinc-800 h-full p-4">
                  <div className="flex gap-2 mb-4">
                    <div className="px-3 py-1 bg-zinc-800 rounded text-xs font-mono text-zinc-400">File</div>
                    <div className="px-3 py-1 bg-zinc-800 rounded text-xs font-mono text-zinc-400">Edit</div>
                    <div className="px-3 py-1 bg-zinc-800 rounded text-xs font-mono text-zinc-400">View</div>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="h-8 bg-zinc-800/50 rounded border border-zinc-700/50"></div>
                    ))}
                  </div>
                  <div className="mt-4 text-xs text-zinc-600 font-mono">Q4 Revenue Report.xlsx</div>
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
                    animate={state === "scrolling" || state === "notification" ? { y: -300 } : { y: 0 }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="p-6 space-y-4"
                  >
                    {/* Video thumbnails */}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-48 h-28 bg-gradient-to-br from-red-900/30 to-red-600/30 rounded flex items-center justify-center border border-red-500/20">
                          <div className="w-12 h-12 border-4 border-l-transparent border-white/70 rounded-full animate-spin"></div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-zinc-800 rounded w-3/4"></div>
                          <div className="h-3 bg-zinc-800/60 rounded w-1/2"></div>
                          <div className="h-3 bg-zinc-800/40 rounded w-1/4"></div>
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
          {state === "excel" && "Working on Q4 report..."}
          {state === "youtube" && "Wait, let me just check YouTube real quick..."}
          {state === "scrolling" && "Just one more video..."}
          {state === "notification" && "Omi gently intervenes ✨"}
        </p>
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
