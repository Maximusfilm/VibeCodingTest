'use client';

import { TagCategory } from '@/types';

interface TagFilterProps {
  selectedTags: TagCategory[];
  onTagToggle: (tag: TagCategory) => void;
  onClearAll: () => void;
}

const tagColors: Record<TagCategory, string> = {
  [TagCategory.BILDSTARK]: 'bg-pink-500 hover:bg-pink-600',
  [TagCategory.GESELLSCHAFTLICH_RELEVANT]: 'bg-green-500 hover:bg-green-600',
  [TagCategory.AKTUELL]: 'bg-red-500 hover:bg-red-600',
  [TagCategory.WISSENSCHAFT]: 'bg-blue-500 hover:bg-blue-600',
  [TagCategory.ENTERTAINMENT]: 'bg-yellow-500 hover:bg-yellow-600',
  [TagCategory.TECHNOLOGIE]: 'bg-purple-500 hover:bg-purple-600',
  [TagCategory.UMWELT]: 'bg-teal-500 hover:bg-teal-600',
  [TagCategory.FOOD]: 'bg-orange-500 hover:bg-orange-600',
  [TagCategory.MYSTERY]: 'bg-indigo-500 hover:bg-indigo-600',
  [TagCategory.INTERNATIONAL]: 'bg-cyan-500 hover:bg-cyan-600',
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

export default function TagFilter({
  selectedTags,
  onTagToggle,
  onClearAll,
}: TagFilterProps) {
  const allTags = Object.values(TagCategory);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Schlagwörter-Filter</h2>
        {selectedTags.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-sm text-purple-200 hover:text-white transition-colors"
          >
            Alle entfernen ({selectedTags.length})
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={`
                px-4 py-2 rounded-full font-medium transition-all transform
                ${isSelected
                  ? `${tagColors[tag]} text-white scale-105 shadow-lg`
                  : 'bg-white/20 text-white hover:bg-white/30'
                }
              `}
            >
              <span className="mr-2">{tagIcons[tag]}</span>
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
