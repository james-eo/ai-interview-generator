/**
 * Creates an interview prompt for the given job title.
 * @param jobTitle - The job title for which to create the prompt.
 * @returns The interview prompt as a string.
 */
export function createInterviewPrompt(jobTitle: string) {
  return `
You are an experienced hiring manager.

Generate 3 thoughtful and role-specific interview questions
for the following position:

Role: ${jobTitle}

Requirements:
- Questions should assess real-world capability
- Avoid generic questions
- Make questions concise but insightful
- Return ONLY a valid JSON array of strings
`;
}
