'use client';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onlyNew: boolean;
  onOnlyNewChange: (onlyNew: boolean) => void;
}

export default function SearchBar({
  searchQuery,
  onSearchChange,
  onlyNew,
  onOnlyNewChange,
}: SearchBarProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Suche nach Themen, Stichwörtern..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-6 py-3 pl-12 bg-white/90 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/20 rounded-lg px-4 py-2">
          <input
            type="checkbox"
            id="onlyNew"
            checked={onlyNew}
            onChange={(e) => onOnlyNewChange(e.target.checked)}
            className="w-5 h-5 rounded accent-purple-500"
          />
          <label htmlFor="onlyNew" className="text-white cursor-pointer select-none">
            Nur neue Themen
          </label>
        </div>
      </div>
    </div>
  );
}
