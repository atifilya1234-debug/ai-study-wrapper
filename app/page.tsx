export default function Home() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-4">
        Welcome to AI Study Wrapper
      </h1>

      <p className="text-gray-600 mb-6">
        Generate Notes, Quiz, Flashcards & PYQs from YouTube lectures and PDFs.
      </p>

      <div className="grid grid-cols-2 gap-4">

        <div className="p-5 bg-white rounded-xl shadow">
          <h2 className="font-semibold">YouTube → Notes</h2>
          <p className="text-sm text-gray-500">
            Convert lectures into structured notes.
          </p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow">
          <h2 className="font-semibold">PDF → Quiz</h2>
          <p className="text-sm text-gray-500">
            Generate exam MCQs instantly.
          </p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow">
          <h2 className="font-semibold">Flashcards</h2>
          <p className="text-sm text-gray-500">
            Revise using active recall system.
          </p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow">
          <h2 className="font-semibold">PYQs</h2>
          <p className="text-sm text-gray-500">
            Practice past exam questions.
          </p>
        </div>

      </div>

    </div>
  );
}
