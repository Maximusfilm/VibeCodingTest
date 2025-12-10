// Schlagwörter-Kategorien für Galileo
export enum TagCategory {
  BILDSTARK = "Bildstark",
  GESELLSCHAFTLICH_RELEVANT = "Gesellschaftlich Relevant",
  AKTUELL = "Gerade aktuell",
  WISSENSCHAFT = "Wissenschaft",
  ENTERTAINMENT = "Entertainment",
  TECHNOLOGIE = "Technologie",
  UMWELT = "Umwelt & Natur",
  FOOD = "Food & Lifestyle",
  MYSTERY = "Mystery & Ungewöhnlich",
  INTERNATIONAL = "International"
}

// Quelle für journalistische Seriosität
export interface Source {
  title: string;
  url: string;
  type: 'Studie' | 'Artikel' | 'Video' | 'Interview' | 'Pressemitteilung';
  publishDate?: string;
}

// Visuelle Umsetzungsidee
export interface VisualConcept {
  description: string;
  locations?: string[];
  requiredEquipment?: string[];
  estimatedBudget?: string;
  visualHighlights: string[];
}

// Storyline-Struktur für 5-20 Minuten Beitrag
export interface Storyline {
  duration: number; // in Minuten
  acts: StorylineAct[];
  hook: string; // Einstieg/Hook für den Beitrag
  conclusion: string; // Fazit/Schluss
}

export interface StorylineAct {
  title: string;
  durationMinutes: number;
  description: string;
  visualElements: string[];
}

// Hauptdatenstruktur für ein Thema
export interface Topic {
  id: string;
  title: string;
  tags: TagCategory[];
  summary: string;
  relevance: string;
  visualConcept: VisualConcept;
  sources: Source[];
  storyline: Storyline;
  createdAt: Date;
  alreadyAired?: boolean; // Wurde das Thema bereits bei Galileo gezeigt?
}

// Filter-Optionen
export interface FilterOptions {
  selectedTags: TagCategory[];
  searchQuery: string;
  minTagCount?: number;
  onlyNew: boolean; // Nur Themen die noch nicht liefen
}
