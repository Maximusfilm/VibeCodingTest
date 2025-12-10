import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Galileo Research Tool - Innovative TV-Beitragsthemen entdecken',
    template: '%s | Galileo Research Tool'
  },
  description: 'Das intelligente Recherchetool für bildstarke, relevante TV-Beitragsthemen. Finde innovative Themen für das Galileo TV-Magazin – sortiert nach Relevanz, mit vollständigen Storylines und journalistisch fundierten Quellen.',
  keywords: ['Galileo', 'TV-Magazin', 'Recherchetool', 'Beitragsthemen', 'Wissenschaft', 'Journalismus', 'Fernsehen', 'ProSieben'],
  authors: [{ name: 'Galileo Research Tool Team' }],
  creator: 'Galileo Research Tool',
  publisher: 'Galileo Research Tool',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Galileo Research Tool - Innovative TV-Beitragsthemen entdecken',
    description: 'Das intelligente Recherchetool für bildstarke, relevante TV-Beitragsthemen',
    siteName: 'Galileo Research Tool',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galileo Research Tool',
    description: 'Das intelligente Recherchetool für bildstarke TV-Beitragsthemen',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
