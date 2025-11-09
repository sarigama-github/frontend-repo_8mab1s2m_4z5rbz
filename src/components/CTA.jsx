import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple client-side confirmation
    alert(`Merci ! Nous reviendrons vers vous rapidement: ${email}`);
    setEmail("");
  };

  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-600 py-20 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute -top-10 left-10 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-white/10 p-8 ring-1 ring-white/20 backdrop-blur">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Prêt à moderniser votre syndic ?</h2>
            <p className="mt-3 text-white/80">Rejoignez la liste d'attente pour une démo personnalisée d'ObiSynd.</p>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md gap-3">
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Votre email professionnel"
                className="w-full rounded-md border border-white/20 bg-white/10 px-10 py-3 text-white placeholder-white/60 outline-none ring-0 focus:border-white/40"
              />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              Demander une démo
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
