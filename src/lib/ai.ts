import { GoogleGenerativeAI } from "@google/generative-ai";
import { createInterviewPrompt } from "./prompts";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

/**
 * Generates interview questions based on a job title.
 * @param jobTitle - The job title for which to generate questions.
 * @returns A promise resolving to an array of generated interview questions.
 */
export async function generateInterviewQuestions(jobTitle: string) {
  const prompt = createInterviewPrompt(jobTitle);

  const result = await model.generateContent(prompt);

  const response = result.response.text();

  try {
    const cleanedResponse = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleanedResponse);

    if (!Array.isArray(parsed)) {
      throw new Error("Invalid AI response format.");
    }

    return parsed;
  } catch (error) {
    console.error("Parsing Error:", error);

    throw new Error("Failed to parse AI response.");
  }
}
