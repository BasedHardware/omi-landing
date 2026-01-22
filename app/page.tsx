export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Your Persistent AI Productivity Partner
        </h1>
        <p className="text-2xl text-gray-700 mb-12">
          Always watching. Always learning. Always helping you stay on track.
        </p>
        <div className="flex gap-4 justify-center mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Get It Now - $79 One-Time
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Problem</h2>
          <p className="text-xl text-gray-700 mb-4">
            You set goals. You make plans. You promise yourself "today will be different."
          </p>
          <p className="text-xl text-gray-700 mb-4">
            Then life happens. You get distracted. You make impulsive decisions. You waste hours on things that don't matter.
          </p>
          <p className="text-xl text-gray-800 font-semibold">
            What if you had someone who never gave up on you? Who persistently—but kindly—kept you accountable, every single day?
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Your Always-On AI Guardian</h2>
          <p className="text-xl text-gray-700 mb-4">
            Not a timer. Not a blocker. Not a tracker that judges you after the fact.
          </p>
          <p className="text-xl text-gray-800 font-semibold mb-6">
            A proactive companion that intervenes in real-time—before you lose focus, before you make mistakes, before you waste another day.
          </p>
          <p className="text-xl text-gray-700">
            It never sleeps. It never judges. It never gives up on helping you be your best self.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Proactive Protection, Persistent Support</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Always Monitoring</h3>
              <p className="text-gray-700">
                Continuously observes your desktop activity, understanding context and identifying patterns in real-time.
              </p>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Instantly Recognizing Trouble</h3>
              <p className="text-gray-700">
                The moment you start doom scrolling, drafting an angry email, or drifting from your goals—it knows.
              </p>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Immediately Intervening</h3>
              <p className="text-gray-700">
                Doesn't wait for you to ask for help. Proactively steps in with gentle nudges exactly when you need them.
              </p>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Persistently Guiding</h3>
              <p className="text-gray-700">
                If you dismiss a notification and keep drifting, it tries again. Not annoying—supportive. Like a friend who believes in you.
              </p>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Constantly Learning</h3>
              <p className="text-gray-700">
                Gets better every day at understanding your work patterns, recognizing your distractions, and timing interventions perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Examples */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Protects You</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Pre-Emptive Distraction Blocking</h3>
              <p className="text-gray-700">
                Catches you before the doom scroll starts. "You've opened social media 3 times in 10 minutes. Let's refocus on [current task]."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Emotional Email Detection</h3>
              <p className="text-gray-700">
                Analyzes your typing patterns and word choice. "This email seems heated. Want to save as draft and revisit in an hour?"
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mistake Prevention</h3>
              <p className="text-gray-700">
                About to delete a folder? Click a sketchy link? Send to the wrong recipient? "Wait—let me double-check this for you."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Goal Realignment</h3>
              <p className="text-gray-700">
                "You said you wanted to finish the report today. You've been researching unrelated topics for 45 minutes. Ready to get back?"
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Persistent Check-Ins</h3>
              <p className="text-gray-700">
                If you ignore a nudge and continue spiraling, it follows up. "Still browsing? That report won't write itself. Want help breaking it down?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
          <div className="space-y-4">
            {[
              "Real-Time Context Understanding — Knows what you're working on, what's urgent, what's a distraction",
              "Behavioral Pattern Recognition — Learns your unique procrastination and distraction triggers",
              "Proactive Intervention — Steps in before damage is done, not after",
              "Emotional Intelligence — Detects stress, frustration, anger in your typing and cursor movements",
              "Persistent Gentle Nudges — Follows up if you dismiss warnings—supportive, not annoying",
              "Adaptive Learning — Gets smarter about when to intervene and when to leave you alone",
              "Complete Privacy — 100% local processing. Your data never leaves your device. Ever."
            ].map((feature, i) => (
              <div key={i} className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <p className="text-gray-700 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Persistent Matters */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why "Persistent" Matters</h2>
          <p className="text-xl text-gray-700 mb-4">
            Most productivity tools give up after one notification. You dismiss it, and they're done trying.
          </p>
          <p className="text-xl text-gray-800 font-semibold mb-4">
            Not this assistant.
          </p>
          <p className="text-xl text-gray-700 mb-4">
            It understands that behavior change is hard. That you'll resist at first. That you need someone who won't give up on you—even when you give up on yourself.
          </p>
          <p className="text-xl text-gray-700">
            It's like having a personal trainer for your productivity. Supportive. Patient. But relentless in keeping you accountable.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Real Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Save 10-15 hours per week from prevented distractions",
              "Avoid career-damaging mistakes caught before you click 'send'",
              "Actually finish important projects instead of abandoning them",
              "Build lasting focus habits through consistent, proactive guidance",
              "Reduce stress and regret from impulsive decisions",
              "Feel supported, not alone in your productivity journey"
            ].map((result, i) => (
              <div key={i} className="flex items-start">
                <span className="text-white mr-3 text-xl">✓</span>
                <p className="text-lg">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy & Control</h2>
          <div className="space-y-4">
            {[
              "Runs 100% locally on your computer",
              "Zero cloud processing, zero data uploads",
              "You control monitoring scope and sensitivity",
              "Pause or disable anytime (but we'll gently ask why 😊)",
              "No subscriptions, no data harvesting, no hidden costs"
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Simple, Fair Pricing</h2>
          <div className="text-8xl font-bold mb-4">$79</div>
          <div className="text-2xl mb-8">One-Time Purchase</div>
          <p className="text-xl mb-8">
            That's it. No subscriptions. No monthly fees. No "premium tiers."
          </p>
          <p className="text-xl mb-12">
            Buy it once, use it forever. Lifetime updates included.
          </p>
          <div className="bg-white text-gray-900 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-6">What you get:</h3>
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                Full desktop assistant for Windows & Mac
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                All current and future features
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                Lifetime updates and improvements
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                Email support
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                30-day money-back guarantee
              </li>
            </ul>
          </div>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 rounded-lg text-2xl font-bold transition-colors">
            Get Your AI Assistant Now - $79
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: "Will this feel invasive?",
                a: "It's designed to be supportive, not surveillance. You control what it monitors, and it only intervenes when genuinely helpful."
              },
              {
                q: "What if I find it annoying?",
                a: "You can adjust sensitivity, pause it, or disable specific types of notifications. Plus, 30-day refund if it's not for you."
              },
              {
                q: "How is this different from website blockers?",
                a: "Blockers are binary: blocked or not. This understands context. A 5-minute Twitter break is fine; 45 minutes is a problem. It knows the difference."
              },
              {
                q: "Will it slow down my computer?",
                a: "No. Lightweight background process using minimal resources."
              },
              {
                q: "Is this really one-time? No hidden costs?",
                a: "Really one-time. $79 forever. We believe in fair, transparent pricing."
              },
              {
                q: "What if I work on sensitive/confidential material?",
                a: "Everything processes locally. The AI never 'sees' your data—it only analyzes patterns and context. Nothing leaves your device."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Q: {faq.q}</h3>
                <p className="text-gray-700">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">The Choice</h2>
          <p className="text-xl mb-6">
            You can keep doing what you've been doing. Setting goals. Trying willpower. Hoping tomorrow will be different.
          </p>
          <p className="text-2xl font-semibold mb-8">
            Or you can have a tireless AI companion who proactively keeps you on track—every day, all day, for life.
          </p>
          <p className="text-xl mb-12">
            One-time investment. Lifetime of focus.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-lg text-2xl font-bold mb-6 transition-colors">
            Get Your Persistent AI Assistant - $79
          </button>
          <p className="text-gray-400">
            30-day money-back guarantee. Nothing to lose except your bad habits.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">Omi | Privacy Policy | Terms of Service | Support</p>
          <p>© 2026 All rights reserved. Your data stays yours.</p>
        </div>
      </footer>
    </div>
  );
}
