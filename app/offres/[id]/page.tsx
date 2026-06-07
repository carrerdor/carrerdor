import Link from "next/link";
import { MapPin, Briefcase, Clock, Building, ArrowLeft } from "lucide-react";

export default function OffreDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-gray-50">

      <nav className="border-b bg-white px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gold-600">Carré d&apos;Or</Link>
          <Link href="/auth/login" className="text-sm text-gray-600 hover:text-gold-600">Connexion</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Link href="/offres" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold-600 mb-6">
          <ArrowLeft size={16} /> Retour aux offres
        </Link>

        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">🏢</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Directeur Commercial</h1>
              <p className="text-gray-500 mt-1">Emirates Group</p>
              <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-500">
                <span className="flex items-center gap-1"><MapPin size={14} />Dubaï, UAE</span>
                <span className="flex items-center gap-1"><Briefcase size={14} />CDI</span>
                <span className="flex items-center gap-1"><Building size={14} />Commerce & Vente</span>
                <span className="flex items-center gap-1"><Clock size={14} />Publié il y a 2 jours</span>
              </div>
            </div>
          </div>

          <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 mb-6">
            <div className="text-lg font-bold text-gold-700">25 000 – 35 000 AED/mois</div>
            <div className="text-sm text-gold-600">≈ 6 200 – 8 700 €/mois (exonéré d&apos;impôt)</div>
          </div>

          <Link href="/auth/register" className="btn-primary w-full text-center block text-lg py-4">
            Postuler maintenant
          </Link>
          <p className="text-center text-sm text-gray-400 mt-2">
            Créez un compte gratuit pour postuler en 2 minutes
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Description du poste</h2>
          <div className="prose text-gray-600 space-y-4 text-sm leading-relaxed">
            <p>
              Emirates Group recherche un <strong>Directeur Commercial</strong> expérimenté pour
              rejoindre son équipe à Dubaï. Ce poste stratégique implique la gestion d&apos;une
              équipe de 15 commerciaux et le développement du portefeuille clients B2B.
            </p>
            <h3 className="font-semibold text-gray-800">Responsabilités principales</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Définir et exécuter la stratégie commerciale</li>
              <li>Manager et animer une équipe de commerciaux</li>
              <li>Développer les partenariats stratégiques</li>
              <li>Atteindre les objectifs de croissance fixés</li>
            </ul>
            <h3 className="font-semibold text-gray-800">Profil recherché</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>5+ ans d&apos;expérience en direction commerciale</li>
              <li>Français natif, anglais courant (arabe apprécié)</li>
              <li>Expérience internationale souhaitée</li>
            </ul>
            <h3 className="font-semibold text-gray-800">Avantages</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Salaire exonéré d&apos;impôt sur le revenu</li>
              <li>Logement fourni ou indemnité logement</li>
              <li>Billet d&apos;avion annuel en classe affaires</li>
              <li>Assurance santé famille complète</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
