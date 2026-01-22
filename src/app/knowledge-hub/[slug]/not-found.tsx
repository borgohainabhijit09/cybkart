import Link from 'next/link';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
            <div className="max-w-2xl mx-auto text-center">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <FileQuestion className="w-12 h-12 text-slate-400" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Article Not Found
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    The article you're looking for doesn't exist or may have been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/knowledge-hub"
                        className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-md"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Knowledge Hub
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
