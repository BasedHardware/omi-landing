"use client";

import { useState, useEffect, useCallback } from "react";
import { DotLottieReact, DotLottie } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";

type LottieState = "working" | "distracted" | "scrolling" | "intervention";

export function DistractionDemoLottie() {
  const [state, setState] = useState<LottieState>("working");
  const [workingLottie, setWorkingLottie] = useState<DotLottie | null>(null);
  const [scrollingLottie, setScrollingLottie] = useState<DotLottie | null>(null);
  const [interventionLottie, setInterventionLottie] = useState<DotLottie | null>(null);

  useEffect(() => {
    const sequence = async () => {
      // Working state
      setState("working");
      await wait(3000);

      // Distracted state
      setState("distracted");
      await wait(2500);

      // Scrolling state
      setState("scrolling");
      await wait(3000);

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

  // Control Lottie playback based on state
  useEffect(() => {
    if (state === "working") {
      workingLottie?.play();
      scrollingLottie?.stop();
      interventionLottie?.stop();
    } else if (state === "scrolling") {
      scrollingLottie?.play();
      workingLottie?.stop();
    } else if (state === "intervention") {
      interventionLottie?.play();
      scrollingLottie?.pause();
    }
  }, [state, workingLottie, scrollingLottie, interventionLottie]);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="font-mono text-xs text-amber-500 tracking-wider mb-2">
          LOTTIE ANIMATION VERSION
        </div>
        <h3 className="font-serif text-2xl text-white">
          Professional Motion Graphics
        </h3>
      </div>

      {/* Animation Container */}
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
              {(state === "working" || state === "distracted") && "work.company.com"}
              {(state === "scrolling" || state === "intervention") && "youtube.com"}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative bg-zinc-950 aspect-video overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            {/* Working State - Typing Animation */}
            {(state === "working" || state === "distracted") && (
              <motion.div
                key="working"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950"
              >
                <div className="w-full max-w-md">
                  <DotLottieReact
                    src="https://lottie.host/d8560826-44b3-4b7d-8320-44b34a6adb66/4lKEhYOdFa.lottie"
                    loop
                    autoplay={state === "working"}
                    dotLottieRefCallback={setWorkingLottie}
                    className="w-full h-full"
                  />
                  <p className="text-center text-zinc-400 text-sm font-mono mt-4">
                    Focused work mode...
                  </p>
                </div>
              </motion.div>
            )}

            {/* Scrolling State - Social Media Scrolling */}
            {state === "scrolling" && (
              <motion.div
                key="scrolling"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-950/20 to-zinc-950"
              >
                <div className="w-full max-w-md">
                  <DotLottieReact
                    src="https://lottie.host/4c20f467-bb8c-4b8c-85ed-c6a1a87b5e87/WuSi9vphFD.lottie"
                    loop
                    autoplay={state === "scrolling"}
                    dotLottieRefCallback={setScrollingLottie}
                    className="w-full h-full"
                    speed={0.8}
                  />
                  <p className="text-center text-red-400 text-sm font-mono mt-4">
                    Down the rabbit hole...
                  </p>
                </div>
              </motion.div>
            )}

            {/* Intervention Overlay */}
            <AnimatePresence>
              {state === "intervention" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                >
                  <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 text-black rounded-2xl shadow-2xl border-4 border-amber-400 overflow-hidden max-w-lg mx-4">
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"></div>

                    <div className="relative p-8">
                      {/* Alert Animation */}
                      <div className="flex justify-center mb-4">
                        <div className="w-32 h-32">
                          <DotLottieReact
                            src="https://lottie.host/b4154b95-84f9-4b0c-8237-e5f3e0aff39a/BZLNmrdjnk.lottie"
                            loop
                            autoplay={state === "intervention"}
                            dotLottieRefCallback={setInterventionLottie}
                          />
                        </div>
                      </div>

                      <div className="text-center space-y-4">
                        <div className="font-mono text-xs font-bold tracking-wider">
                          OMI AI GUARDIAN
                        </div>
                        <h3 className="font-serif text-3xl font-bold">
                          Hold Up! ✋
                        </h3>
                        <p className="text-lg leading-relaxed">
                          You've been scrolling for <span className="font-bold">12 minutes</span>.
                          <br />
                          That Q4 report isn't going to finish itself...
                        </p>

                        <div className="flex gap-3 pt-4">
                          <button className="flex-1 px-6 py-4 bg-black text-amber-500 rounded-lg font-mono text-sm font-bold hover:bg-zinc-900 transition-colors shadow-lg">
                            BACK TO WORK
                          </button>
                          <button className="px-6 py-4 bg-black/20 text-black rounded-lg font-mono text-sm font-bold hover:bg-black/30 transition-colors">
                            5 MORE MIN
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
          <div
            key={phase.key}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              phase.active ? "w-16 bg-amber-500" : "w-10 bg-zinc-700"
            }`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="mt-4 text-center">
        <p className="text-sm text-zinc-500 font-mono">
          {state === "working" && "Deep in the spreadsheet... 📊"}
          {state === "distracted" && "\"Just need to check one thing...\""}
          {state === "scrolling" && "12 minutes later, still scrolling... 🌀"}
          {state === "intervention" && "Omi intervenes with gentle accountability ✨"}
        </p>
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
