import Link from "next/link";
import { MapPin, Briefcase, Users, TrendingUp, Star, ArrowRight } from "lucide-react";

const PAYS = [
  { nom: "🇦🇪 Dubaï / UAE",      offres: 142 },
  { nom: "🇶🇦 Qatar",            offres: 87  },
  { nom: "🇸🇦 Arabie Saoudite",  offres: 63  },
  { nom: "🇧🇭 Bahreïn",          offres: 24  },
];

const SECTEURS = [
  "Finance & Banque", "Hôtellerie & Tourisme", "Tech & Digital",
  "Commerce & Vente", "BTP & Ingénierie", "Santé",
  "Éducation", "Luxe & Retail",
];

const OFFRES_VEDETTES = [
  {
    id: "1",
    titre: "Directeur Commercial",
    entreprise: "Emirates Group",
    lieu: "Dubaï, UAE",
    salaire: "25 000 – 35 000 AED/mois",
    type: "CDI",
    secteur: "Commerce & Vente",
    logo: "🏢",
    premium: true,
  },
  {
    id: "2",
    titre: "Chef de Projet Digital",
    entreprise: "Ooredoo",
    lieu: "Doha, Qatar",
    salaire: "18 000 – 22 000 QAR/mois",
    type: "CDI",
    secteur: "Tech & Digital",
    logo: "💻",
    premium: false,
  },
  {
    id: "3",
    titre: "Responsable Hôtel F/H",
    entreprise: "Accor Hotels",
    lieu: "Abu Dhabi, UAE",
    salaire: "Non communiqué",
    type: "CDI",
    secteur: "Hôtellerie",
    logo: "🏨",
    premium: false,
  },
];

