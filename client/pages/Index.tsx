import Header from "@/components/Header";
import ActionButton from "@/components/ActionButton";
import FeatureCard from "@/components/FeatureCard";
import {
  Home,
  Upload,
  MessageSquare,
  FileText,
  Clock,
  HelpCircle,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 sm:text-6xl">
            Welcome to DocuLens
          </h1>
          <p className="mb-4 text-xl text-gray-700 font-medium">
            Your intelligent tax document analysis and chat assistant
          </p>
          <p className="mb-12 text-lg text-purple-600 font-medium">
            Specialized in tax forms, returns, and related inquiries
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-16 flex flex-wrap justify-center gap-6">
          <ActionButton to="/" variant="primary" icon={<Home />}>
            Welcome
          </ActionButton>
          <ActionButton to="/upload" variant="secondary" icon={<Upload />}>
            Upload Document
          </ActionButton>
          <ActionButton to="/chat" variant="tertiary" icon={<MessageSquare />}>
            Tax Assistant
          </ActionButton>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            title="Tax Form Analysis"
            description="Upload W-2s, 1099s, 1040s and other tax forms to get key insights and identify potential issues."
            icon={<FileText />}
          />
          <FeatureCard
            title="Deadline Tracking"
            description="Get alerts about important tax deadlines including filing requirements based on your documents."
            icon={<Clock />}
          />
          <FeatureCard
            title="Tax Expert Chat"
            description="Ask questions about deductions, credits, filing status and get expert guidance on tax-related concerns."
            icon={<HelpCircle />}
          />
        </div>
      </main>
    </div>
  );
}
