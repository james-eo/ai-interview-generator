import { NextResponse } from "next/server";
import { generateInterviewQuestions } from "@/lib/ai";

/**
 * API route to generate interview questions based on a job title.
 * @param request - The incoming request containing the job title in the body.
 * @returns A JSON response containing the generated interview questions or an error message.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const jobTitle = body?.jobTitle?.trim();

    if (!jobTitle) {
      return NextResponse.json(
        {
          error: "Job title is required.",
        },
        {
          status: 400,
        },
      );
    }

    const questions = await generateInterviewQuestions(jobTitle);

    return NextResponse.json({ questions });
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        error: "Failed to generate interview questions.",
      },
      {
        status: 500,
      },
    );
  }
}
