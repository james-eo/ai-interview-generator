interface QuestionCardProps {
  index: number;
  question: string;
}

export default function QuestionCard({ index, question }: QuestionCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
      <div className="mb-2 text-sm font-semibold text-gray-500">
        Question {index}
      </div>

      <p className="text-gray-800">{question}</p>
    </div>
  );
}
