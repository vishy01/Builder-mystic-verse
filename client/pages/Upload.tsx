import Header from "@/components/Header";
import { Upload, FileText, CheckCircle } from "lucide-react";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upload Your Tax Documents
          </h1>
          <p className="text-lg text-gray-600">
            Upload your tax forms for intelligent analysis and insights
          </p>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-2xl border-2 border-dashed border-purple-300 p-12 text-center hover:border-purple-400 transition-colors">
          <div className="mx-auto w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <Upload className="w-12 h-12 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Drop your files here
          </h3>
          <p className="text-gray-600 mb-6">or click to browse your computer</p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Choose Files
          </button>
        </div>

        {/* Supported Files */}
        <div className="mt-8 bg-white rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Supported Document Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "W-2 Wage and Tax Statement",
              "1099 Forms (All Types)",
              "1040 Individual Income Tax Return",
              "Schedule A (Itemized Deductions)",
              "Schedule C (Business Income)",
              "Other Tax Forms",
            ].map((docType) => (
              <div key={docType} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">{docType}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
