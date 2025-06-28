import Header from "@/components/Header";
import ActionButton from "@/components/ActionButton";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-9xl font-bold text-purple-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <ActionButton to="/" icon={<Home />}>
            Back to Home
          </ActionButton>
        </div>
      </main>
    </div>
  );
}
