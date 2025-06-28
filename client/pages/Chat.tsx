import Header from "@/components/Header";
import { Search, Send } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Ask me anything about tax documents, deductions, or filing requirements..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl h-[600px] relative overflow-hidden">
          {/* Gradient overlay for visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20" />

          {/* Chat content area */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Messages area */}
            <div className="flex-1 p-8">
              <div className="text-center text-white/80 mt-32">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-2xl font-semibold mb-2">
                  Start a Conversation
                </h3>
                <p className="text-lg text-purple-100">
                  Ask questions about tax forms, deductions, filing
                  requirements, or any tax-related topics
                </p>
              </div>
            </div>

            {/* Input area */}
            <div className="p-6 border-t border-white/20">
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  placeholder="Type your tax question here..."
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm"
                />
                <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-colors backdrop-blur-sm">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Questions */}
        <div className="mt-8 bg-white rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "What deductions can I claim?",
              "How to file Schedule C?",
              "1099 vs W-2 differences",
              "Tax deadline dates 2024",
              "IRA contribution limits",
              "Home office deduction",
            ].map((question) => (
              <button
                key={question}
                className="text-left p-3 bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-300 rounded-lg transition-colors text-sm text-gray-700 hover:text-purple-700"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