const TEMOIGNAGES = [
  {
    nom: "Sophie M.",
    poste: "Responsable Marketing — Dubaï",
    texte: "Grâce à Carré d'Or, j'ai trouvé mon poste en 3 semaines. Les offres sont vérifiées et les recruteurs répondent vraiment.",
    note: 5,
  },
  {
    nom: "Karim B.",
    poste: "Ingénieur BTP — Abu Dhabi",
    texte: "La plateforme est parfaite pour les francophones. J'ai eu 4 entretiens en 2 semaines après mon inscription Premium.",
    note: 5,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVIGATION */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gold-600">Carré d&apos;Or</span>
            <span className="text-xs bg-gold-100 text-gold-700 px-2 py-0.5 rounded-full font-medium">
              Golfe Francophone
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/offres" className="hover:text-gold-600 transition-colors">Offres d&apos;emploi</Link>
            <Link href="/recruteur" className="hover:text-gold-600 transition-colors">Recruteurs</Link>
            <Link href="/auth/login" className="hover:text-gold-600 transition-colors">Connexion</Link>
            <Link href="/auth/register" className="btn-primary text-sm py-2 px-4">
              Créer un compte
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-gold-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold-600/20 border border-gold-500/30 rounded-full px-4 py-2 mb-6 text-gold-300 text-sm font-medium">
            <TrendingUp size={14} />
            +300 nouvelles offres ce mois
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Votre carrière dans le{" "}
            <span className="text-gold-400">Golfe</span>
            <br />commence ici
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            La seule plateforme emploi en <strong className="text-white">français</strong> dédiée
            aux opportunités à Dubaï, Qatar et en Arabie Saoudite.
          </p>

          {/* BARRE DE RECHERCHE */}
          <div className="bg-white rounded-2xl p-2 flex flex-col md:flex-row gap-2 max-w-2xl mx-auto shadow-2xl">
            <input
              type="text"
              placeholder="Poste, secteur ou mot-clé..."
              className="flex-1 px-4 py-3 text-gray-800 rounded-xl outline-none text-base"
            />
            <select className="px-4 py-3 text-gray-600 rounded-xl outline-none bg-gray-50 text-base">
              <option value="">Tous les pays</option>
              <option value="UAE">🇦🇪 UAE / Dubaï</option>
              <option value="Qatar">🇶🇦 Qatar</option>
              <option value="KSA">🇸🇦 Arabie Saoudite</option>
              <option value="Bahrain">🇧🇭 Bahreïn</option>
            </select>
            <Link href="/offres" className="btn-primary whitespace-nowrap text-center">
              Rechercher
            </Link>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
            {[
              { val: "316+",  label: "Offres actives"    },
              { val: "180+",  label: "Entreprises"       },
              { val: "2 400+",label: "Candidats inscrits"},
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-gold-400">{s.val}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Recherchez par pays
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PAYS.map((p) => (
              <Link
                key={p.nom}
                href={`/offres?pays=${encodeURIComponent(p.nom)}`}
                className="card text-center hover:border-gold-300 hover:shadow-gold-100 cursor-pointer group"
              >
                <div className="text-2xl mb-2">{p.nom.split(" ")[0]}</div>
                <div className="font-semibold text-gray-800 group-hover:text-gold-600">
                  {p.nom.split(" ").slice(1).join(" ")}
                </div>
                <div className="text-sm text-gray-400 mt-1">{p.offres} offres</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OFFRES VEDETTES */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Offres à la une</h2>
            <Link href="/offres" className="text-gold-600 hover:text-gold-700 font-medium flex items-center gap-1 text-sm">
              Voir toutes les offres <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {OFFRES_VEDETTES.map((offre) => (
              <Link key={offre.id} href={`/offres/${offre.id}`} className="card group cursor-pointer">
                {offre.premium && (
                  <span className="inline-flex items-center gap-1 bg-gold-100 text-gold-700 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                    <Star size={10} fill="currentColor" /> Premium
                  </span>
                )}
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{offre.logo}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-gold-600 transition-colors">
                      {offre.titre}
                    </h3>
                    <p className="text-sm text-gray-500">{offre.entreprise}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} /> {offre.lieu}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase size={14} /> {offre.type} · {offre.secteur}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 text-sm font-medium text-gold-600">
                  {offre.salaire}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Tous les secteurs</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SECTEURS.map((s) => (
              <Link
                key={s}
                href={`/offres?secteur=${encodeURIComponent(s)}`}
                className="bg-white border border-gray-200 hover:border-gold-400 hover:text-gold-700 text-gray-600 font-medium px-4 py-2 rounded-full transition-colors text-sm"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Pourquoi choisir Carré d&apos;Or ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🇫🇷",
                titre: "100% Francophone",
                desc: "Toutes les offres sont présentées en français. Notre équipe vérifie chaque annonce.",
              },
              {
                icon: "✅",
                titre: "Offres vérifiées",
                desc: "Chaque offre est validée manuellement. Pas de faux recruteurs, pas d'arnaque.",
              },
              {
                icon: "⚡",
                titre: "Alertes en temps réel",
                desc: "Recevez les nouvelles offres par email dès leur publication selon vos critères.",
              },
            ].map((item) => (
              <div key={item.titre} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12">Ils ont trouvé leur poste</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {TEMOIGNAGES.map((t) => (
              <div key={t.nom} className="bg-slate-800 rounded-xl p-6 text-left">
                <div className="flex text-gold-400 mb-3">
                  {Array.from({ length: t.note }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">&ldquo;{t.texte}&rdquo;</p>
                <div>
                  <div className="font-semibold text-white">{t.nom}</div>
                  <div className="text-gray-400 text-xs">{t.poste}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-gradient-to-r from-gold-600 to-gold-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer ?</h2>
          <p className="text-gold-100 mb-8 text-lg">
            Inscrivez-vous gratuitement et accédez à toutes les offres d&apos;emploi du Golfe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register" className="bg-white text-gold-700 font-bold px-8 py-4 rounded-xl hover:bg-gold-50 transition-colors">
              Créer mon compte gratuit
            </Link>
            <Link href="/offres" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              Voir les offres
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-bold text-xl mb-3">Carré d&apos;Or</div>
              <p className="text-sm leading-relaxed">
                La plateforme emploi pour les francophones dans le Golfe.
              </p>
            </div>
            {[
              {
                titre: "Candidats",
                liens: ["Offres d'emploi", "Mon compte", "Premium", "Alertes email"],
              },
              {
                titre: "Recruteurs",
                liens: ["Publier une offre", "Tarifs", "Espace recruteur"],
              },
              {
                titre: "Légal",
                liens: ["Mentions légales", "CGU", "Politique RGPD", "Contact"],
              },
            ].map((col) => (
              <div key={col.titre}>
                <div className="text-white font-semibold mb-3">{col.titre}</div>
                <ul className="space-y-2 text-sm">
                  {col.liens.map((lien) => (
                    <li key={lien}>
                      <Link href="#" className="hover:text-gold-400 transition-colors">
                        {lien}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-6 text-sm text-center">
            © {new Date().getFullYear()} Carré d&apos;Or — Tous droits réservés
          </div>
        </div>
      </footer>

    </main>
  );
}
