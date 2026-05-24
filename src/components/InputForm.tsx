"use client";

import { useState } from "react";
import LoadingState from "./LoadingState";
import QuestionCard from "./QuestionCard";

export default function InputForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setQuestions([]);

    if (!jobTitle.trim()) {
      setError("Please enter a job title.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobTitle,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setQuestions(data.questions || []);
      setJobTitle("");
    } catch (err) {
      console.error(err);
      setError("Failed to generate questions. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="jobTitle" className="mb-2 block text-sm font-medium">
            Job Title
          </label>

          <input
            id="jobTitle"
            type="text"
            placeholder="Customer Success Manager"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black text-gray-950"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-black px-4 py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Questions"}
        </button>
      </form>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      {loading && <LoadingState />}

      {questions.length > 0 && (
        <div className="mt-8 space-y-4">
          {questions.map((question, index) => (
            <QuestionCard key={index} index={index + 1} question={question} />
          ))}
        </div>
      )}
    </div>
  );
}
