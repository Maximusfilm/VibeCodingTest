'use client';

import { useState, useMemo } from 'react';
import { mockTopics } from '@/data/mockTopics';
import { TagCategory, FilterOptions, Topic } from '@/types';
import TagFilter from '@/components/TagFilter';
import TopicList from '@/components/TopicList';
import TopicDetail from '@/components/TopicDetail';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [filters, setFilters] = useState<FilterOptions>({
    selectedTags: [],
    searchQuery: '',
    onlyNew: true,
  });

  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  // Filtern und Sortieren der Themen
  const filteredAndSortedTopics = useMemo(() => {
    let topics = [...mockTopics];

    // Filter: Nur neue Themen
    if (filters.onlyNew) {
      topics = topics.filter(topic => !topic.alreadyAired);
    }

    // Filter: Suchtext
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      topics = topics.filter(topic =>
        topic.title.toLowerCase().includes(query) ||
        topic.summary.toLowerCase().includes(query) ||
        topic.relevance.toLowerCase().includes(query)
      );
    }

    // Filter: Tags
    if (filters.selectedTags.length > 0) {
      topics = topics.filter(topic =>
        filters.selectedTags.some(selectedTag => topic.tags.includes(selectedTag))
      );
    }

    // Sortieren: Nach Anzahl der Schlagwörter (höchste zuerst)
    topics.sort((a, b) => {
      // Bei ausgewählten Tags: Priorität nach Übereinstimmung
      if (filters.selectedTags.length > 0) {
        const aMatches = a.tags.filter(tag => filters.selectedTags.includes(tag)).length;
        const bMatches = b.tags.filter(tag => filters.selectedTags.includes(tag)).length;
        if (aMatches !== bMatches) {
          return bMatches - aMatches;
        }
      }
      // Ansonsten: Nach Gesamtzahl der Tags
      return b.tags.length - a.tags.length;
    });

    return topics;
  }, [filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Galileo Research Tool
              </h1>
              <p className="text-purple-200">
                Finde bildstarke, relevante Themen für die nächste Sendung
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">
                {filteredAndSortedTopics.length}
              </div>
              <div className="text-sm text-purple-200">Themen gefunden</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Suchleiste */}
        <div className="mb-6">
          <SearchBar
            searchQuery={filters.searchQuery}
            onSearchChange={(query) => setFilters({ ...filters, searchQuery: query })}
            onlyNew={filters.onlyNew}
            onOnlyNewChange={(onlyNew) => setFilters({ ...filters, onlyNew })}
          />
        </div>

        {/* Tag-Filter */}
        <div className="mb-8">
          <TagFilter
            selectedTags={filters.selectedTags}
            onTagToggle={(tag) => {
              const newTags = filters.selectedTags.includes(tag)
                ? filters.selectedTags.filter(t => t !== tag)
                : [...filters.selectedTags, tag];
              setFilters({ ...filters, selectedTags: newTags });
            }}
            onClearAll={() => setFilters({ ...filters, selectedTags: [] })}
          />
        </div>

        {/* Themen-Liste oder Detail-Ansicht */}
        {selectedTopic ? (
          <TopicDetail
            topic={selectedTopic}
            onBack={() => setSelectedTopic(null)}
          />
        ) : (
          <>
            {/* Info-Box zur Sortierung */}
            {filteredAndSortedTopics.length > 0 && (
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4 mb-6">
                <p className="text-white text-sm">
                  ℹ️ <strong>Sortierung:</strong> Themen werden nach Anzahl der Schlagwörter sortiert.
                  {filters.selectedTags.length > 0 && (
                    <span> Themen mit mehr übereinstimmenden Filtern erscheinen weiter oben.</span>
                  )}
                </p>
              </div>
            )}

            <TopicList
              topics={filteredAndSortedTopics}
              selectedTags={filters.selectedTags}
              onTopicClick={setSelectedTopic}
            />

            {filteredAndSortedTopics.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Keine Themen gefunden
                </h3>
                <p className="text-purple-200">
                  Versuche andere Suchbegriffe oder Filter
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
