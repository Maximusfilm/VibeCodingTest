'use client';

import { Topic, TagCategory } from '@/types';

interface TopicCardProps {
  topic: Topic;
  rank: number;
  selectedTags: TagCategory[];
  onClick: () => void;
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

export default function TopicCard({
  topic,
  rank,
  selectedTags,
  onClick,
}: TopicCardProps) {
  const matchingTags = selectedTags.length > 0
    ? topic.tags.filter(tag => selectedTags.includes(tag)).length
    : topic.tags.length;

  return (
    <div
      onClick={onClick}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all cursor-pointer hover:scale-[1.02] hover:shadow-2xl group"
    >
      <div className="flex gap-6">
        {/* Rang-Anzeige */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-3xl font-bold text-white">#{rank}</span>
          </div>
          <div className="text-center mt-2">
            <div className="text-2xl font-bold text-white">{topic.tags.length}</div>
            <div className="text-xs text-purple-200">Tags</div>
          </div>
        </div>

        {/* Hauptinhalt */}
        <div className="flex-1 min-w-0">
          {/* Titel */}
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
            {topic.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {topic.tags.map((tag) => {
              const isMatching = selectedTags.includes(tag);
              return (
                <span
                  key={tag}
                  className={`
                    px-3 py-1 rounded-full text-xs font-medium text-white
                    ${isMatching ? tagColors[tag] + ' ring-2 ring-white' : 'bg-white/20'}
                  `}
                >
                  <span className="mr-1">{tagIcons[tag]}</span>
                  {tag}
                </span>
              );
            })}
          </div>

          {/* Zusammenfassung */}
          <p className="text-purple-100 mb-4 line-clamp-3">
            {topic.summary}
          </p>

          {/* Relevanz-Snippet */}
          <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3 mb-4">
            <p className="text-sm text-white font-medium mb-1">Warum relevant?</p>
            <p className="text-sm text-blue-100 line-clamp-2">{topic.relevance}</p>
          </div>

          {/* Visuelle Highlights */}
          <div className="bg-pink-500/20 border border-pink-400/30 rounded-lg p-3 mb-4">
            <p className="text-sm text-white font-medium mb-2">📸 Visuelle Highlights</p>
            <div className="text-sm text-pink-100">
              {topic.visualConcept.visualHighlights.slice(0, 2).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 mb-1">
                  <span className="text-pink-300">•</span>
                  <span>{highlight}</span>
                </div>
              ))}
              {topic.visualConcept.visualHighlights.length > 2 && (
                <span className="text-pink-300 text-xs">
                  +{topic.visualConcept.visualHighlights.length - 2} weitere
                </span>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-purple-200">
              <span>🎬 {topic.storyline.duration} Min.</span>
              <span>📚 {topic.sources.length} Quellen</span>
              <span>🎯 {topic.storyline.acts.length} Akte</span>
            </div>
            <div className="text-white font-medium group-hover:text-purple-200 transition-colors">
              Details anzeigen →
            </div>
          </div>

          {/* Matching-Indikator */}
          {selectedTags.length > 0 && (
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="text-sm text-purple-200">
                ✓ {matchingTags} von {selectedTags.length} ausgewählten Tags treffen zu
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
