export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="fixed inset-0 pointer-events-none bg-dots opacity-60"></div>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
            <a href="https://omi.me" className="flex items-center">
              <img src="/images/omi-logo.png" alt="omi" className="h-6" />
            </a>
            <a
              href="https://cdn.crabnebula.app/download/mediar/omi-computer/latest/OMI-COMPUTER.dmg"
              className="px-6 py-2 border border-white/20 font-mono text-xs font-bold tracking-wider hover:bg-white/5 hover:border-white/50 transition-colors"
            >
              DOWNLOAD FOR MAC
            </a>
          </div>
        </div>
      </header>

      {/* Video Demo Section */}
      <section className="relative pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-lg overflow-hidden border border-white/10">
              <video
                className="w-full aspect-video object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/omi-rewind-hq.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex gap-6 mt-4 font-mono text-xs text-zinc-500 justify-center">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white animate-pulse"></div>
                ALWAYS ON
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white animate-pulse"></div>
                ALWAYS LISTENING
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl space-y-8">
              <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight">
                <span className="block text-white">Your AI</span>
                <span className="block text-white">Productivity</span>
                <span className="block text-white italic">Guardian</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light border-l-2 border-white/20 pl-6">
                The only AI assistant that proactively intervenes before you lose focus, make mistakes, or waste your day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://cdn.crabnebula.app/download/mediar/omi-computer/latest/OMI-COMPUTER.dmg" className="px-10 py-5 border-2 border-white/20 font-mono text-sm font-bold tracking-wider hover:bg-white/5 hover:border-white/50 transition-colors text-center">
                  DOWNLOAD FOR MAC
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot 1 - Task Capture (Image Left, Text Right) */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 relative overflow-hidden rounded-lg border-2 border-white/10 hover:border-white/20 transition-colors">
                <img
                  src="/images/task-capture.png"
                  alt="Omi capturing tasks from conversation"
                  className="w-full"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div className="font-mono text-xs text-white/60 tracking-wider">01 — TASK CAPTURE</div>
                <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                  Captures Tasks From Your Conversations
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Omi listens to your conversations and automatically identifies action items. When someone asks you to do something, it's already on your to-do list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot 2 - Contextual Advice (Text Left, Image Right) */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 space-y-4 order-2 md:order-1">
                <div className="font-mono text-xs text-white/60 tracking-wider">02 — CONTEXTUAL INTELLIGENCE</div>
                <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                  Knows Your Context, Gives Better Advice
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Omi remembers your relationships, your preferences, and your history. When you need advice, it draws from everything it knows about your life to help.
                </p>
              </div>
              <div className="md:col-span-3 relative overflow-hidden rounded-lg border-2 border-white/10 hover:border-white/20 transition-colors order-1 md:order-2">
                <img
                  src="/images/contextual-advice.png"
                  alt="Omi giving personalized advice"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot 3 - Productivity (Image Left, Text Right) */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 relative overflow-hidden rounded-lg border-2 border-white/10 hover:border-white/20 transition-colors">
                <img
                  src="/images/productivity-reminder.png"
                  alt="Omi productivity reminder"
                  className="w-full"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div className="font-mono text-xs text-white/60 tracking-wider">03 — FOCUS PROTECTION</div>
                <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                  Keeps You Focused When You Drift
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Watching YouTube when you should be working? Omi notices and gently reminds you to get back on track. Not annoying—just supportive.
                </p>
              </div>
            </div>
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
                <div className="md:col-span-2 border-2 border-white/20 p-8 md:p-12 hover:bg-white/5 transition-colors group">
                  <div className="space-y-6">
                    <div className="font-mono text-xs text-white tracking-wider">PRIMARY DEFENSE</div>
                    <h3 className="font-serif text-3xl md:text-4xl leading-tight group-hover:text-white transition-colors">
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

                <div className="border border-white/10 p-6 hover:border-white/20 transition-colors">
                  <div className="h-full flex flex-col justify-between space-y-4">
                    <div className="font-mono text-xs text-white">02</div>
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
                <div className="border border-white/10 p-6 hover:border-white/20 transition-colors">
                  <div className="h-full flex flex-col justify-between space-y-4">
                    <div className="font-mono text-xs text-white">03</div>
                    <div>
                      <h3 className="font-serif text-xl mb-3">Mistake Prevention</h3>
                      <p className="text-sm text-zinc-400">
                        About to delete a folder? Click a sketchy link? "Wait—let me check this."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 border border-white/10 p-8 hover:border-white/20 transition-colors">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="font-mono text-xs text-white shrink-0">04</div>
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
              <div className="border border-white/10 p-8 hover:border-white/20 transition-colors">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="font-mono text-xs text-white shrink-0">05</div>
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
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl border-b-2 border-white/20 pb-4">
                  Built for You
                </h2>
                <div className="space-y-2">
                  {[
                    "Real-Time Context Understanding",
                    "Behavioral Pattern Recognition",
                    "Proactive Intervention",
                    "Emotional Intelligence Detection"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 py-3 border-b border-white/5 hover:border-white/20 transition-colors group">
                      <span className="font-mono text-xs text-white shrink-0 mt-1">0{i + 1}</span>
                      <span className="text-lg text-zinc-300 group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl border-b-2 border-white/20 pb-4">
                  Privacy First
                </h2>
                <div className="space-y-2">
                  {[
                    "Your Data Works For You",
                    "Never Sold or Shared",
                    "No Ads, No Tracking",
                    "No Subscriptions, Ever"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 py-3 border-b border-white/5 hover:border-white/20 transition-colors group">
                      <span className="font-mono text-xs text-white shrink-0 mt-1">0{i + 1}</span>
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
                  <span className="text-white italic">Make it different.</span>
                </h2>
                <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl font-light">
                  One-time investment. Lifetime of focus. Your persistent AI companion is ready.
                </p>
{/*                 <a href="/pricing" className="inline-block px-10 py-5 bg-white text-black font-mono text-sm font-bold tracking-wider hover:bg-amber-400 transition-colors">
                  GET STARTED
                </a> */}
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
              <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
              <a href="#" className="hover:text-white transition-colors">TERMS</a>
              <a href="#" className="hover:text-white transition-colors">SUPPORT</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
