import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function CandidatPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const prenom = user.user_metadata?.prenom || "Candidat";
  const nom = user.user_metadata?.nom || "";

  const { data: candidatures } = await supabase
    .from("candidatures")
    .select(`*, offres(titre, pays, ville, entreprises(nom))`)
    .eq("candidat_id", user.id)
    .order("created_at", { ascending: false });

  async function handleLogout() {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white px-4 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gold-600">Carré d&apos;Or</Link>
          <form action={handleLogout}>
            <button type="submit" className="text-sm text-gray-500 hover:text-red-500 transition-colors">
              Se déconnecter
            </button>
          </form>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-10">

        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center text-2xl font-bold text-gold-700">
            {prenom[0]?.toUpperCase()}
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Bonjour, {prenom} {nom} 👋</h1>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <div className="text-3xl font-bold text-gold-600">{candidatures?.length ?? 0}</div>
            <div className="text-sm text-gray-500 mt-1">Candidatures envoyées</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <div className="text-3xl font-bold text-gold-600">0</div>
            <div className="text-sm text-gray-500 mt-1">Entretiens prévus</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <div className="text-3xl font-bold text-gold-600">0</div>
            <div className="text-sm text-gray-500 mt-1">Offres sauvegardées</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Link href="/offres" className="bg-gold-600 text-white rounded-xl p-5 hover:bg-gold-700 transition-colors">
            <div className="text-xl mb-1">🔍</div>
            <div className="font-semibold">Parcourir les offres</div>
            <div className="text-gold-200 text-sm mt-1">Voir toutes les opportunités</div>
          </Link>
          <div className="bg-white rounded-xl border border-gray-200 p-5 cursor-pointer hover:border-gold-300 transition-colors">
            <div className="text-xl mb-1">📄</div>
            <div className="font-semibold text-gray-900">Compléter mon profil</div>
            <div className="text-gray-400 text-sm mt-1">CV, expériences, compétences</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Mes candidatures</h2>
          {!candidatures || candidatures.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <div className="text-4xl mb-2">📭</div>
              <p>Tu n&apos;as pas encore postulé à une offre.</p>
              <Link href="/offres" className="text-gold-600 font-medium text-sm mt-2 inline-block hover:underline">
                Voir les offres disponibles →
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {candidatures.map((c) => (
                <div key={c.id} className="flex items-center justify-between border border-gray-100 rounded-lg p-4">
                  <div>
                    <div className="font-medium text-gray-900">{c.offres?.titre}</div>
                    <div className="text-sm text-gray-500">{c.offres?.entreprises?.nom} · {c.offres?.ville}, {c.offres?.pays}</div>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    c.statut === "envoyee" ? "bg-blue-50 text-blue-600" :
                    c.statut === "vue" ? "bg-yellow-50 text-yellow-600" :
                    c.statut === "retenue" ? "bg-green-50 text-green-600" :
                    "bg-red-50 text-red-600"
                  }`}>
                    {c.statut === "envoyee" ? "Envoyée" :
                     c.statut === "vue" ? "Vue" :
                     c.statut === "retenue" ? "Retenue" : "Refusée"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
