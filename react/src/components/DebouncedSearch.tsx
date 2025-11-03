import { useState, useMemo } from "react";
import { useDebounce } from "../hooks/useDebounce"

const items = ["React", "Angular", "Vue", "Svelte", "Solid"];

export default function SearchList() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  // Filter only runs when debouncedQuery changes (not on every keystroke)
  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Debounced Search</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
