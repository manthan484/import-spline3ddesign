"use client";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">SplineX</h1>
          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <a className="hover:text-white">Products</a>
            <a className="hover:text-white">Community</a>
            <a className="hover:text-white">Showcase</a>
            <a className="hover:text-white">Pricing</a>
          </nav>
          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
            Get Started
          </button>
        </div>
      </header>

      {/* ================= HERO (FULL BAR) ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-32 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
            A complete platform for <br />
            <span className="text-white/60">
              real-time interactive 3D design
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Build immersive web experiences using Spline 3D and Next.js.
            Perfect for hackathons, startups, and portfolios.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-4 text-black font-semibold hover:scale-105 transition">
              Start Creating
            </button>
            <button className="rounded-full border border-white/30 px-8 py-4 text-white hover:bg-white/10 transition">
              View Showcase
            </button>
          </div>
        </div>
      </section>

      {/* ================= 3D SHOWCASE ================= */}
      <section className="relative h-[80vh] border-t border-white/10 border-b border-white/10">
        <spline-viewer
          url="https://prod.spline.design/XYlmk0ZdchAWNPek/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></spline-viewer>
      </section>

      {/* ================= FEATURE GRID ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="rounded-2xl bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">Interactive Websites</h3>
            <p className="text-white/60">
              Create mouse, hover, and scroll-based 3D interactions with ease.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">Product Design</h3>
            <p className="text-white/60">
              Design real-time 3D interfaces that feel alive and modern.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">Hackathon Ready</h3>
            <p className="text-white/60">
              Impress judges with visually stunning, interactive projects.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 text-center text-white/40 text-sm">
        © 2026 SplineX. Built with Spline & Next.js.
      </footer>

    </main>
  );
}
