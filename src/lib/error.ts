export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);

    this.name = "AppError";
    this.statusCode = statusCode;
  }
}

export function handleAIError(error: unknown): AppError {
  console.error("AI Error:", error);

  const message = error instanceof Error ? error.message.toLowerCase() : "";

  // Rate limiting / quota errors
  if (
    message.includes("429") ||
    message.includes("too many requests") ||
    message.includes("quota")
  ) {
    return new AppError(
      "AI service is currently busy. Please try again in a few moments.",
      429,
    );
  }

  // Invalid API key
  if (
    message.includes("api key") ||
    message.includes("permission denied") ||
    message.includes("unauthorized")
  ) {
    return new AppError("AI service configuration error.", 401);
  }

  // Network errors
  if (message.includes("network") || message.includes("fetch")) {
    return new AppError("Network error while contacting AI service.", 503);
  }

  // Fallback
  return new AppError("Failed to generate interview questions.", 500);
}
