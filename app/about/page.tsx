'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-white">
              Galileo Research
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/research"
                className="px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-colors"
              >
                Research Tool
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 rounded-lg text-white bg-white/20 transition-colors"
              >
                Über das Tool
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-12 border border-white/20">
          <h1 className="text-5xl font-bold text-white mb-8">
            Über das Galileo Research Tool
          </h1>

          <div className="space-y-8 text-purple-100">
            {/* Beschreibung */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Was ist das?</h2>
              <p className="text-lg leading-relaxed mb-4">
                Das Galileo Research Tool ist ein innovatives Recherchetool, das speziell für Redakteure
                des deutschen TV-Magazins <strong>Galileo</strong> entwickelt wurde. Es unterstützt junge
                TV-Journalisten dabei, neue, bildstarke und gesellschaftlich relevante Beitragsthemen zu finden,
                die noch nicht im Fernsehen gelaufen sind.
              </p>
              <p className="text-lg leading-relaxed">
                Mit einem intelligenten Schlagwörter-System und einer klaren Strukturierung werden Themen
                präsentiert, die perfekt zur DNA von Galileo passen: visuell beeindruckend, wissenschaftlich
                fundiert, aktuell und unterhaltsam.
              </p>
            </section>

            {/* Zielgruppe */}
            <section className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Für wen ist das Tool?</h2>
              <p className="text-lg leading-relaxed">
                Das Tool richtet sich an <strong>junge Redakteure aus dem TV-Bereich</strong>, die
                auf der Suche nach innovativen Inhalten sind. Die übersichtliche und motivierende
                Benutzeroberfläche macht die Recherche effizient und inspirierend.
              </p>
            </section>

            {/* Must-Haves */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Must-Haves jedes Themas</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">📝 Zusammenfassung</h3>
                  <p>Kompakte Übersicht über das Thema und warum es relevant ist.</p>
                </div>
                <div className="bg-pink-500/20 border border-pink-400/30 rounded-lg p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">🎨 Visuelle Umsetzung</h3>
                  <p>Kreative Konzepte, Drehorte, Equipment und Budget-Schätzungen.</p>
                </div>
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">📚 Quellen</h3>
                  <p>Journalistische Seriosität durch Studien, Artikel und Interviews.</p>
                </div>
                <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">🎬 Storyline</h3>
                  <p>Kompletter Entwurf (5-20 Min.) mit Akten, Hook und Fazit.</p>
                </div>
              </div>
            </section>

            {/* Schlagwörter */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">10 Schlagwörter-Kategorien</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <div className="bg-pink-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">📸</div>
                  <div className="text-sm font-medium">Bildstark</div>
                </div>
                <div className="bg-green-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🌍</div>
                  <div className="text-sm font-medium">Gesellschaftlich Relevant</div>
                </div>
                <div className="bg-red-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🔥</div>
                  <div className="text-sm font-medium">Gerade aktuell</div>
                </div>
                <div className="bg-blue-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🔬</div>
                  <div className="text-sm font-medium">Wissenschaft</div>
                </div>
                <div className="bg-yellow-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🎬</div>
                  <div className="text-sm font-medium">Entertainment</div>
                </div>
                <div className="bg-purple-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">💻</div>
                  <div className="text-sm font-medium">Technologie</div>
                </div>
                <div className="bg-teal-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🌱</div>
                  <div className="text-sm font-medium">Umwelt & Natur</div>
                </div>
                <div className="bg-orange-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🍔</div>
                  <div className="text-sm font-medium">Food & Lifestyle</div>
                </div>
                <div className="bg-indigo-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🔮</div>
                  <div className="text-sm font-medium">Mystery & Ungewöhnlich</div>
                </div>
                <div className="bg-cyan-500/30 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">✈️</div>
                  <div className="text-sm font-medium">International</div>
                </div>
              </div>
            </section>

            {/* Funktionen */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Hauptfunktionen</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <strong className="text-white">Intelligente Sortierung:</strong> Themen mit den meisten
                    zutreffenden Schlagwörtern erscheinen zuerst
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <strong className="text-white">Leistungsstarke Suche:</strong> Durchsuche Titel,
                    Zusammenfassungen und Relevanz-Beschreibungen
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <strong className="text-white">Filter "Nur neue Themen":</strong> Zeige nur Themen,
                    die noch nicht im TV gelaufen sind
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <strong className="text-white">Detailansicht:</strong> Alle wichtigen Informationen
                    auf einen Blick – von Quellen bis Storyline
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <strong className="text-white">Responsive Design:</strong> Funktioniert perfekt auf
                    Desktop, Tablet und Smartphone
                  </div>
                </li>
              </ul>
            </section>

            {/* Technologie */}
            <section className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Technologie</h2>
              <p className="mb-4">
                Das Tool wurde mit modernen Web-Technologien entwickelt:
              </p>
              <ul className="space-y-2">
                <li>• <strong>Next.js 15</strong> - React Framework für optimale Performance</li>
                <li>• <strong>TypeScript</strong> - Type-Safety für stabilen Code</li>
                <li>• <strong>Tailwind CSS</strong> - Modernes, responsives Design</li>
                <li>• <strong>Vercel</strong> - Deployment und Hosting</li>
              </ul>
            </section>

            {/* CTA */}
            <section className="text-center pt-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Bereit loszulegen?
              </h2>
              <Link
                href="/research"
                className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-2xl"
              >
                Zum Research Tool →
              </Link>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-purple-300 text-sm">
              © 2024 Galileo Research Tool. Entwickelt für das Galileo TV-Magazin.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
