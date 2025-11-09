import { CalendarCheck, Mail, MessageSquare, ShieldCheck, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "AG sans friction",
    desc: "Générez l'ordre du jour, les convocations et les PV automatiquement. Gestion des votes et émargements simplifiée.",
  },
  {
    icon: MessageSquare,
    title: "Tickets intelligents",
    desc: "Classement auto des demandes, réponses assistées par IA et priorisation selon l'urgence.",
  },
  {
    icon: Users,
    title: "Copropriétaires ravis",
    desc: "Portail moderne pour suivre interventions, documents, décisions et échanges." ,
  },
  {
    icon: Mail,
    title: "Relances automatiques",
    desc: "Relances d'impayés et rappels d'échéance personnalisés, multicanal.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité RGPD",
    desc: "Sécurité et traçabilité intégrées, hébergement en UE.",
  },
  {
    icon: Sparkles,
    title: "Assistants IA",
    desc: "Rédaction de comptes rendus, synthèses et réponses en un clic.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tout ce qu'il faut pour gérer vos copropriétés
          </h2>
          <p className="mt-3 text-slate-600">
            Réduisez les tâches répétitives, améliorez la communication et concentrez-vous sur la valeur ajoutée.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
