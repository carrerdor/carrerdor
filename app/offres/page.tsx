import Link from "next/link";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 60;

export default async function OffresPage() {
  const supabase = await createClient();

  const { data: offres } = await supabase
    .from("offres")
    .select(`*, entreprises(nom, pays, secteur)`)
    .eq("active", true)
    .order("created_at", { ascending: false });

  const liste = offres ?? [];

  return (
    <main className="min-h-screen bg-gray-50">

      <nav className="border-b bg-white px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gold-600">Carré d&apos;Or</Link>
          <Link href="/auth/login" className="text-sm text-gray-600 hover:text-gold-600">Connexion</Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Offres d&apos;emploi</h1>
        <p className="text-gray-500 mb-8">{liste.length} offre{liste.length > 1 ? "s" : ""} disponible{liste.length > 1 ? "s" : ""}</p>

        <div className="grid lg:grid-cols-4 gap-6">

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-20">
              <h2 className="font-semibold text-gray-900 mb-4">Filtres</h2>
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Pays</label>
                  <div className="space-y-2">
                    {["UAE", "Qatar", "Arabie Saoudite", "Bahreïn"].map((p) => (
                      <label key={p} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="checkbox" className="accent-gold-600" />
                        {p}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Type de contrat</label>
                  <div className="space-y-2">
                    {["CDI", "CDD", "Freelance", "Stage"].map((t) => (
                      <label key={t} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="checkbox" className="accent-gold-600" />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Secteur</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 outline-none">
                    <option value="">Tous les secteurs</option>
                    <option>Finance</option>
                    <option>Aviation</option>
                    <option>Hôtellerie</option>
                    <option>Luxe & Retail</option>
                  </select>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3 space-y-4">
            {liste.length === 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-10 text-center text-gray-400">
                Aucune offre disponible pour le moment.
              </div>
            )}
            {liste.map((offre) => (
              <Link
                key={offre.id}
                href={`/offres/${offre.id}`}
                className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4 hover:border-gold-300 hover:shadow-sm transition-all block"
              >
                <span className="text-3xl shrink-0 mt-1">🏢</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="font-semibold text-gray-900">{offre.titre}</h2>
                      <p className="text-sm text-gray-500">{offre.entreprises?.nom}</p>
                    </div>
                    {offre.salaire_min && (
                      <span className="text-sm font-semibold text-gold-600 shrink-0">
                        {offre.salaire_min.toLocaleString()} – {offre.salaire_max?.toLocaleString()} {offre.devise}/mois
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><MapPin size={12} />{offre.ville}, {offre.pays}</span>
                    <span className="flex items-center gap-1"><Briefcase size={12} />{offre.type_contrat}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{offre.secteur}</span>
                    {offre.remote && (
                      <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">
                        Télétravail
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
