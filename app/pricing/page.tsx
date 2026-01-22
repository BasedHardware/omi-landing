export default function Pricing() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden relative">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-noise"></div>

      {/* Geometric accent elements */}
      <div className="fixed top-0 right-0 w-[40vw] h-[40vw] border-l border-b border-amber-500/20 pointer-events-none"></div>

      {/* Header */}
      <header className="relative border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <a href="/" className="font-serif text-2xl hover:text-amber-500 transition-colors">
              OMI
            </a>
            <nav className="flex gap-8 font-mono text-xs">
              <a href="/" className="hover:text-amber-500 transition-colors">HOME</a>
              <a href="#" className="hover:text-amber-500 transition-colors">SUPPORT</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="font-mono text-xs tracking-widest text-amber-500">PRICING</div>
            <h1 className="font-serif text-6xl md:text-8xl leading-[0.95]">
              Simple.
              <br />
              <span className="text-amber-500 italic">Transparent.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light">
              One payment. Lifetime access. No surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card - Bold Centered */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-8 border-2 border-amber-500/20"></div>
              <div className="relative bg-zinc-950 border-4 border-amber-500 p-12 md:p-16 text-center space-y-10">
                <div>
                  <div className="font-mono text-xs tracking-widest text-amber-500 mb-6">ONE-TIME PURCHASE</div>
                  <div className="font-serif text-8xl md:text-9xl font-bold text-white mb-4 leading-none">
                    $79
                  </div>
                  <div className="text-2xl text-zinc-400 font-light">Pay once, own forever</div>
                </div>

                <div className="py-8 border-y border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-xl mx-auto text-left">
                    {[
                      "Full Desktop Assistant",
                      "Lifetime Updates",
                      "All Future Features",
                      "30-Day Money-Back Guarantee",
                      "Priority Email Support",
                      "Unlimited Devices",
                      "Privacy-Focused Design",
                      "No Recurring Fees Ever"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="font-mono text-xs text-amber-500 mt-1">—</span>
                        <span className="text-zinc-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="group relative w-full md:w-auto px-16 py-6 bg-amber-500 text-black font-mono text-sm font-bold tracking-wider hover:bg-white transition-colors">
                  <span className="relative z-10">PURCHASE NOW — $79</span>
                </button>

                <p className="text-sm text-zinc-500 font-mono">
                  NO SUBSCRIPTIONS / NO HIDDEN FEES / PURE PRODUCTIVITY
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why One-Time */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl border-b-2 border-amber-500/30 pb-4">
                  Why One-Time?
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-mono text-xs text-amber-500 mb-2">01 — ALIGNMENT</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      We succeed when you succeed. Not when we extract recurring fees. Our incentive is to build something you'll use for years.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-amber-500 mb-2">02 — RESPECT</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Your productivity assistant should work for you, not hold you hostage with subscriptions. Own your tools.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-amber-500 mb-2">03 — PRIVACY</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      We never sell your data. We don't show ads. Your information is used solely to help you stay productive.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl border-b-2 border-amber-500/30 pb-4">
                  What You Get
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-mono text-xs text-amber-500 mb-2">IMMEDIATE ACCESS</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Download and install within minutes. Start protecting your productivity today.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-amber-500 mb-2">LIFETIME UPDATES</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Every feature we add. Every improvement we make. Yours automatically. Forever.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-amber-500 mb-2">30-DAY GUARANTEE</h3>
                    <p className="text-zinc-300 leading-relaxed">
                      Not seeing results? Full refund within 30 days. No questions, no hassle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-serif text-4xl md:text-6xl">
              Frequently Asked
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Can I use it on multiple computers?",
                  a: "Yes. One license covers all your personal devices. Use it on your desktop, laptop, wherever you work."
                },
                {
                  q: "What operating systems are supported?",
                  a: "Currently Windows and macOS. Linux support coming soon. All future platform support included in your purchase."
                },
                {
                  q: "Is there a free trial?",
                  a: "No traditional trial, but we offer a 30-day money-back guarantee. That's basically a 30-day trial with no time pressure."
                },
                {
                  q: "How are updates delivered?",
                  a: "Automatically. The app checks for updates and installs them seamlessly. You'll always have the latest version."
                },
                {
                  q: "What if I need help?",
                  a: "Priority email support is included. We typically respond within 24 hours on weekdays."
                },
                {
                  q: "Will the price increase later?",
                  a: "Yes, likely. Early adopters get the best price. But once you buy, you're locked in forever—no future charges."
                }
              ].map((item, i) => (
                <div key={i} className="border border-white/10 p-6 hover:border-amber-500/30 transition-colors">
                  <div className="flex gap-6">
                    <div className="font-mono text-xs text-amber-500 shrink-0">0{i + 1}</div>
                    <div className="space-y-3">
                      <h3 className="font-serif text-xl text-white">{item.q}</h3>
                      <p className="text-zinc-400 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-5xl md:text-7xl leading-tight">
              Ready to take control?
            </h2>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Join hundreds of professionals who've stopped wasting time and started achieving their goals.
            </p>
            <button className="px-16 py-6 bg-amber-500 text-black font-mono text-sm font-bold tracking-wider hover:bg-white transition-colors">
              PURCHASE NOW — $79
            </button>
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
