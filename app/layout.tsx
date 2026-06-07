import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carré d'Or — Emploi dans le Golfe pour francophones",
  description:
    "Trouvez votre prochain emploi à Dubaï, Abu Dhabi, Qatar ou en Arabie Saoudite. La plateforme emploi dédiée aux candidats francophones dans le Golfe.",
  keywords: "emploi dubai, travail golfe, offres emploi UAE, francophone dubai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
