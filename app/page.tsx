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
                <span className="block text-white">AI That Does</span>
                <span className="block text-white italic">Real Work</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light border-l-2 border-white/20 pl-6">
                Browser automation, coding agent, and file system access—combined into one AI that actually gets things done on your computer.
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
                  alt="Omi automating browser tasks"
                  className="w-full"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div className="font-mono text-xs text-white/60 tracking-wider">01 — BROWSER AUTOMATION</div>
                <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                  Controls Your Browser, So You Don't Have To
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Omi navigates websites, fills forms, clicks buttons, and extracts data—all on its own. Anything you do in a browser, Omi can do for you.
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
                <div className="font-mono text-xs text-white/60 tracking-wider">02 — CODING AGENT</div>
                <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                  Writes, Edits, and Ships Your Code
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Omi reads your codebase, writes new features, fixes bugs, and refactors code. It understands your project and works within it like a real developer.
                </p>
              </div>
              <div className="md:col-span-3 relative overflow-hidden rounded-lg border-2 border-white/10 hover:border-white/20 transition-colors order-1 md:order-2">
                <img
                  src="/images/contextual-advice.png"
                  alt="Omi coding agent editing code"
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
                  alt="Omi file system access"
                  className="w-full"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div className="font-mono text-xs text-white/60 tracking-wider">03 — FILE SYSTEM</div>
                <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                  Full Access to Your Files
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Omi reads, writes, and organizes files on your computer. From editing documents to managing data, it works directly with your file system to get things done.
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
