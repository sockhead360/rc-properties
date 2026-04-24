"use client";

import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, Lock, Mail, MapPin, Phone } from "lucide-react";

interface Suggestion {
  place_id: number;
  display_name: string;
  address?: {
    house_number?: string;
    road?: string;
    city?: string;
    town?: string;
    village?: string;
    county?: string;
    state?: string;
    postcode?: string;
  };
}

function formatSuggestion(suggestion: Suggestion) {
  const address = suggestion.address;

  if (!address) {
    return suggestion.display_name.split(", ").slice(0, 4).join(", ");
  }

  const street = [address.house_number, address.road].filter(Boolean).join(" ");
  const city =
    address.city || address.town || address.village || address.county || "";
  const state = address.state || "";
  const zip = address.postcode || "";

  if (street && city && state) {
    return `${street}, ${city}, ${state}${zip ? ` ${zip}` : ""}`;
  }

  return suggestion.display_name.split(", ").slice(0, 4).join(", ");
}

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string) {
  return normalizePhone(phone).length === 10;
}

export default function HomeAddressBar() {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const router = useRouter();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const addressBoxRef = useRef<HTMLDivElement>(null);

  const formIsValid =
    address.trim().length > 4 && isValidPhone(phone) && isValidEmail(email);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        addressBoxRef.current &&
        !addressBoxRef.current.contains(event.target as Node)
      ) {
        setSuggestionsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const fetchSuggestions = useCallback(async (value: string) => {
    const query = value.trim();

    if (query.length < 3) {
      setSuggestions([]);
      setSuggestionsOpen(false);
      return;
    }

    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;
    setLoadingSuggestions(true);

    try {
      const params = new URLSearchParams({
        format: "json",
        q: query,
        countrycodes: "us",
        addressdetails: "1",
        limit: "6",
        viewbox: "-84.32,36.59,-75.46,33.84",
        bounded: "0",
      });

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?${params.toString()}`,
        {
          signal: controller.signal,
          headers: { "Accept-Language": "en-US" },
        }
      );

      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as Suggestion[];
      setSuggestions(data);
      setSuggestionsOpen(data.length > 0);
      setActiveIndex(-1);
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        setSuggestions([]);
        setSuggestionsOpen(false);
      }
    } finally {
      setLoadingSuggestions(false);
    }
  }, []);

  function handleAddressChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setAddress(value);
    setSubmitError("");

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => fetchSuggestions(value), 300);
  }

  function selectSuggestion(suggestion: Suggestion) {
    setAddress(formatSuggestion(suggestion));
    setSuggestions([]);
    setSuggestionsOpen(false);
    setActiveIndex(-1);
  }

  function handleAddressKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!suggestionsOpen || suggestions.length === 0) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, suggestions.length - 1));
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      selectSuggestion(suggestions[activeIndex]);
    }

    if (event.key === "Escape") {
      setSuggestionsOpen(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");

    if (!formIsValid || submitting) {
      setSubmitError("Enter a property address, valid email, and 10-digit phone number.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: address.trim(),
          email: email.trim(),
          phone: normalizePhone(phone),
          phoneDisplay: phone.trim(),
          source: "cash-offer",
        }),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      router.push("/thank-you");
    } catch {
      setSubmitError(
        "We could not submit the form. Please call or text (410) 260-9157."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-[520px]">
      <form
        onSubmit={handleSubmit}
        className="rounded-[14px] bg-white p-4 shadow-[0_14px_32px_rgba(8,31,63,0.26)]"
      >
        <div className="grid gap-3">
          <div ref={addressBoxRef} className="relative">
            <label className="flex min-h-[58px] items-center gap-3 rounded-md border border-gray-200 bg-white px-3 sm:px-4">
              <span className="flex w-[82px] shrink-0 items-center justify-center sm:w-10">
                {loadingSuggestions ? (
                  <Loader2
                    size={26}
                    strokeWidth={2.2}
                    className="animate-spin text-rc-light-blue"
                  />
                ) : (
                  <MapPin
                    size={30}
                    strokeWidth={2.2}
                    className="text-rc-light-blue"
                  />
                )}
              </span>
              <span className="sr-only">Property address</span>
              <input
                value={address}
                onChange={handleAddressChange}
                onKeyDown={handleAddressKeyDown}
                onFocus={() => suggestions.length > 0 && setSuggestionsOpen(true)}
                type="text"
                autoComplete="street-address"
                placeholder="Enter your property address"
                required
                className="w-full bg-transparent text-left text-sm font-medium text-rc-text outline-none placeholder:text-rc-muted sm:text-base"
              />
            </label>

            {suggestionsOpen && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-lg border border-gray-200 bg-white text-left shadow-xl">
                {suggestions.map((suggestion, index) => (
                  <li key={suggestion.place_id}>
                    <button
                      type="button"
                      onMouseDown={(event) => {
                        event.preventDefault();
                        selectSuggestion(suggestion);
                      }}
                      className={`flex w-full items-start gap-3 px-4 py-3 text-left text-sm transition-colors ${
                        index === activeIndex
                          ? "bg-rc-soft-bg text-rc-navy"
                          : "text-rc-text hover:bg-rc-soft-bg"
                      }`}
                    >
                      <MapPin
                        size={16}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-rc-light-blue"
                      />
                      <span className="leading-snug">
                        {formatSuggestion(suggestion)}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex min-h-[54px] items-center gap-3 rounded-md border border-gray-200 bg-white px-3 sm:px-4">
            <Phone
              size={22}
              strokeWidth={2.2}
              className="shrink-0 text-rc-light-blue"
            />
            <span className="sr-only">Phone number</span>
            <input
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                setSubmitError("");
              }}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="Phone number"
              required
              className="w-full bg-transparent text-left text-sm font-medium text-rc-text outline-none placeholder:text-rc-muted sm:text-base"
            />
            </label>

            <label className="flex min-h-[54px] items-center gap-3 rounded-md border border-gray-200 bg-white px-3 sm:px-4">
            <Mail
              size={22}
              strokeWidth={2.2}
              className="shrink-0 text-rc-light-blue"
            />
            <span className="sr-only">Email address</span>
            <input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubmitError("");
              }}
              type="email"
              autoComplete="email"
              placeholder="Email address"
              required
              className="w-full bg-transparent text-left text-sm font-medium text-rc-text outline-none placeholder:text-rc-muted sm:text-base"
            />
            </label>
          </div>

          <button
            type="submit"
            disabled={!formIsValid || submitting}
            className="flex min-h-[56px] items-center justify-center gap-4 rounded-md bg-rc-gold px-5 text-base font-bold text-black transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-55"
          >
            {submitting ? "Submitting..." : "Get My Cash Offer"}
            {!submitting && <ArrowRight size={22} strokeWidth={2.1} />}
          </button>
        </div>

        {submitError && (
          <p className="mt-3 text-center text-sm font-semibold text-red-600">
            {submitError}
          </p>
        )}
      </form>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-bold text-white sm:text-sm lg:justify-start">
        <span className="flex items-center gap-2">
          <Lock size={15} fill="currentColor" strokeWidth={2.4} />
          100% Private
        </span>
        <span className="hidden h-1.5 w-1.5 rounded-full bg-white sm:block" />
        <span>No Obligation</span>
        <span className="hidden h-1.5 w-1.5 rounded-full bg-white sm:block" />
        <span>Takes 30 Seconds</span>
      </div>
    </div>
  );
}
