import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Galileo Research Tool',
  description: 'Recherchetool für neue Beitragsthemen für das Galileo TV-Magazin',
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
