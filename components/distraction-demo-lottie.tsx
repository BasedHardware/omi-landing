"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type EnhancedState = "working" | "distracted" | "scrolling" | "intervention";

export function DistractionDemoLottie() {
  const [state, setState] = useState<EnhancedState>("working");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Working state
      setState("working");
      setScrollProgress(0);
      await wait(3500);

      // Distracted state
      setState("distracted");
      await wait(2000);

      // Scrolling state with progress
      setState("scrolling");
      for (let i = 0; i <= 100; i += 2) {
        setScrollProgress(i);
        await wait(40);
      }
      await wait(1000);

      // Intervention state
      setState("intervention");
      await wait(6000);

      // Reset
      setState("working");
    };

    sequence();
    const interval = setInterval(sequence, 14500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="font-mono text-xs text-amber-500 tracking-wider mb-2">
          ENHANCED ANIMATION VERSION
        </div>
        <h3 className="font-serif text-2xl text-white">
          Advanced Motion Design
        </h3>
      </div>

      {/* Animation Container */}
      <div className="relative bg-zinc-900 rounded-lg border-4 border-zinc-800 overflow-hidden shadow-2xl">
        {/* Browser Chrome */}
        <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2 border-b border-zinc-700">
          <div className="flex gap-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-red-500"
              animate={state === "intervention" ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.5, repeat: state === "intervention" ? Infinity : 0 }}
            />
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 ml-4">
            <div className="bg-zinc-700 rounded px-3 py-1 text-xs font-mono text-zinc-400">
              {(state === "working" || state === "distracted") && "productivity-app.io"}
              {(state === "scrolling" || state === "intervention") && "social-feed.com"}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative bg-gradient-to-br from-zinc-950 to-zinc-900 aspect-video overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Working State - Animated Workspace */}
            {(state === "working" || state === "distracted") && (
              <motion.div
                key="working"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                <div className="relative w-full max-w-2xl">
                  {/* Animated Document/Spreadsheet */}
                  <motion.div
                    className="bg-gradient-to-br from-white to-zinc-100 rounded-xl shadow-2xl p-8 border border-zinc-200"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Document Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </motion.div>
                      <div>
                        <div className="text-sm font-bold text-zinc-800">Q4 Report Analysis</div>
                        <div className="text-xs text-zinc-500">Revenue Projections.xlsx</div>
                      </div>
                    </div>

                    {/* Animated Progress Bars */}
                    <div className="space-y-4">
                      {[
                        { label: "Data Analysis", percent: 85, color: "from-green-500 to-emerald-600" },
                        { label: "Chart Generation", percent: 60, color: "from-blue-500 to-indigo-600" },
                        { label: "Report Writing", percent: 30, color: "from-amber-500 to-orange-600" },
                      ].map((item, i) => (
                        <div key={i} className="space-y-1.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-zinc-700 font-medium">{item.label}</span>
                            <span className="text-zinc-500 font-mono">{item.percent}%</span>
                          </div>
                          <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${item.percent}%` }}
                              transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Typing Indicator */}
                    <motion.div
                      className="mt-6 flex items-center gap-2 text-xs text-zinc-600"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                      <span>Working on analysis...</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Scrolling State - Social Media Feed */}
            {state === "scrolling" && (
              <motion.div
                key="scrolling"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-zinc-950 to-red-950/30 p-6 overflow-hidden"
              >
                <motion.div
                  className="space-y-4"
                  animate={{ y: -scrollProgress * 4 }}
                  transition={{ type: "tween", ease: "linear" }}
                >
                  {/* Social Media Posts */}
                  {[
                    { title: "10 Ways to Boost Productivity", color: "from-blue-600 to-cyan-600", icon: "⚡" },
                    { title: "Funny Cat Does Backflip", color: "from-orange-600 to-red-600", icon: "😺" },
                    { title: "You Won't Believe What Happened...", color: "from-purple-600 to-pink-600", icon: "🤯" },
                    { title: "BREAKING: Major News Update", color: "from-red-600 to-rose-600", icon: "🚨" },
                    { title: "Life Hack Thread 🧵", color: "from-green-600 to-emerald-600", icon: "💡" },
                    { title: "Just One More Video...", color: "from-indigo-600 to-purple-600", icon: "📱" },
                  ].map((post, i) => (
                    <motion.div
                      key={i}
                      className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center text-3xl shadow-lg`}
                          animate={{ rotate: [0, 5, 0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          {post.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1">{post.title}</h4>
                          <div className="flex gap-4 text-xs text-zinc-500">
                            <span>2.4M views</span>
                            <span>•</span>
                            <span>3 hours ago</span>
                          </div>
                        </div>
                        <motion.div
                          className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Scroll Progress Indicator */}
                <div className="absolute bottom-4 right-4 bg-zinc-900/80 backdrop-blur-sm rounded-full px-4 py-2 border border-zinc-700">
                  <div className="text-xs font-mono text-zinc-400">
                    {Math.round(scrollProgress)}% scrolled
                  </div>
                </div>
              </motion.div>
            )}

            {/* Intervention Overlay */}
            <AnimatePresence>
              {state === "intervention" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
                >
                  <motion.div
                    initial={{ scale: 0.8, y: 50, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.8, y: 50, opacity: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="relative max-w-lg w-full"
                  >
                    {/* Glowing Background Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl blur-2xl opacity-50"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Alert Card */}
                    <div className="relative bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-2xl shadow-2xl border-4 border-amber-400 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"></div>

                      <div className="relative p-8">
                        {/* Animated Warning Icon */}
                        <motion.div
                          className="flex justify-center mb-6"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <motion.div
                            className="relative w-24 h-24 bg-black/30 rounded-full flex items-center justify-center"
                            animate={{ rotate: [0, 5, 0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <motion.div
                              className="text-6xl"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              ⚠️
                            </motion.div>
                          </motion.div>
                        </motion.div>

                        <div className="text-center space-y-4 text-black">
                          <motion.div
                            className="font-mono text-xs font-bold tracking-wider"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            OMI AI GUARDIAN
                          </motion.div>

                          <motion.h3
                            className="font-serif text-4xl font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            Hold Up! ✋
                          </motion.h3>

                          <motion.p
                            className="text-lg leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            You've been scrolling for{" "}
                            <motion.span
                              className="font-bold text-xl"
                              animate={{ scale: [1, 1.15, 1] }}
                              transition={{ duration: 0.5, repeat: Infinity, delay: 0.5 }}
                            >
                              12 minutes
                            </motion.span>
                            .<br />
                            That Q4 report isn't going to finish itself...
                          </motion.p>

                          <motion.div
                            className="flex gap-3 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <motion.button
                              className="flex-1 px-6 py-4 bg-black text-amber-500 rounded-xl font-mono text-sm font-bold shadow-xl"
                              whileHover={{ scale: 1.05, backgroundColor: "#18181b" }}
                              whileTap={{ scale: 0.95 }}
                            >
                              BACK TO WORK
                            </motion.button>
                            <motion.button
                              className="px-6 py-4 bg-black/20 text-black rounded-xl font-mono text-sm font-bold"
                              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.3)" }}
                              whileTap={{ scale: 0.95 }}
                            >
                              5 MORE MIN
                            </motion.button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimatePresence>
        </div>
      </div>

      {/* Timeline indicator */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {[
          { key: "working", active: state === "working" || state === "distracted" },
          { key: "scrolling", active: state === "scrolling" },
          { key: "intervention", active: state === "intervention" },
        ].map((phase) => (
          <motion.div
            key={phase.key}
            className={`h-1.5 rounded-full transition-all duration-300`}
            animate={{
              width: phase.active ? 64 : 40,
              backgroundColor: phase.active ? "#f59e0b" : "#3f3f46",
            }}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="mt-4 text-center">
        <motion.p
          className="text-sm text-zinc-500 font-mono"
          key={state}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {state === "working" && "Deep focus on Q4 revenue analysis... 📊"}
          {state === "distracted" && "\"Just need to check one thing...\" 👀"}
          {state === "scrolling" && "The endless scroll has begun... 🌀"}
          {state === "intervention" && "Omi intervenes with gentle accountability ✨"}
        </motion.p>
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
