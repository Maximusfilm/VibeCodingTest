'use client';

import { Topic, TagCategory } from '@/types';

interface TopicDetailProps {
  topic: Topic;
  onBack: () => void;
}

const tagColors: Record<TagCategory, string> = {
  [TagCategory.BILDSTARK]: 'bg-pink-500/80',
  [TagCategory.GESELLSCHAFTLICH_RELEVANT]: 'bg-green-500/80',
  [TagCategory.AKTUELL]: 'bg-red-500/80',
  [TagCategory.WISSENSCHAFT]: 'bg-blue-500/80',
  [TagCategory.ENTERTAINMENT]: 'bg-yellow-500/80',
  [TagCategory.TECHNOLOGIE]: 'bg-purple-500/80',
  [TagCategory.UMWELT]: 'bg-teal-500/80',
  [TagCategory.FOOD]: 'bg-orange-500/80',
  [TagCategory.MYSTERY]: 'bg-indigo-500/80',
  [TagCategory.INTERNATIONAL]: 'bg-cyan-500/80',
};

const tagIcons: Record<TagCategory, string> = {
  [TagCategory.BILDSTARK]: '📸',
  [TagCategory.GESELLSCHAFTLICH_RELEVANT]: '🌍',
  [TagCategory.AKTUELL]: '🔥',
  [TagCategory.WISSENSCHAFT]: '🔬',
  [TagCategory.ENTERTAINMENT]: '🎬',
  [TagCategory.TECHNOLOGIE]: '💻',
  [TagCategory.UMWELT]: '🌱',
  [TagCategory.FOOD]: '🍔',
  [TagCategory.MYSTERY]: '🔮',
  [TagCategory.INTERNATIONAL]: '✈️',
};

const sourceTypeIcons = {
  'Studie': '📊',
  'Artikel': '📰',
  'Video': '🎥',
  'Interview': '🎤',
  'Pressemitteilung': '📢',
};

export default function TopicDetail({ topic, onBack }: TopicDetailProps) {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-lg transition-all flex items-center gap-2 border border-white/20"
      >
        ← Zurück zur Übersicht
      </button>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600/50 to-pink-600/50 p-8 border-b border-white/20">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl font-bold text-white flex-1">{topic.title}</h1>
            <div className="flex-shrink-0 ml-4">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">{topic.tags.length}</span>
                <span className="text-xs text-white">Tags</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {topic.tags.map((tag) => (
              <span
                key={tag}
                className={`px-4 py-2 rounded-full text-sm font-medium text-white ${tagColors[tag]}`}
              >
                <span className="mr-2">{tagIcons[tag]}</span>
                {tag}
              </span>
            ))}
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span>🎬</span>
              <span>Storyline: {topic.storyline.duration} Minuten</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎯</span>
              <span>{topic.storyline.acts.length} Akte</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📚</span>
              <span>{topic.sources.length} Quellen</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{new Date(topic.createdAt).toLocaleDateString('de-DE')}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Zusammenfassung */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              📝 Zusammenfassung
            </h2>
            <p className="text-purple-100 text-lg leading-relaxed">
              {topic.summary}
            </p>
          </section>

          {/* Relevanz */}
          <section className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              🎯 Warum ist das Thema relevant?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              {topic.relevance}
            </p>
          </section>

          {/* Visuelle Umsetzung */}
          <section className="bg-pink-500/20 border border-pink-400/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              🎨 Kreative visuelle Umsetzung
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Konzept</h3>
              <p className="text-pink-100 leading-relaxed">
                {topic.visualConcept.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Locations */}
              {topic.visualConcept.locations && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    📍 Drehorte
                  </h3>
                  <ul className="space-y-2">
                    {topic.visualConcept.locations.map((location, idx) => (
                      <li key={idx} className="text-pink-100 flex items-start gap-2">
                        <span className="text-pink-300 mt-1">•</span>
                        <span>{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Equipment */}
              {topic.visualConcept.requiredEquipment && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    🎥 Benötigtes Equipment
                  </h3>
                  <ul className="space-y-2">
                    {topic.visualConcept.requiredEquipment.map((equipment, idx) => (
                      <li key={idx} className="text-pink-100 flex items-start gap-2">
                        <span className="text-pink-300 mt-1">•</span>
                        <span>{equipment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Budget */}
            {topic.visualConcept.estimatedBudget && (
              <div className="mt-6 bg-white/10 rounded-lg p-4">
                <span className="text-white font-semibold">💰 Geschätztes Budget: </span>
                <span className="text-pink-200">{topic.visualConcept.estimatedBudget}</span>
              </div>
            )}

            {/* Visual Highlights */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                ✨ Visuelle Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {topic.visualConcept.visualHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-lg p-4 flex items-start gap-3 hover:bg-white/20 transition-colors"
                  >
                    <span className="text-2xl">🎬</span>
                    <span className="text-pink-100">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Storyline */}
          <section className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              🎬 Storyline ({topic.storyline.duration} Minuten)
            </h2>

            {/* Hook */}
            <div className="mb-6 bg-white/10 rounded-lg p-4 border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                🪝 Einstieg/Hook
              </h3>
              <p className="text-purple-100 italic">"{topic.storyline.hook}"</p>
            </div>

            {/* Acts */}
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Akte</h3>
              {topic.storyline.acts.map((act, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 rounded-lg p-5 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{act.title}</h4>
                        <span className="text-purple-300 text-sm">{act.durationMinutes} Min.</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-purple-100 mb-3">{act.description}</p>

                  {act.visualElements.length > 0 && (
                    <div>
                      <p className="text-sm text-purple-300 font-medium mb-2">Visuelle Elemente:</p>
                      <div className="flex flex-wrap gap-2">
                        {act.visualElements.map((element, elemIdx) => (
                          <span
                            key={elemIdx}
                            className="px-3 py-1 bg-purple-600/40 rounded-full text-xs text-white"
                          >
                            {element}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="bg-white/10 rounded-lg p-4 border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                🎯 Fazit/Schluss
              </h3>
              <p className="text-purple-100 italic">"{topic.storyline.conclusion}"</p>
            </div>
          </section>

          {/* Quellen */}
          <section className="bg-green-500/20 border border-green-400/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              📚 Quellen (Journalistische Seriosität)
            </h2>
            <div className="space-y-4">
              {topic.sources.map((source, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{sourceTypeIcons[source.type]}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{source.title}</h3>
                        <span className="px-3 py-1 bg-green-600/40 rounded-full text-xs text-white whitespace-nowrap ml-2">
                          {source.type}
                        </span>
                      </div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-300 hover:text-green-200 text-sm break-all transition-colors"
                      >
                        🔗 {source.url}
                      </a>
                      {source.publishDate && (
                        <div className="text-green-200 text-sm mt-2">
                          📅 Veröffentlicht: {source.publishDate}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
