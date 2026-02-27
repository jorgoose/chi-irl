"use client";

import { useState, FormEvent } from "react";

interface SubscribeFormProps {
  formId: string;
  variant?: "hero" | "footer";
}

export function SubscribeForm({ formId, variant = "hero" }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("id", formId);

    try {
      await fetch("/", { method: "POST", body: formData });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center text-white font-semibold text-lg py-2">
        You&apos;re in! Check your inbox Monday.
      </div>
    );
  }

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center w-full max-w-md rounded-full ${
        isHero
          ? "bg-white/15 backdrop-blur-sm border border-white/25 shadow-lg shadow-black/10"
          : "bg-white/10 backdrop-blur-sm border border-white/15"
      }`}
    >
      <input
        type="email"
        name="email"
        placeholder="Enter your email..."
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 min-w-0 h-12 px-5 bg-transparent text-white placeholder:text-white/60 text-sm outline-none"
      />
      <button
        type="submit"
        className={`h-10 px-6 m-1 font-semibold text-sm rounded-full cursor-pointer transition-colors whitespace-nowrap flex-shrink-0 ${
          isHero
            ? "bg-white text-sky-700 hover:bg-sky-50"
            : "bg-cyan text-white hover:bg-sky-600"
        }`}
      >
        Subscribe
      </button>
    </form>
  );
}
