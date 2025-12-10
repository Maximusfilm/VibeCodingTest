import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Galileo Research Tool',
    short_name: 'Galileo Research',
    description: 'Das intelligente Recherchetool für bildstarke, relevante TV-Beitragsthemen',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1a2e',
    theme_color: '#7B1FA2',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
