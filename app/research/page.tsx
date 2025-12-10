'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { mockTopics } from '@/data/mockTopics';
import { TagCategory, FilterOptions, Topic } from '@/types';
import TagFilter from '@/components/TagFilter';
import TopicList from '@/components/TopicList';
import TopicDetail from '@/components/TopicDetail';
import SearchBar from '@/components/SearchBar';

export default function ResearchPage() {
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
      {/* Navigation */}
      <nav className="glass-effect-strong sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-3xl">🔬</span>
              <span className="gradient-text">Galileo Research</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/research"
                className="px-4 py-2 rounded-lg text-white bg-orange-500/30 transition-all font-semibold"
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
        </div>
      </nav>

      {/* Header */}
      <header className="glass-effect border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span className="gradient-text">Galileo Research Tool</span>
              </h1>
              <p className="text-purple-100 text-lg">
                Finde bildstarke, relevante Themen für die nächste Sendung
              </p>
            </div>
            <div className="text-right glass-effect rounded-xl p-4 border border-orange-500/30">
              <div className="text-4xl font-bold gradient-text">
                {filteredAndSortedTopics.length}
              </div>
              <div className="text-sm text-purple-100 font-semibold">Themen gefunden</div>
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

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/10 mt-16">
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
