import { ArrowRight, Bot, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-600 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-600 blur-3xl" />
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/20 ring-1 ring-indigo-500/40">
            <Bot className="h-5 w-5 text-indigo-400" />
          </div>
          <span className="text-xl font-semibold tracking-tight">ObiSynd</span>
        </div>
        <div className="hidden gap-6 text-sm/6 md:flex">
          <a href="#features" className="text-slate-300 hover:text-white">Fonctionnalités</a>
          <a href="#how" className="text-slate-300 hover:text-white">Comment ça marche</a>
          <a href="#cta" className="text-slate-300 hover:text-white">Essayer</a>
        </div>
        <a href="#cta" className="hidden md:inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/15">
          Demander une démo
          <ArrowRight className="h-4 w-4" />
        </a>
      </nav>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:pb-32 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/20">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">
              <Building2 className="h-3.5 w-3.5" />
            </span>
            Automatisation IA pour syndics de copropriété en France
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Gagnez des heures par semaine sur la gestion de votre copropriété
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            ObiSynd est une plateforme SaaS qui automatise les tâches du syndic:
            traitement des tickets, assemblées générales, relances, appels de
            fonds et communication — propulsée par l'IA.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500">
              Commencer gratuitement
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15">
              Voir les fonctionnalités
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
