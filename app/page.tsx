'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                Galileo Research
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  href="/research"
                  className="px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-colors"
                >
                  Research Tool
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-colors"
                >
                  Über das Tool
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/research"
                className="block px-3 py-2 rounded-md text-white hover:bg-white/20 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Research Tool
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-white hover:bg-white/20 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Über das Tool
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block text-6xl md:text-8xl mb-4">🔬</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Galileo Research Tool
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto">
              Das intelligente Recherchetool für bildstarke, relevante TV-Beitragsthemen
            </p>
            <p className="text-lg text-purple-300 mb-12 max-w-2xl mx-auto">
              Finde innovative Themen für das Galileo TV-Magazin – sortiert nach Relevanz,
              mit vollständigen Storylines und journalistisch fundierten Quellen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/research"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-2xl"
              >
                Jetzt Themen entdecken →
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Warum das Galileo Research Tool?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-5xl mb-4">🏷️</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                10 Schlagwörter-Kategorien
              </h3>
              <p className="text-purple-200">
                Von "Bildstark" über "Wissenschaft" bis "Entertainment" – filtere Themen nach den Kriterien, die für Galileo wichtig sind.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Intelligente Sortierung
              </h3>
              <p className="text-purple-200">
                Themen werden automatisch nach Relevanz sortiert – die mit den meisten zutreffenden Schlagwörtern erscheinen zuerst.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Komplette Storylines
              </h3>
              <p className="text-purple-200">
                Jedes Thema kommt mit einem durchdachten Storyline-Entwurf (5-20 Min.) – vom Hook bis zum Fazit.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Visuelle Umsetzungskonzepte
              </h3>
              <p className="text-purple-200">
                Kreative Ideen für die visuelle Gestaltung inklusive Drehorte, Equipment-Liste und Budget-Schätzung.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Journalistische Quellen
              </h3>
              <p className="text-purple-200">
                Alle Themen sind mit seriösen Quellen belegt – Studien, Artikel, Interviews und mehr.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Leistungsstarke Suche
              </h3>
              <p className="text-purple-200">
                Durchsuche alle Themen nach Stichwörtern und finde genau das, was du brauchst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Topics Teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Beispiel-Themen
          </h2>
          <p className="text-xl text-purple-200 text-center mb-12 max-w-3xl mx-auto">
            Entdecke innovative Beitragsideen von vertikalen Farmen bis zu Unterwasser-Rechenzentren
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="text-xl font-bold text-white mb-2">Vertikale Farmen</h3>
              <p className="text-purple-200 text-sm mb-3">
                Landwirtschaft der Zukunft in der Großstadt
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-pink-500/60 rounded-full text-xs text-white">📸 Bildstark</span>
                <span className="px-2 py-1 bg-blue-500/60 rounded-full text-xs text-white">🔬 Wissenschaft</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Urbane Seilbahnen</h3>
              <p className="text-purple-200 text-sm mb-3">
                Stau-frei über der Stadt schweben
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-pink-500/60 rounded-full text-xs text-white">📸 Bildstark</span>
                <span className="px-2 py-1 bg-green-500/60 rounded-full text-xs text-white">🌍 Relevant</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🌊</div>
              <h3 className="text-xl font-bold text-white mb-2">Unterwasser-Datacenter</h3>
              <p className="text-purple-200 text-sm mb-3">
                Server am Meeresgrund für nachhaltige Kühlung
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-pink-500/60 rounded-full text-xs text-white">📸 Bildstark</span>
                <span className="px-2 py-1 bg-purple-500/60 rounded-full text-xs text-white">💻 Tech</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/research"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-2xl"
            >
              Alle Themen entdecken →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/30 to-pink-600/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bereit für deine nächste Story?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Starte jetzt mit der Recherche und finde das perfekte Thema für deinen nächsten Galileo-Beitrag.
          </p>
          <Link
            href="/research"
            className="inline-block px-10 py-5 bg-white text-purple-600 text-xl font-bold rounded-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            Research Tool starten
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Galileo Research Tool</h3>
              <p className="text-purple-200 text-sm">
                Das intelligente Recherchetool für bildstarke TV-Beitragsthemen.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-purple-200 hover:text-white transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="text-purple-200 hover:text-white transition-colors text-sm">
                    Research Tool
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-purple-200 hover:text-white transition-colors text-sm">
                    Über das Tool
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Für Galileo Redakteure</h3>
              <p className="text-purple-200 text-sm">
                Entwickelt für junge TV-Redakteure, die innovative Inhalte suchen.
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-purple-300 text-sm">
              © 2024 Galileo Research Tool. Entwickelt für das Galileo TV-Magazin.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
