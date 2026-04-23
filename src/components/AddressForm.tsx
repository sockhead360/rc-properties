"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, Lock, MapPin } from "lucide-react";

interface Suggestion {
  place_id: number;
  display_name: string;
  address: {
    house_number?: string;
    road?: string;
    city?: string;
    town?: string;
    county?: string;
    state?: string;
    postcode?: string;
  };
}

function formatSuggestion(s: Suggestion): string {
  const a = s.address;
  const street = [a.house_number, a.road].filter(Boolean).join(" ");
  const city = a.city || a.town || a.county || "";
  const state = a.state || "";
  const zip = a.postcode || "";
  if (street && city && state) {
    return `${street}, ${city}, ${state}${zip ? " " + zip : ""}`;
  }
  // fallback: trim the full display_name to something readable
  return s.display_name.split(", ").slice(0, 4).join(", ");
}

export default function AddressForm() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const router = useRouter();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const fetchSuggestions = useCallback(async (value: string) => {
    if (value.trim().length < 3) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    // Cancel any in-flight request
    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    setLoading(true);
    try {
      // Bias toward NC using viewbox (Charlotte region) — bounded=0 so it shows
      // results outside NC too if nothing local matches
      const params = new URLSearchParams({
        format: "json",
        q: value,
        countrycodes: "us",
        addressdetails: "1",
        limit: "6",
        viewbox: "-84.32,36.59,-75.46,33.84", // NC state bounding box
        bounded: "0",
      });

      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?${params}`,
        {
          signal: abortRef.current.signal,
          headers: { "Accept-Language": "en-US" },
        }
      );

      if (!res.ok) return;
      const data: Suggestion[] = await res.json();
      setSuggestions(data);
      setOpen(data.length > 0);
      setActiveIndex(-1);
    } catch (err: unknown) {
      if (err instanceof Error && err.name !== "AbortError") {
        setSuggestions([]);
        setOpen(false);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(value), 320);
  }

  function selectSuggestion(s: Suggestion) {
    const formatted = formatSuggestion(s);
    setQuery(formatted);
    setSuggestions([]);
    setOpen(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      selectSuggestion(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setOpen(false);
    const params = new URLSearchParams({ address: query.trim() });
    router.push(`/contact?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div ref={containerRef} className="relative">
        {/* Input bar */}
        <div className="flex flex-col sm:flex-row gap-2 bg-white rounded-xl shadow-lg p-2">
          <div className="flex items-center gap-2 flex-1 px-3">
            {loading ? (
              <Loader2 size={18} className="text-gray-400 flex-shrink-0 animate-spin" />
            ) : (
              <MapPin size={18} className="text-gray-400 flex-shrink-0" />
            )}
            <input
              type="text"
              value={query}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={() => suggestions.length > 0 && setOpen(true)}
              placeholder="Enter your property address"
              autoComplete="off"
              className="flex-1 text-gray-800 placeholder-gray-400 text-sm sm:text-base outline-none py-3 bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base"
          >
            Get My Cash Offer
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Autocomplete dropdown */}
        {open && suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
            {suggestions.map((s, i) => {
              const label = formatSuggestion(s);
              return (
                <li key={s.place_id}>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault(); // keep form from blurring
                      selectSuggestion(s);
                    }}
                    className={`w-full flex items-start gap-3 px-4 py-3 text-left text-sm transition-colors ${
                      i === activeIndex
                        ? "bg-sky-light text-navy"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <MapPin size={14} className="text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{label}</span>
                  </button>
                </li>
              );
            })}
            <li className="px-4 py-2 border-t border-gray-100">
              <span className="text-xs text-gray-400">
                Powered by OpenStreetMap
              </span>
            </li>
          </ul>
        )}
      </div>

      <div className="flex items-center justify-center gap-4 mt-3 text-xs text-gray-300">
        <span className="flex items-center gap-1.5">
          <Lock size={13} fill="currentColor" />
          100% Private
        </span>
        <span>•</span>
        <span>No Obligation</span>
        <span>•</span>
        <span>Takes 30 Seconds</span>
      </div>
    </form>
  );
}
