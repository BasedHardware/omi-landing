import DownloadButton from '../components/DownloadButton';

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
            <DownloadButton
              location="header"
              className="px-6 py-2 border border-white/20 font-mono text-xs font-bold tracking-wider hover:bg-white/5 hover:border-white/50 transition-colors"
            >
              DOWNLOAD FOR MAC
            </DownloadButton>
          </div>
        </div>
      </header>

      {/* Hero Content Section */}
      <section className="relative pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl space-y-8">
              <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight">
                <span className="block text-white">AI That Operates</span>
                <span className="block text-white"><span className="italic">Your</span> Computer</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light border-l-2 border-white/20 pl-6">
                Not just browsing the web—Omi reads your files, operates your computer, and does all the things on your machine. Real AI agents that work hard so you don't have to.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <DownloadButton
                  location="hero"
                  className="px-10 py-5 border-2 border-white/20 font-mono text-sm font-bold tracking-wider hover:bg-white/5 hover:border-white/50 transition-colors text-center"
                >
                  DOWNLOAD FOR MAC
                </DownloadButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="relative py-24">
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
                BROWSER
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white animate-pulse"></div>
                CODE
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white animate-pulse"></div>
                FILES
              </span>
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
                <div className="font-mono text-xs text-white/60 tracking-wider">01 — PROACTIVE ASSISTANT</div>
                <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                  Spots Tasks and Handles Them For You
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Omi listens to your conversations and automatically captures action items. Need to send an invoice? It's already on your list—and Omi can handle it, too.
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
                  Knows Your Life, Helps Before You Ask
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Omi remembers your relationships, your preferences, your history. It proactively surfaces the right advice at the right time—no prompting needed.
                </p>
              </div>
              <div className="md:col-span-3 relative overflow-hidden rounded-lg border-2 border-white/10 hover:border-white/20 transition-colors order-1 md:order-2">
                <img
                  src="/images/contextual-advice.png"
                  alt="Omi giving proactive contextual advice"
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
                  alt="Omi reminding you to get back to work"
                  className="w-full"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div className="font-mono text-xs text-white/60 tracking-wider">03 — FOCUS & PRODUCTIVITY</div>
                <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                  Keeps You on Track, Handles the Rest
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Watching YouTube when you should be working? Omi gently reminds you to get back on track. And when you're focused, it handles the busywork—browsing, coding, and organizing files.
                </p>
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
