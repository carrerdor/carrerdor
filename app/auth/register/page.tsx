"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const [role, setRole] = useState<"candidat" | "recruteur">("candidat");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { prenom, nom, role },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
    }
  }

  if (success) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-md text-center">
          <div className="text-5xl mb-4">📧</div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Vérifie ta boîte mail !</h1>
          <p className="text-gray-500 text-sm">
            On t&apos;a envoyé un lien de confirmation à <strong>{email}</strong>.
            Clique dessus pour activer ton compte.
          </p>
          <Link href="/" className="btn-primary inline-block mt-6">
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-gold-600">Carré d&apos;Or</Link>
          <h1 className="text-xl font-semibold text-gray-900 mt-4">Créer un compte</h1>
          <p className="text-gray-500 text-sm mt-1">Gratuit, sans engagement</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button type="button" onClick={() => setRole("candidat")}
            className={`border-2 rounded-xl p-4 text-center cursor-pointer transition-colors ${role === "candidat" ? "border-gold-400 bg-gold-50" : "border-gray-200 hover:border-gold-300"}`}>
            <div className="text-2xl mb-1">👤</div>
            <div className={`font-semibold text-sm ${role === "candidat" ? "text-gold-700" : "text-gray-600"}`}>Je cherche un emploi</div>
          </button>
          <button type="button" onClick={() => setRole("recruteur")}
            className={`border-2 rounded-xl p-4 text-center cursor-pointer transition-colors ${role === "recruteur" ? "border-gold-400 bg-gold-50" : "border-gray-200 hover:border-gold-300"}`}>
            <div className="text-2xl mb-1">🏢</div>
            <div className={`font-semibold text-sm ${role === "recruteur" ? "text-gold-700" : "text-gray-600"}`}>Je recrute</div>
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
              <input type="text" placeholder="Marie" value={prenom} onChange={(e) => setPrenom(e.target.value)} required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-gold-400 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input type="text" placeholder="Dupont" value={nom} onChange={(e) => setNom(e.target.value)} required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-gold-400 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-gold-400 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input type="password" placeholder="8 caractères minimum" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-gold-400 text-sm" />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full text-center disabled:opacity-60">
            {loading ? "Création..." : "Créer mon compte gratuit"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Déjà un compte ?{" "}
          <Link href="/auth/login" className="text-gold-600 font-medium hover:underline">Se connecter</Link>
        </p>
      </div>
    </main>
  );
}
