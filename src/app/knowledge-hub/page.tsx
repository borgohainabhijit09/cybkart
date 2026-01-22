import { Metadata } from 'next';
import { ArrowRight, Search } from 'lucide-react';
import CTASection from '@/components/CTASection';
import BlogListing from '@/components/BlogListing';
import { getAllPosts, getAllCategories } from '@/lib/blog';

export const metadata: Metadata = {
    title: 'Knowledge Hub & Technical Resources | CYBKART GLOBAL',
    description: 'Deep dives into AI automation, web architecture, and digital growth strategies.',
};

export default function KnowledgeHubPage() {
    // Get all blog posts
    const allPosts = getAllPosts();
    const categories = getAllCategories();
    return (
        <>
            {/* HERO SECTION */}
            <section className="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Deep Dives Into{' '}
                            <span className="gradient-text">AI Automation</span>
                        </h1>

                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Technical guides, case studies, and strategic insights from building 50+ automation systems.
                        </p>

                        <div className="max-w-lg relative">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        </div>
                    </div>
                </div>
            </section>


            {/* Blog Listing with Filtering */}
            <BlogListing allPosts={allPosts} categories={categories} />

            {/* CTA */}
            <CTASection
                title="Stop Reading, Start Building."
                description="Every strategy we write about, we implement. Let's build your system today."
                buttonText="Book Strategy Call"
            />
        </>
    );
}
