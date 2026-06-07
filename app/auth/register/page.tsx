import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-gold-600">Carré d&apos;Or</Link>
          <h1 className="text-xl font-semibold text-gray-900 mt-4">Créer un compte</h1>
          <p className="text-gray-500 text-sm mt-1">Gratuit, sans engagement</p>
        </div>

        {/* Choix du type de compte */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="border-2 border-gold-400 bg-gold-50 rounded-xl p-4 text-center cursor-pointer">
            <div className="text-2xl mb-1">👤</div>
            <div className="font-semibold text-gold-700 text-sm">Je cherche un emploi</div>
          </button>
          <button className="border-2 border-gray-200 rounded-xl p-4 text-center cursor-pointer hover:border-gold-300">
            <div className="text-2xl mb-1">🏢</div>
            <div className="font-semibold text-gray-600 text-sm">Je recrute</div>
          </button>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
              <input
                type="text"
                placeholder="Marie"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-gold-400 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input
                type="text"
                placeholder="Dupont"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-gold-400 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="votre@email.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-gold-400 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input
              type="password"
              placeholder="8 caractères minimum"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-gold-400 text-sm"
            />
          </div>

          <button type="submit" className="btn-primary w-full text-center">
            Créer mon compte gratuit
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          En vous inscrivant, vous acceptez nos{" "}
          <Link href="/legal/cgu" className="underline">CGU</Link> et notre{" "}
          <Link href="/legal/rgpd" className="underline">politique de confidentialité</Link>
        </p>

        <p className="text-center text-sm text-gray-500 mt-4">
          Déjà un compte ?{" "}
          <Link href="/auth/login" className="text-gold-600 font-medium hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </main>
  );
}
