import { CheckCircle2, FileText, Inbox, Send, Settings } from "lucide-react";

const steps = [
  {
    title: "Connectez vos données",
    desc: "Importez vos immeubles, lots, contacts et documents. Connexion possible à votre logiciel existant.",
    icon: Settings,
  },
  {
    title: "Centralisez les demandes",
    desc: "Emails, formulaires et messages arrivent au même endroit et sont classés automatiquement.",
    icon: Inbox,
  },
  {
    title: "Automatisez les tâches",
    desc: "Génération d'AG, relances, devis et suivis. L'IA propose, vous validez.",
    icon: FileText,
  },
  {
    title: "Communiquez efficacement",
    desc: "Réponses assistées et notifications ciblées pour chaque copropriétaire.",
    icon: Send,
  },
  {
    title: "Mesurez l'impact",
    desc: "Tableaux de bord: délais de traitement, satisfaction et économies de temps.",
    icon: CheckCircle2,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Comment ça marche</h2>
          <p className="mt-3 text-slate-600">En quelques étapes simples, passez au syndic augmenté par l'IA.</p>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ title, desc, icon: Icon }, idx) => (
            <li key={title} className="relative rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <div className="absolute right-4 top-4 text-sm font-semibold text-slate-400">{idx + 1}</div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
