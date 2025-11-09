import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} ObiSynd — Automatisation IA pour syndics de
          copropriété en France.
        </p>
      </footer>
    </div>
  );
}

export default App;
