export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-24 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Always On · Always Learning
            </div>

            <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Your AI Productivity
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Guardian
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
              The only AI assistant that proactively intervenes before you lose focus, make mistakes, or waste your day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10">Get Started — $79</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button className="px-8 py-4 glass rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
                Watch Demo →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - Asymmetric Layout */}
      <section className="relative container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-white">The Problem</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                You set goals. You make plans. You promise yourself "today will be different."
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                Then life happens. Distractions. Impulsive decisions. Wasted hours.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl border border-purple-500/20">
              <p className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent leading-relaxed">
                What if you had someone who never gave up on you? Who persistently—but kindly—kept you accountable, every single day?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Bento Grid */}
      <section className="relative container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold">How It Protects You</h2>
            <p className="text-xl text-slate-300">Proactive intervention. Persistent support. Real results.</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large feature card */}
            <div className="md:col-span-2 md:row-span-2 glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all group">
              <div className="h-full flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                    Pre-Emptive Distraction Blocking
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Catches you before the doom scroll starts. "You've opened social media 3 times in 10 minutes. Let's refocus on your current task."
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-purple-300">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Real-time monitoring
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    Pattern recognition
                  </span>
                </div>
              </div>
            </div>

            {/* Medium cards */}
            <div className="glass p-6 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-bold mb-3">Emotional Email Detection</h3>
              <p className="text-slate-300">
                Analyzes your typing patterns. "This email seems heated. Save as draft?"
              </p>
            </div>

            <div className="glass p-6 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-bold mb-3">Mistake Prevention</h3>
              <p className="text-slate-300">
                About to delete a folder? Click a sketchy link? "Wait—let me check this."
              </p>
            </div>

            <div className="md:col-span-2 glass p-6 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-bold mb-3">Goal Realignment</h3>
              <p className="text-slate-300">
                "You said you wanted to finish the report today. You've been researching unrelated topics for 45 minutes. Ready to get back?"
              </p>
            </div>

            <div className="glass p-6 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-bold mb-3">Persistent Check-Ins</h3>
              <p className="text-slate-300">
                Follows up if you ignore nudges. Not annoying—supportive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Two Column */}
      <section className="relative container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Built for You</h2>
              <div className="space-y-4">
                {[
                  "Real-Time Context Understanding",
                  "Behavioral Pattern Recognition",
                  "Proactive Intervention",
                  "Emotional Intelligence Detection"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 glass rounded-xl border border-purple-500/10">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-lg text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Privacy First</h2>
              <div className="space-y-4">
                {[
                  "100% Local Processing",
                  "Zero Cloud Uploads",
                  "You Control Everything",
                  "No Subscriptions, Ever"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 glass rounded-xl border border-purple-500/10">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-lg text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Centered Hero Style */}
      <section className="relative container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-12 rounded-3xl border border-purple-500/30">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-wider text-purple-300 mb-4">Simple Pricing</p>
                <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  $79
                </div>
                <p className="text-2xl text-slate-300">One-Time Purchase</p>
              </div>

              <div className="py-8 border-y border-white/10">
                <div className="grid grid-cols-2 gap-6 text-left max-w-xl mx-auto">
                  {[
                    "Full Desktop Assistant",
                    "Lifetime Updates",
                    "All Future Features",
                    "30-Day Guarantee"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="group relative px-12 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10">Get Your AI Guardian — $79</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <p className="text-sm text-slate-400">
                No subscriptions. No hidden fees. Just pure productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold leading-tight">
            Stop hoping tomorrow will be different.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Make it different.
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            One-time investment. Lifetime of focus. Your persistent AI companion is ready.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400">
              © 2026 Omi. Your data stays yours.
            </div>
            <div className="flex gap-6 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
