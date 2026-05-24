import InputForm from "@/components/InputForm";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            AI Interview Question Generator
          </h1>

          <p className="mt-3 text-gray-600">
            Generate thoughtful interview questions for any role.
          </p>
        </div>

        <InputForm />
      </div>
    </main>
  );
}
