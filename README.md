# Carré d'Or — Job Board Golfe Francophone

Plateforme emploi dédiée aux francophones cherchant un poste à Dubaï, Qatar et dans le Golfe.

## Structure du projet

```
carredor/
├── src/
│   ├── app/              ← Pages du site
│   │   ├── page.tsx      ← Page d'accueil
│   │   ├── offres/       ← Liste et détail des offres
│   │   ├── auth/         ← Connexion et inscription
│   │   ├── candidat/     ← Espace candidat (à venir)
│   │   ├── recruteur/    ← Espace recruteur (à venir)
│   │   └── admin/        ← Back-office (à venir)
│   ├── components/       ← Composants réutilisables
│   └── lib/
│       └── supabase/     ← Connexion base de données
├── .env.local            ← Variables secrètes (JAMAIS sur GitHub)
└── vercel.json           ← Configuration déploiement
```

## Démarrage

1. Configurer `.env.local` avec tes clés Supabase et Stripe
2. Pousser sur GitHub
3. Connecter à Vercel → déploiement automatique
