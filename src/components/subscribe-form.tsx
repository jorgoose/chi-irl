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
      <div className={`text-center font-semibold text-lg ${variant === "hero" ? "text-white" : "text-white"}`}>
        Thank you for subscribing!
      </div>
    );
  }

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center w-full max-w-md rounded-full overflow-hidden ${
        isHero
          ? "bg-white/15 backdrop-blur-sm border border-white/20"
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
        className="flex-1 h-12 px-5 bg-transparent text-white placeholder:text-white/60 text-sm outline-none"
      />
      <button
        type="submit"
        className={`h-10 px-6 m-1 font-semibold text-sm rounded-full cursor-pointer transition-colors ${
          isHero
            ? "bg-white text-cyan-dark hover:bg-white/90"
            : "bg-cyan text-white hover:bg-cyan-dark"
        }`}
      >
        Subscribe
      </button>
    </form>
  );
}
