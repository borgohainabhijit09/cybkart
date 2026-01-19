import { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight,
    Search,
    BookOpen,
    Tag,
    Clock,
    ChevronRight,
    TrendingUp,
    Brain,
    Globe,
    Zap
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Knowledge Hub & Technical Resources | CYBKART GLOBAL',
    description: 'Deep dives into AI automation, web architecture, and digital growth strategies.',
};

// Mock Data
const categories = [
    { name: 'All', active: true },
    { name: 'AI & Automation', active: false },
    { name: 'Web Architecture', active: false },
    { name: 'Growth Systems', active: false },
    { name: 'Industry Reports', active: false },
];

const featuredArticle = {
    category: 'AI & Automation',
    readTime: '8 min read',
    title: 'The End of Manual Scheduling: How AI Agents Are Taking Over Appointment Booking',
    excerpt: 'We analyzed 50,000 bookings. The results are clear: AI agents reduce no-shows by 85% and increase booking velocity by 3x compared to traditional web forms.',
    imageColor: 'bg-blue-600',
    slug: '#'
};

const trendingArticles = [
    {
        category: 'Web Architecture',
        title: 'Why Headless Commerce is the Future for High-Volume Brands',
        readTime: '5 min read',
        slug: '#'
    },
    {
        category: 'Growth Strategy',
        title: 'The "Value-First" Funnel: Converting Leads Without Being Pushy',
        readTime: '6 min read',
        slug: '#'
    }
];

const articles = [
    {
        category: 'Business Systems',
        title: 'Standard Operating Procedures (SOPs) for Digital Teams',
        excerpt: 'How to document your workflows so your business can run without you. A step-by-step guide.',
        readTime: '12 min read',
        icon: BookOpen,
        color: 'text-slate-600'
    },
    {
        category: 'AI Integration',
        title: 'RAG Systems Explained: Connecting AI to Your Own Data',
        excerpt: 'Stop generic ChatGPT answers. Learn how Retrieval-Augmented Generation gives accurate, business-specific responses.',
        readTime: '9 min read',
        icon: Brain,
        color: 'text-purple-600'
    },
    {
        category: 'Performance',
        title: 'Core Web Vitals 2024: What Changed in Google\'s Algorithm',
        excerpt: 'Speed is now a trust signal. Here is how to optimize your INP (Interaction to Next Paint) score.',
        readTime: '7 min read',
        icon: Zap,
        color: 'text-yellow-600'
    },
    {
        category: 'E-Commerce',
        title: 'Trust Signals: 5 Checkout Elements That Boost Conversion',
        excerpt: 'From badges to micro-copy, these small tweaks increased checkout completion rates by 14%.',
        readTime: '6 min read',
        icon: Globe,
        color: 'text-indigo-600'
    },
    {
        category: 'Case Study',
        title: 'Scaling a Dental Clinic to $2M with Automated Patient Recall',
        excerpt: 'A deep dive into the SMS workflows that reactivated 400+ dormant patients in 30 days.',
        readTime: '10 min read',
        icon: TrendingUp,
        color: 'text-green-600'
    },
    {
        category: 'Security',
        title: 'Protecting Customer Data in the Age of AI Scrapers',
        excerpt: 'How to secure your forms and endpoints from bot attacks while keeping the user experience smooth.',
        readTime: '8 min read',
        icon: Search,
        color: 'text-red-500'
    }
];

export default function KnowledgeHubPage() {
    return (
        <>
            {/* 
        HERO SECTION 
      */}
            <section className="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Intelligence for the <br />
                            <span className="text-blue-500">Digital Economy.</span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                            Technical deep dives, strategic frameworks, and industry reports.
                            We share the systems we use to scale businesses.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-lg relative">
                            <input
                                type="text"
                                placeholder="Search articles (e.g. 'automations', 'seo')..."
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        FEATURED SECTION 
      */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
                        {categories.map((cat, i) => (
                            <button
                                key={cat.name}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${cat.active
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Featured */}
                        <div className="lg:col-span-2 group cursor-pointer">
                            <div className="relative h-[240px] sm:h-[320px] rounded-2xl overflow-hidden mb-6">
                                <div className={`absolute inset-0 ${featuredArticle.imageColor} mix-blend-multiply opacity-90 transition-opacity group-hover:opacity-100`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <div className="inline-flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                        {featuredArticle.category}
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:underline decoration-blue-400 decoration-2 underline-offset-4">
                                        {featuredArticle.title}
                                    </h2>
                                </div>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed mb-4">
                                {featuredArticle.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                <Clock className="w-4 h-4" /> {featuredArticle.readTime}
                            </div>
                        </div>

                        {/* Trending Side */}
                        <div className="space-y-8">
                            <div className="font-bold text-slate-400 text-xs uppercase tracking-wider border-b border-slate-100 pb-2">Trending Now</div>
                            {trendingArticles.map((article, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">{article.category}</div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                                        {article.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <Clock className="w-3 h-3" /> {article.readTime}
                                    </div>
                                </div>
                            ))}

                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">Subscribe to The System</h3>
                                <p className="text-sm text-slate-600 mb-4">Get one high-impact automation tactic every Tuesday.</p>
                                <div className="flex gap-2">
                                    <input type="email" placeholder="Email address" className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm" />
                                    <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold">→</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        GRID 
      */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, i) => {
                            const Icon = article.icon;
                            return (
                                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group cursor-pointer">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                            <Icon className={`w-5 h-5 ${article.color}`} />
                                        </div>
                                        <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded">
                                            {article.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                                        <Clock className="w-3 h-3" /> {article.readTime}
                                        <span className="ml-auto flex items-center gap-1 text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
                                            Read Article <ChevronRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-lg text-slate-600 font-semibold hover:bg-slate-50 hover:text-slate-900 transition-colors">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Stop Reading, Start Building."
                description="Every strategy we write about, we implement. Let's build your system today."
                buttonText="Book Strategy Call"
            />
        </>
    );
}
