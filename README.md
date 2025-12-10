# Galileo Research Tool 🔬📺

Eine moderne **Website** für Redakteure des deutschen TV-Magazins **Galileo**, um neue, bildstarke und relevante Beitragsthemen zu finden.

**🌐 Live Website:** [galileo-research.vercel.app](https://galileo-research.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/VibeCodingTest)

## 🎯 Projektbeschreibung

Das Galileo Research Tool unterstützt junge Fernsehredakteure dabei, innovative Beitragsthemen zu entdecken, die:
- 📸 **Bildstark** sind und visuell überzeugen
- 🌍 **Gesellschaftlich relevant** sind
- 🔥 **Aktuell** und im Trend liegen
- 🔬 **Wissenschaftlich** fundiert sind
- 🎬 Unterhaltungswert haben

## ✨ Hauptfunktionen

### Must-Haves ✅

1. **Klare Aufzählung und Struktur**
   - Übersichtliche Darstellung aller Themen
   - Sortierung nach Anzahl der zutreffenden Schlagwörter
   - Klare Visualisierung der Ranking-Logik

2. **Zusammenfassung & Relevanz**
   - Kompakte Zusammenfassung jedes Themas
   - Detaillierte Erklärung, warum das Thema relevant ist
   - Zielgruppengerechte Aufbereitung

3. **Kreative visuelle Umsetzung**
   - Konzept für die visuelle Gestaltung
   - Liste der Drehorte
   - Benötigtes Equipment
   - Budget-Schätzung
   - Visuelle Highlights und besondere Aufnahmen

4. **Journalistische Seriosität**
   - Vollständige Quellenangaben
   - Verschiedene Quellentypen (Studien, Artikel, Videos, etc.)
   - Veröffentlichungsdaten
   - Direkte Links zu Quellen

5. **Storyline-Entwurf (5-20 Minuten)**
   - Strukturierte Akte mit Zeitangaben
   - Hook/Einstieg für den Beitrag
   - Beschreibung der einzelnen Akte
   - Visuelle Elemente pro Akt
   - Fazit/Schluss

### Features 🚀

- **🏷️ Schlagwörter-Filter**: 10 verschiedene Kategorien
  - 📸 Bildstark
  - 🌍 Gesellschaftlich Relevant
  - 🔥 Gerade aktuell
  - 🔬 Wissenschaft
  - 🎬 Entertainment
  - 💻 Technologie
  - 🌱 Umwelt & Natur
  - 🍔 Food & Lifestyle
  - 🔮 Mystery & Ungewöhnlich
  - ✈️ International

- **🔍 Intelligente Suche**: Durchsuche Titel, Zusammenfassung und Relevanz

- **📊 Smart Sorting**:
  - Automatische Sortierung nach Anzahl der Schlagwörter
  - Bei aktiven Filtern: Priorisierung nach Übereinstimmung
  - Klare Anzeige der Sortierlogik

- **🎨 Galileo-inspiriertes Design**:
  - Moderne, motivierende Benutzeroberfläche
  - Farbenfrohe, klare Visualisierung
  - Responsive Design für alle Geräte

- **✅ Filter "Nur neue Themen"**:
  - Zeige nur Themen, die noch nicht im Fernsehen liefen

## 🚀 Schnellstart

### Als Website nutzen 🌐

Die einfachste Methode ist, die **Live-Website** zu besuchen:

**→ [galileo-research.vercel.app](https://galileo-research.vercel.app)**

Die Website ist öffentlich zugänglich und sofort einsatzbereit!

### Lokal entwickeln 💻

Wenn du das Projekt lokal ausführen oder anpassen möchtest:

#### Voraussetzungen

- Node.js (Version 18+)
- npm oder yarn

#### Installation

```bash
# Repository klonen
git clone <repository-url>
cd VibeCodingTest

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Anwendung läuft dann auf [http://localhost:3000](http://localhost:3000)

#### Weitere Befehle

```bash
# Production Build erstellen
npm run build

# Production Server starten
npm start

# Linting
npm run lint
```

## 🌐 Deployment

Das Projekt ist für **Vercel** optimiert und kann mit einem Klick deployed werden:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/VibeCodingTest)

**Detaillierte Deployment-Anleitung:** Siehe [DEPLOYMENT.md](./DEPLOYMENT.md)

### Deployment-Optionen:
- ✅ **Vercel** (empfohlen) - automatisches Deployment bei jedem Push
- Netlify - Alternative zu Vercel
- Docker - containerisierte Bereitstellung
- VPS/Server - für eigene Server

## 📁 Projektstruktur

```
galileo-research-tool/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout mit SEO
│   ├── page.tsx           # Landing Page
│   ├── globals.css        # Globale Styles
│   ├── manifest.ts        # PWA Manifest
│   ├── research/          # Research Tool Seite
│   │   └── page.tsx
│   └── about/             # About Seite
│       └── page.tsx
├── components/            # React Komponenten
│   ├── SearchBar.tsx      # Suchleiste
│   ├── TagFilter.tsx      # Schlagwörter-Filter
│   ├── TopicList.tsx      # Themen-Liste
│   ├── TopicCard.tsx      # Themen-Karte
│   └── TopicDetail.tsx    # Detail-Ansicht
├── data/                  # Daten
│   └── mockTopics.ts      # 6 Beispiel-Themen
├── types/                 # TypeScript Typen
│   └── index.ts           # Typ-Definitionen
├── public/                # Statische Assets
│   └── robots.txt         # SEO
├── vercel.json            # Vercel-Konfiguration
├── DEPLOYMENT.md          # Deployment-Anleitung
└── README.md             # Diese Datei
```

### Website-Struktur

Die Website besteht aus drei Hauptseiten:

1. **Landing Page** (`/`) - Hero-Section, Features, Call-to-Action
2. **Research Tool** (`/research`) - Das eigentliche Recherchetool
3. **About** (`/about`) - Informationen über das Tool

## 🎨 Design-System

### Farben

- **Galileo Purple**: `#7B1FA2` - Hauptfarbe
- **Galileo Blue**: `#0288D1` - Akzentfarbe
- **Galileo Green**: `#00C853` - Erfolg/Umwelt
- **Galileo Orange**: `#FF6F00` - Aufmerksamkeit

### Schlagwörter-Farben

Jedes Schlagwort hat eine eigene Farbe für bessere Unterscheidbarkeit:
- 📸 Bildstark → Pink
- 🌍 Gesellschaftlich Relevant → Grün
- 🔥 Gerade aktuell → Rot
- 🔬 Wissenschaft → Blau
- 🎬 Entertainment → Gelb
- 💻 Technologie → Lila
- 🌱 Umwelt → Türkis
- 🍔 Food → Orange
- 🔮 Mystery → Indigo
- ✈️ International → Cyan

## 📝 Datenmodell

### Topic (Thema)

```typescript
interface Topic {
  id: string;
  title: string;
  tags: TagCategory[];
  summary: string;
  relevance: string;
  visualConcept: VisualConcept;
  sources: Source[];
  storyline: Storyline;
  createdAt: Date;
  alreadyAired?: boolean;
}
```

### Storyline

```typescript
interface Storyline {
  duration: number; // in Minuten (5-20)
  acts: StorylineAct[];
  hook: string;
  conclusion: string;
}
```

Siehe `types/index.ts` für vollständige Typ-Definitionen.

## 🔧 Anpassung & Erweiterung

### Neue Themen hinzufügen

Bearbeite die Datei `data/mockTopics.ts` und füge neue Themen zum Array hinzu:

```typescript
export const mockTopics: Topic[] = [
  // ... bestehende Themen
  {
    id: '7',
    title: 'Dein neues Thema',
    tags: [TagCategory.WISSENSCHAFT, TagCategory.BILDSTARK],
    // ... weitere Felder
  }
];
```

### Neue Schlagwörter hinzufügen

1. Füge das neue Schlagwort zu `types/index.ts` hinzu:
```typescript
export enum TagCategory {
  // ... bestehende Tags
  NEUES_TAG = "Neuer Tag-Name"
}
```

2. Füge Farbe und Icon in den Komponenten hinzu (`TagFilter.tsx`, `TopicCard.tsx`, `TopicDetail.tsx`)

### Backend-Integration

Das Tool verwendet derzeit Mock-Daten. Für eine Backend-Integration:

1. Erstelle API-Routes in `app/api/`
2. Ersetze `mockTopics` mit API-Calls
3. Implementiere Datenbank-Anbindung (z.B. MongoDB, PostgreSQL)

## 🎯 Verwendung

### 1. Themen entdecken

- Durchsuche alle verfügbaren Themen
- Nutze Filter, um relevante Themen zu finden
- Sortierung erfolgt automatisch nach Relevanz

### 2. Filtern

- Wähle Schlagwörter aus, die dich interessieren
- Kombiniere mehrere Schlagwörter
- Aktiviere "Nur neue Themen" für ungenutzte Ideen

### 3. Details ansehen

- Klicke auf ein Thema für die vollständige Ansicht
- Sieh dir die komplette Storyline an
- Prüfe Quellen und visuelle Umsetzungsideen
- Erhalte Budget- und Equipment-Informationen

## 📊 Beispiel-Themen

Das Tool enthält 6 vorgefertigte Beispiel-Themen:

1. **Vertikale Farmen in der Großstadt** (6 Tags)
2. **E-Fuel Tankstellen** (5 Tags)
3. **Urbane Seilbahnen** (5 Tags)
4. **Insekten-Burger** (4 Tags)
5. **Digital Detox Camps** (3 Tags)
6. **Unterwasser-Datacenter** (4 Tags)

## 🤝 Beitragen

Verbesserungsvorschläge sind willkommen!

## 📄 Lizenz

ISC

## 👥 Zielgruppe

- Junge Redakteure aus dem TV-Bereich
- Recherche-Teams bei Galileo
- Content-Creator für Wissenschafts-Formate

## 🎬 Technologie-Stack

- **Framework**: Next.js 15 (React 19)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready

---

Entwickelt für das **Galileo TV-Magazin** 📺✨
