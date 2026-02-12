export const metadata = {
  title: "AI Study Wrapper",
  description: "SaaS Study Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100">

        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-5">
          <h2 className="text-xl font-bold mb-6">AI Study</h2>

          <nav className="space-y-3">
            <p className="cursor-pointer hover:text-blue-600">Dashboard</p>
            <p className="cursor-pointer hover:text-blue-600">Generate Notes</p>
            <p className="cursor-pointer hover:text-blue-600">Quiz</p>
            <p className="cursor-pointer hover:text-blue-600">Flashcards</p>
            <p className="cursor-pointer hover:text-blue-600">History</p>
          </nav>
        </aside>

        {/* Main Area */}
        <div className="flex-1 flex flex-col">

          {/* Navbar */}
          <header className="bg-white shadow p-4 flex justify-between">
            <h1 className="font-semibold">Workspace</h1>
            <p className="text-sm text-gray-500">Free Plan</p>
          </header>

          {/* Page Content */}
          <main className="p-6 overflow-y-auto">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
