import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function CTASection({
    title = "Ready to Scale?",
    description = "Book a free strategy call with our experts. We'll analyze your needs and show you exactly how our systems can drive growth.",
    buttonText = "Book Strategy Call",
    buttonHref = "/contact"
}: CTASectionProps) {
    return (
        <section className="py-24 bg-[#0F172A] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {title}
                    </h2>
                    <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        {description}
                    </p>
                    <Link
                        href={buttonHref}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25"
                    >
                        {buttonText}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
