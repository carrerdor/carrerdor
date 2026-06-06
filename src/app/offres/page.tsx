import Link from "next/link";
import { MapPin, Briefcase, Clock, Star } from "lucide-react";

const OFFRES = [
  {
    id: "1",
    titre: "Directeur Commercial",
    entreprise: "Emirates Group",
    lieu: "Dubaï, UAE",
    salaire: "25 000 – 35 000 AED/mois",
    type: "CDI",
    secteur: "Commerce & Vente",
    pays: "UAE",
    teletravail: false,
    premium: true,
    publie: "Il y a 2 jours",
    logo: "🏢",
  },
  {
    id: "2",
    titre: "Chef de Projet Digital",
    entreprise: "Ooredoo",
    lieu: "Doha, Qatar",
    salaire: "18 000 – 22 000 QAR/mois",
    type: "CDI",
    secteur: "Tech & Digital",
    pays: "Qatar",
    teletravail: true,
    premium: false,
    publie: "Il y a 3 jours",
    logo: "💻",
  },
  {
    id: "3",
    titre: "Responsable Hôtel",
    entreprise: "Accor Hotels",
    lieu: "Abu Dhabi, UAE",
    salaire: "Non communiqué",
    type: "CDI",
    secteur: "Hôtellerie",
    pays: "UAE",
    teletravail: false,
    premium: false,
    publie: "Il y a 5 jours",
    logo: "🏨",
  },
  {
    id: "4",
    titre: "Analyste Financier",
    entreprise: "Qatar National Bank",
    lieu: "Doha, Qatar",
    salaire: "20 000 – 28 000 QAR/mois",
    type: "CDI",
    secteur: "Finance & Banque",
    pays: "Qatar",
    teletravail: false,
    premium: true,
    publie: "Il y a 1 jour",
    logo: "🏦",
  },
];

export default function OffresPage() {
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
        <p className="text-gray-500 mb-8">{OFFRES.length} offres disponibles</p>

        <div className="grid lg:grid-cols-4 gap-6">

          {/* FILTRES */}
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
                    <option>Finance & Banque</option>
                    <option>Tech & Digital</option>
                    <option>Hôtellerie</option>
                    <option>Commerce & Vente</option>
                  </select>
                </div>

                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="accent-gold-600" />
                  Télétravail uniquement
                </label>
              </div>
            </div>
          </aside>

          {/* LISTE DES OFFRES */}
          <div className="lg:col-span-3 space-y-4">
            {OFFRES.map((offre) => (
              <Link
                key={offre.id}
                href={`/offres/${offre.id}`}
                className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4 hover:border-gold-300 hover:shadow-sm transition-all block"
              >
                <span className="text-3xl shrink-0 mt-1">{offre.logo}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      {offre.premium && (
                        <span className="inline-flex items-center gap-1 bg-gold-100 text-gold-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-1">
                          <Star size={10} fill="currentColor" /> Premium
                        </span>
                      )}
                      <h2 className="font-semibold text-gray-900">{offre.titre}</h2>
                      <p className="text-sm text-gray-500">{offre.entreprise}</p>
                    </div>
                    <span className="text-sm font-semibold text-gold-600 shrink-0">{offre.salaire}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><MapPin size={12} />{offre.lieu}</span>
                    <span className="flex items-center gap-1"><Briefcase size={12} />{offre.type}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{offre.publie}</span>
                    {offre.teletravail && (
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
