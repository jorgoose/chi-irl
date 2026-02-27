"use client";

import { useState, FormEvent } from "react";

interface SubscribeFormProps {
  formId: string;
}

export function SubscribeForm({ formId }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // POST to the same origin, matching the original Carrd form behavior
    const formData = new FormData();
    formData.append("email", email);
    formData.append("id", formId);

    try {
      await fetch("/", { method: "POST", body: formData });
      setSubmitted(true);
    } catch {
      // Silently handle - in production, connect to your email service
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center text-white font-semibold text-lg">
        Thank you for subscribing!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-0 w-full max-w-[420px]">
      <input
        type="email"
        name="email"
        placeholder="Email..."
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 h-11 px-4 rounded-l text-[#212121] bg-white/50 border-none outline-none placeholder:text-[#666] text-sm"
      />
      <button
        type="submit"
        className="h-11 px-6 bg-red text-white font-semibold text-sm rounded-r hover:bg-red-hover transition-colors cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  );
}
