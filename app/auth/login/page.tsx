import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-gold-600">Carré d&apos;Or</Link>
          <h1 className="text-xl font-semibold text-gray-900 mt-4">Connexion</h1>
          <p className="text-gray-500 text-sm mt-1">Bon retour parmi nous</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="votre@email.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-gold-400 transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-gold-400 transition-colors text-sm"
            />
          </div>

          <button type="submit" className="btn-primary w-full text-center">
            Se connecter
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative text-center text-xs text-gray-400 bg-white px-3 mx-auto w-fit">
            ou
          </div>
        </div>

        <button className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <span>🇬</span> Continuer avec Google
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Pas encore de compte ?{" "}
          <Link href="/auth/register" className="text-gold-600 font-medium hover:underline">
            S&apos;inscrire gratuitement
          </Link>
        </p>
      </div>
    </main>
  );
}
