import { DistractionDemo } from "@/components/distraction-demo";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden relative">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-noise"></div>

      {/* Geometric accent elements */}
      <div className="fixed top-0 right-0 w-[40vw] h-[40vw] border-l border-b border-amber-500/20 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-amber-500/5 pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      {/* Hero Section - Asymmetric */}
      <section className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Left - Main headline */}
            <div className="md:col-span-8 space-y-8">
              <div className="inline-block">
                <div className="flex items-center gap-2 mb-6 font-mono text-xs tracking-wider">
                  <div className="w-1.5 h-1.5 bg-amber-500 animate-pulse"></div>
                  <span className="text-amber-500">ACTIVE MONITORING</span>
                </div>
              </div>

              <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight">
                <span className="block text-white">Your AI</span>
                <span className="block text-white">Productivity</span>
                <span className="block text-amber-500 italic">Guardian</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light border-l-2 border-amber-500/30 pl-6">
                The only AI assistant that proactively intervenes before you lose focus, make mistakes, or waste your day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a href="/pricing" className="group relative px-10 py-5 bg-amber-500 text-black font-mono text-sm font-bold tracking-wider hover:bg-amber-400 transition-colors overflow-hidden text-center">
                  <span className="relative z-10">GET STARTED</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </a>
                <a href="https://cdn.crabnebula.app/download/mediar/omi-computer/latest/OMI-COMPUTER.dmg" className="px-10 py-5 border-2 border-white/20 font-mono text-sm font-bold tracking-wider hover:bg-white/5 hover:border-amber-500/50 transition-colors text-center">
                  DOWNLOAD FOR MAC
                </a>
              </div>
            </div>

            {/* Right - Status indicators */}
            <div className="md:col-span-4 space-y-4 md:pt-20">
              <div className="border border-white/10 p-6 hover:border-amber-500/30 transition-colors">
                <div className="font-mono text-xs text-amber-500 mb-2">01</div>
                <div className="text-sm text-zinc-300">Always On</div>
              </div>
              <div className="border border-white/10 p-6 hover:border-amber-500/30 transition-colors">
                <div className="font-mono text-xs text-amber-500 mb-2">02</div>
                <div className="text-sm text-zinc-300">Always Learning</div>
              </div>
              <div className="border border-white/10 p-6 hover:border-amber-500/30 transition-colors">
                <div className="font-mono text-xs text-amber-500 mb-2">03</div>
                <div className="text-sm text-zinc-300">Privacy-Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - Diagonal Layout */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 md:order-1">
                <div className="space-y-6">
                  <p className="text-2xl md:text-3xl text-zinc-300 leading-relaxed">
                    You set goals. You make plans. You promise yourself <span className="text-white font-serif italic">"today will be different."</span>
                  </p>
                  <p className="text-2xl md:text-3xl text-zinc-300 leading-relaxed">
                    Then life happens. <span className="text-amber-500">Distractions.</span> <span className="text-amber-500">Impulsive decisions.</span> <span className="text-amber-500">Wasted hours.</span>
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-amber-500/10 transform rotate-2"></div>
                  <div className="relative bg-black border-2 border-amber-500/50 p-8 md:p-12">
                    <h2 className="font-serif text-4xl md:text-5xl leading-tight text-white mb-6">
                      The Problem
                    </h2>
                    <p className="text-xl text-zinc-400 leading-relaxed">
                      What if you had someone who never gave up on you? Who persistently—but kindly—kept you accountable, every single day?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="font-mono text-xs text-amber-500 tracking-wider">LIVE DEMO</div>
              <h2 className="font-serif text-5xl md:text-7xl tracking-tight">
                See It In Action
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Watch how Omi catches you before the distraction spiral begins
              </p>
            </div>

            <DistractionDemo />
          </div>
        </div>
      </section>

      {/* Features - Asymmetric Grid */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="font-serif text-5xl md:text-7xl tracking-tight">How It Protects You</h2>
              <p className="text-xl text-zinc-400 font-mono">PROACTIVE / PERSISTENT / PRECISE</p>
            </div>

            {/* Custom asymmetric layout */}
            <div className="space-y-4">
              {/* Row 1 - Large left, small right */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 border-2 border-amber-500/30 p-8 md:p-12 hover:bg-amber-500/5 transition-colors group">
                  <div className="space-y-6">
                    <div className="font-mono text-xs text-amber-500 tracking-wider">PRIMARY DEFENSE</div>
                    <h3 className="font-serif text-3xl md:text-4xl leading-tight group-hover:text-amber-500 transition-colors">
                      Pre-Emptive Distraction Blocking
                    </h3>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                      Catches you before the doom scroll starts. "You've opened social media 3 times in 10 minutes. Let's refocus on your current task."
                    </p>
                    <div className="flex gap-4 pt-4 font-mono text-xs text-zinc-500">
                      <span className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-500 animate-pulse"></div>
                        REAL-TIME
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-500 animate-pulse"></div>
                        PATTERN RECOGNITION
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border border-white/10 p-6 hover:border-amber-500/30 transition-colors">
                  <div className="h-full flex flex-col justify-between space-y-4">
                    <div className="font-mono text-xs text-amber-500">02</div>
                    <div>
                      <h3 className="font-serif text-xl mb-3">Emotional Email Detection</h3>
                      <p className="text-sm text-zinc-400">
                        Analyzes your typing patterns. "This email seems heated. Save as draft?"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 - Small left, large right */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-white/10 p-6 hover:border-amber-500/30 transition-colors">
                  <div className="h-full flex flex-col justify-between space-y-4">
                    <div className="font-mono text-xs text-amber-500">03</div>
                    <div>
                      <h3 className="font-serif text-xl mb-3">Mistake Prevention</h3>
                      <p className="text-sm text-zinc-400">
                        About to delete a folder? Click a sketchy link? "Wait—let me check this."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 border border-white/10 p-8 hover:border-amber-500/30 transition-colors">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="font-mono text-xs text-amber-500 shrink-0">04</div>
                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl md:text-3xl">Goal Realignment</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        "You said you wanted to finish the report today. You've been researching unrelated topics for 45 minutes. Ready to get back?"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 - Single wide */}
              <div className="border border-white/10 p-8 hover:border-amber-500/30 transition-colors">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="font-mono text-xs text-amber-500 shrink-0">05</div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-serif text-2xl md:text-3xl">Persistent Check-Ins</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      Follows up if you ignore nudges. Not annoying—supportive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities - Two Column with Overlap */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl border-b-2 border-amber-500/30 pb-4">
                  Built for You
                </h2>
                <div className="space-y-2">
                  {[
                    "Real-Time Context Understanding",
                    "Behavioral Pattern Recognition",
                    "Proactive Intervention",
                    "Emotional Intelligence Detection"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 py-3 border-b border-white/5 hover:border-amber-500/30 transition-colors group">
                      <span className="font-mono text-xs text-amber-500 shrink-0 mt-1">0{i + 1}</span>
                      <span className="text-lg text-zinc-300 group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl border-b-2 border-amber-500/30 pb-4">
                  Privacy First
                </h2>
                <div className="space-y-2">
                  {[
                    "Your Data Works For You",
                    "Never Sold or Shared",
                    "No Ads, No Tracking",
                    "No Subscriptions, Ever"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 py-3 border-b border-white/5 hover:border-amber-500/30 transition-colors group">
                      <span className="font-mono text-xs text-amber-500 shrink-0 mt-1">0{i + 1}</span>
                      <span className="text-lg text-zinc-300 group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Asymmetric */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8 space-y-8">
                <h2 className="font-serif text-5xl md:text-7xl leading-[1.1]">
                  Stop hoping tomorrow will be different.
                  <br />
                  <span className="text-amber-500 italic">Make it different.</span>
                </h2>
                <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl font-light">
                  One-time investment. Lifetime of focus. Your persistent AI companion is ready.
                </p>
                <a href="/pricing" className="inline-block px-10 py-5 bg-amber-500 text-black font-mono text-sm font-bold tracking-wider hover:bg-amber-400 transition-colors">
                  GET STARTED
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm">
            <div className="text-zinc-500">
              © 2026 OMI — YOUR DATA STAYS YOURS
            </div>
            <div className="flex gap-8 text-zinc-500">
              <a href="#" className="hover:text-amber-500 transition-colors">PRIVACY</a>
              <a href="#" className="hover:text-amber-500 transition-colors">TERMS</a>
              <a href="#" className="hover:text-amber-500 transition-colors">SUPPORT</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
