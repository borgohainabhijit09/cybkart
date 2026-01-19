import { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight,
    Palette,
    PenTool,
    Layers,
    Eye,
    FileCheck,
    Box,
    Hexagon,
    Circle,
    Square,
    Type
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Strategic Branding & Identity Design | CYBKART GLOBAL',
    description: 'Building authoritative brand systems. Logos, visual identities, and design guidelines that build trust and equity.',
};

export default function BrandingDesignPage() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                            Visual Identity Systems
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Design That Builds <br />
                            <span className="text-pink-500">Unspoken Trust.</span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                            Your brand is more than a logo. It's the silent ambassador of your business.
                            We create cohesive visual systems that signal authority, quality, and values instantly.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-500 transition-all shadow-lg hover:shadow-pink-500/25">
                                Start Your Rebrand
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        STRATEGY FUNDAMENTALS 
      */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-pink-600 font-bold tracking-wider text-sm uppercase">The Foundation</span>
                            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">Strategy Before Art</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Pretty pictures don't sell. Strategic design does. Before pixel touches canvas,
                                we define the core attributes that your visual identity must communicate.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Eye className="w-6 h-6 text-pink-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Visual Positioning</h3>
                                        <p className="text-sm text-slate-600">Are you Premium or Accessible? Innovative or Heritage? We tune your visuals to match your price point.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Layers className="w-6 h-6 text-pink-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">System Consistency</h3>
                                        <p className="text-sm text-slate-600">A brand is a pattern. We create strict rules for typography, color, and spacing so you look professional everywhere.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-6 text-center">The Brand Anatomy</h3>
                            <div className="space-y-3">
                                <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center gap-4">
                                    <div className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-bold">1</div>
                                    <span className="font-bold text-slate-700">Logo (The Face)</span>
                                </div>
                                <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center gap-4">
                                    <div className="w-8 h-8 rounded bg-slate-800 text-white flex items-center justify-center font-bold">2</div>
                                    <span className="font-bold text-slate-700">Typography (The Voice)</span>
                                </div>
                                <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center gap-4">
                                    <div className="w-8 h-8 rounded bg-slate-700 text-white flex items-center justify-center font-bold">3</div>
                                    <span className="font-bold text-slate-700">Color Palette (The Mood)</span>
                                </div>
                                <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center gap-4">
                                    <div className="w-8 h-8 rounded bg-slate-600 text-white flex items-center justify-center font-bold">4</div>
                                    <span className="font-bold text-slate-700">Imagery (The Context)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        LOGO PSYCHOLOGY 
      */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">The Psychology of Shape</h2>
                        <p className="text-lg text-slate-600">Subconscious cues tell your customers who you are instantly.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {/* Square */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Square className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Stability & Trust</h3>
                            <p className="text-sm text-slate-600 mb-4">Used by banks, law firms, and tech.</p>
                            <div className="text-xs font-mono text-slate-400">Microsoft, BBC, Amex</div>
                        </div>

                        {/* Circle */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Circle className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Community & Unity</h3>
                            <p className="text-sm text-slate-600 mb-4">Used by social networks and charities.</p>
                            <div className="text-xs font-mono text-slate-400">Target, NASA, Pepsi</div>
                        </div>

                        {/* Geometric/sharp */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Hexagon className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Structure & Science</h3>
                            <p className="text-sm text-slate-600 mb-4">Used by engineering and SaaS.</p>
                            <div className="text-xs font-mono text-slate-400">Chase, Mitsubishi</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        PROCESS 
      */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Design Process</h2>
                        <p className="text-slate-600">We don't throw darts in the dark. We follow a rigorous 4-step framework.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Auditing competitors and defining your brand archetype." },
                            { step: "02", title: "Concept", desc: "Sketching wide to explore different visual directions." },
                            { step: "03", title: "Refine", desc: "Selecting the strongest direction and polishing the vectors." },
                            { step: "04", title: "Systemize", desc: "Creating the rules and assets for real-world application." }
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-bold text-slate-200 absolute -top-8 left-0 -z-10">{item.step}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 pt-4">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 
        DELIVERABLES 
      */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What You Get</h2>
                            <p className="text-slate-400 mb-8">
                                We handover a complete "Brand Kit" that empowers your team to create consistent content forever.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 p-4 rounded-lg border border-white/5">
                                    <Box className="w-5 h-5 text-pink-400 mb-2" />
                                    <div className="font-bold">Vector Logos</div>
                                    <div className="text-xs text-slate-400">AI, EPS, SVG, PNG</div>
                                </div>
                                <div className="bg-white/10 p-4 rounded-lg border border-white/5">
                                    <Palette className="w-5 h-5 text-blue-400 mb-2" />
                                    <div className="font-bold">Color Codes</div>
                                    <div className="text-xs text-slate-400">CMYK, RGB, HEX, Pantone</div>
                                </div>
                                <div className="bg-white/10 p-4 rounded-lg border border-white/5">
                                    <Type className="w-5 h-5 text-green-400 mb-2" />
                                    <div className="font-bold">Typography</div>
                                    <div className="text-xs text-slate-400">Font Files & Licensing</div>
                                </div>
                                <div className="bg-white/10 p-4 rounded-lg border border-white/5">
                                    <FileCheck className="w-5 h-5 text-purple-400 mb-2" />
                                    <div className="font-bold">Guidelines PDF</div>
                                    <div className="text-xs text-slate-400">The "Rulebook" for usage</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-2 rotate-2 shadow-2xl">
                            <div className="bg-slate-50 rounded-lg p-8 border border-slate-100 aspect-square flex flex-col items-center justify-center text-center">
                                <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                                    <span className="text-white font-bold text-2xl">Ck</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">CYBKART</h3>
                                <p className="text-slate-400 tracking-widest text-xs uppercase mb-8">GLOBAL SYSTEMS</p>

                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-900"></div>
                                    <div className="w-8 h-8 rounded-full bg-blue-600"></div>
                                    <div className="w-8 h-8 rounded-full bg-slate-400"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        FAQs 
      */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Branding FAQ</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "How long does a rebrand take?",
                                    a: "Typically 3-5 weeks. Week 1 is Strategy/Discovery, Weeks 2-3 are Design Exploration, and Week 4 is Refinement and Final Asset assembly."
                                },
                                {
                                    q: "Do I get full copyright ownership?",
                                    a: "Yes. Upon final payment, all rights to the final selected logo and assets are transferred to you. We retain no ownership."
                                },
                                {
                                    q: "What if I don't like the concepts?",
                                    a: "We include 3 rounds of revisions in our standard package. Because we start with a strict Strategy phase, we rarely miss the mark on the visual exploration."
                                },
                                {
                                    q: "Do you design for Print too?",
                                    a: "Yes. We can apply your new brand to business cards, letterheads, packaging, vehicle wraps, and trade show booths."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white border border-slate-200 rounded-lg p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Ready to Look Enterprise?"
                description="Book a design consultation. We'll critique your current brand and show you the potential for an upgrade."
                buttonText="Book Brand Review"
            />
        </>
    );
}
