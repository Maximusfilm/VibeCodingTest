'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
      {/* Navigation */}
      <nav className="glass-effect-strong sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-3xl">🔬</span>
                <span className="gradient-text">Galileo Research</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  href="/research"
                  className="px-4 py-2 rounded-lg text-white hover:bg-orange-500/20 transition-all font-semibold"
                >
                  Research Tool
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-2 rounded-lg text-white hover:bg-orange-500/20 transition-all font-semibold"
                >
                  Über das Tool
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 text-2xl"
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/research"
                className="block px-3 py-2 rounded-md text-white hover:bg-orange-500/20 transition-all font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Research Tool
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-white hover:bg-orange-500/20 transition-all font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Über das Tool
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-purple-800/90 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-20">
          <div className="text-center">
            <div className="mb-8 animate-float">
              <div className="inline-block relative">
                <span className="text-6xl md:text-8xl mb-4 inline-block glow-yellow">🔬</span>
                <div className="absolute inset-0 blur-xl bg-yellow-500/30 animate-pulse-slow"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              Galileo <span className="gradient-text">Research Tool</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-4 max-w-3xl mx-auto font-medium drop-shadow-lg">
              Das intelligente Recherchetool für bildstarke, relevante TV-Beitragsthemen
            </p>
            <p className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto drop-shadow-md">
              Finde innovative Themen für das Galileo TV-Magazin – sortiert nach Relevanz,
              mit vollständigen Storylines und journalistisch fundierten Quellen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/research"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-lg font-bold rounded-lg hover:from-orange-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-2xl hover-lift glow-orange"
              >
                Jetzt Themen entdecken →
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 glass-effect-strong text-white text-lg font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow">
          <div className="text-white/60 text-sm mb-2 text-center">Scroll für mehr</div>
          <div className="text-white/60 text-2xl">↓</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Warum das <span className="gradient-text">Galileo Research Tool</span>?
          </h2>
          <p className="text-xl text-purple-200 text-center mb-16 max-w-3xl mx-auto">
            Entdecke die Funktionen, die deine Recherche revolutionieren
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-effect rounded-xl p-8 hover-lift transition-all hover:glow-orange">
              <div className="text-5xl mb-4 animate-bounce-slow">🏷️</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                10 Schlagwörter-Kategorien
              </h3>
              <p className="text-purple-100">
                Von "Bildstark" über "Wissenschaft" bis "Entertainment" – filtere Themen nach den Kriterien, die für Galileo wichtig sind.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-effect rounded-xl p-8 hover-lift transition-all hover:glow-cyan">
              <div className="text-5xl mb-4 animate-bounce-slow">📊</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Intelligente Sortierung
              </h3>
              <p className="text-purple-100">
                Themen werden automatisch nach Relevanz sortiert – die mit den meisten zutreffenden Schlagwörtern erscheinen zuerst.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-effect rounded-xl p-8 hover-lift transition-all hover:glow-pink">
              <div className="text-5xl mb-4 animate-bounce-slow">🎬</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Komplette Storylines
              </h3>
              <p className="text-purple-100">
                Jedes Thema kommt mit einem durchdachten Storyline-Entwurf (5-20 Min.) – vom Hook bis zum Fazit.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-effect rounded-xl p-8 hover-lift transition-all hover:glow-yellow">
              <div className="text-5xl mb-4 animate-bounce-slow">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Visuelle Umsetzungskonzepte
              </h3>
              <p className="text-purple-100">
                Kreative Ideen für die visuelle Gestaltung inklusive Drehorte, Equipment-Liste und Budget-Schätzung.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="glass-effect rounded-xl p-8 hover-lift transition-all hover:glow-orange">
              <div className="text-5xl mb-4 animate-bounce-slow">📚</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Journalistische Quellen
              </h3>
              <p className="text-purple-100">
                Alle Themen sind mit seriösen Quellen belegt – Studien, Artikel, Interviews und mehr.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="glass-effect rounded-xl p-8 hover-lift transition-all hover:glow-cyan">
              <div className="text-5xl mb-4 animate-bounce-slow">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Leistungsstarke Suche
              </h3>
              <p className="text-purple-100">
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
            {/* Vertikale Farmen */}
            <div className="group relative overflow-hidden rounded-xl border border-white/20 hover-lift transition-all duration-300">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-purple-900/90 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80"
                  alt="Vertikale Farm"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="relative z-20 p-6 h-64 flex flex-col justify-end">
                <div className="text-4xl mb-3 animate-float">🌱</div>
                <h3 className="text-xl font-bold text-white mb-2">Vertikale Farmen</h3>
                <p className="text-purple-100 text-sm mb-3">
                  Landwirtschaft der Zukunft in der Großstadt
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-pink-500/80 rounded-full text-xs text-white font-semibold">📸 Bildstark</span>
                  <span className="px-2 py-1 bg-blue-500/80 rounded-full text-xs text-white font-semibold">🔬 Wissenschaft</span>
                </div>
              </div>
            </div>

            {/* Urbane Seilbahnen */}
            <div className="group relative overflow-hidden rounded-xl border border-white/20 hover-lift transition-all duration-300">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900/90 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
                  alt="Urbane Seilbahn"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="relative z-20 p-6 h-64 flex flex-col justify-end">
                <div className="text-4xl mb-3 animate-float">🚡</div>
                <h3 className="text-xl font-bold text-white mb-2">Urbane Seilbahnen</h3>
                <p className="text-purple-100 text-sm mb-3">
                  Stau-frei über der Stadt schweben
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-pink-500/80 rounded-full text-xs text-white font-semibold">📸 Bildstark</span>
                  <span className="px-2 py-1 bg-green-500/80 rounded-full text-xs text-white font-semibold">🌍 Relevant</span>
                </div>
              </div>
            </div>

            {/* Unterwasser-Datacenter */}
            <div className="group relative overflow-hidden rounded-xl border border-white/20 hover-lift transition-all duration-300">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/50 to-indigo-900/90 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                  alt="Unterwasser Technologie"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="relative z-20 p-6 h-64 flex flex-col justify-end">
                <div className="text-4xl mb-3 animate-float">🌊</div>
                <h3 className="text-xl font-bold text-white mb-2">Unterwasser-Datacenter</h3>
                <p className="text-purple-100 text-sm mb-3">
                  Server am Meeresgrund für nachhaltige Kühlung
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-pink-500/80 rounded-full text-xs text-white font-semibold">📸 Bildstark</span>
                  <span className="px-2 py-1 bg-purple-500/80 rounded-full text-xs text-white font-semibold">💻 Tech</span>
                </div>
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
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-pink-600/90 to-purple-600/90 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team Working"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="text-6xl mb-6 animate-float">🚀</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
            Bereit für deine nächste Story?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg font-medium">
            Starte jetzt mit der Recherche und finde das perfekte Thema für deinen nächsten Galileo-Beitrag.
          </p>
          <Link
            href="/research"
            className="inline-block px-10 py-5 bg-white text-orange-600 text-xl font-bold rounded-lg hover:bg-orange-50 transition-all transform hover:scale-105 shadow-2xl glow-yellow hover-lift"
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
