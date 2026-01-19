import { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight,
    Target,
    BarChart,
    Search,
    PieChart,
    Filter,
    AlertTriangle,
    CheckCircle,
    TrendingUp,
    MousePointer,
    Users,
    Smartphone
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Digital Marketing Science | CYBKART GLOBAL',
    description: 'Data-driven marketing campaigns. We build profitable funnels using SEO, PPC, and Social Ads with precise analytics tracking.',
};

export default function DigitalMarketingPage() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                            Performance Marketing
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Stop Guessing. <br />
                            <span className="text-purple-500">Start Measuring.</span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                            We don't do "brand awareness" fluff. We build scientific, trackable acquisition systems
                            that turn ad dollars into profit. SEO, PPC, and Paid Social engineered for ROI.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-500/25">
                                Audit Your Campaigns
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        WHY ADS FAIL 
      */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-2 text-red-500 font-bold tracking-wider text-sm uppercase mb-4">
                                <AlertTriangle className="w-4 h-4" />
                                The Problem
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Your Ads Are Failing</h2>
                            <div className="space-y-6">
                                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                    <h3 className="font-bold text-slate-900 mb-2">No "System"</h3>
                                    <p className="text-slate-600 text-sm">Most businesses just "boost posts" or run traffic to a homepage. This burns budget fast because there is no mechanism to capture and nurture the 97% of people who aren't ready to buy today.</p>
                                </div>
                                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                    <h3 className="font-bold text-slate-900 mb-2">Broken Tracking</h3>
                                    <p className="text-slate-600 text-sm">If you don't know exactly which keyword generated the sale, you can't scale. We see 80% of ad accounts with broken conversion tracking.</p>
                                </div>
                            </div>
                        </div>

                        {/* Funnel Visual */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-center font-bold text-slate-900 mb-8">The Solution: Funnel Architecture</h3>

                            <div className="space-y-2 max-w-sm mx-auto">
                                {/* Top */}
                                <div className="h-16 bg-purple-200 rounded-t-lg flex items-center justify-center text-purple-900 font-bold relative">
                                    Traffic (Ads/SEO)
                                    <span className="absolute -right-24 text-xs text-slate-400 w-20 text-left">Cold Audience</span>
                                </div>
                                {/* Middle */}
                                <div className="h-14 bg-purple-400 mx-4 flex items-center justify-center text-white font-bold relative">
                                    Lead Capture
                                    <span className="absolute -right-20 text-xs text-slate-500 w-20 text-left">Emails/SMS</span>
                                </div>
                                {/* Bottom */}
                                <div className="h-12 bg-purple-600 mx-8 rounded-b-lg flex items-center justify-center text-white font-bold relative">
                                    Sales
                                    <span className="absolute -right-16 text-xs text-slate-700 w-20 text-left">Revenue</span>
                                </div>
                            </div>

                            <p className="text-center text-sm text-slate-500 mt-6 max-w-xs mx-auto">
                                We build this entire infrastructure before we spend a single dollar on ads.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        CHANNELS (SEO vs PPC vs Social) 
      */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Selecting Your Weapon</h2>
                        <p className="text-lg text-slate-600">Different channels achieve different goals. We help you choose the right mix.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* PPC */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <MousePointer className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Google Ads (PPC)</h3>
                            <p className="text-slate-600 text-sm mb-6">Capture people who are <span className="font-semibold text-slate-900">searching right now</span>.</p>
                            <div className="bg-blue-50 px-4 py-2 rounded text-xs font-semibold text-blue-700 inline-block">Best for: Immediate Sales</div>
                        </div>

                        {/* SEO */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                <Search className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">SEO</h3>
                            <p className="text-slate-600 text-sm mb-6">Build long-term authority so you don't pay for every click.</p>
                            <div className="bg-green-50 px-4 py-2 rounded text-xs font-semibold text-green-700 inline-block">Best for: Sustainability</div>
                        </div>

                        {/* Social */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                                <Smartphone className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Paid Social</h3>
                            <p className="text-slate-600 text-sm mb-6">Disrupt feeds on FB/Insta to generate demand where none existed.</p>
                            <div className="bg-purple-50 px-4 py-2 rounded text-xs font-semibold text-purple-700 inline-block">Best for: Scaling Brand</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        REPORTING & TRACKING 
      */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 bg-slate-100 p-8 rounded-2xl border border-slate-200">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="font-bold text-slate-700">Live Dashboard Preview</h4>
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <div className="text-xs text-slate-500">Total Spend</div>
                                    <div className="text-xl font-bold text-slate-900">$4,250</div>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <div className="text-xs text-slate-500">Revenue Generated</div>
                                    <div className="text-xl font-bold text-green-600">$18,400</div>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <div className="text-xs text-slate-500">Cost Per Lead</div>
                                    <div className="text-xl font-bold text-slate-900">$24.00</div>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <div className="text-xs text-slate-500">ROAS</div>
                                    <div className="text-xl font-bold text-purple-600">4.3x</div>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded shadow-sm">
                                <div className="text-xs text-slate-500 mb-2">Lead Sources</div>
                                <div className="h-2 bg-slate-100 rounded-full mb-1">
                                    <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                                </div>
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>Google Ads (75%)</span>
                                    <span>FB (25%)</span>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">Transparency</span>
                            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">Extreme Accountability</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Most agencies hide behind "vanity metrics" like clicks and impressions. We report on what pays the bills: <strong>Revenue & Leads</strong>.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <CheckCircle className="w-3 h-3" />
                                    </div>
                                    <span className="text-slate-700"><strong>UTM Tracking:</strong> Every link is tagged so we know exactly where buyers come from.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <CheckCircle className="w-3 h-3" />
                                    </div>
                                    <span className="text-slate-700"><strong>Server-Side APIs:</strong> We send conversion data back to Facebook/Google to train their AI.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <CheckCircle className="w-3 h-3" />
                                    </div>
                                    <span className="text-slate-700"><strong>24/7 Portal:</strong> You get a login to view your campaign performance in real-time.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        WHEN NOT TO RUN ADS 
      */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            Honest Advice
                        </div>
                        <h2 className="text-3xl font-bold mb-6">When You Should NOT Run Ads</h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            We turn down 30% of potential clients because their foundation isn't ready.
                            Pouring water into a leaky bucket is a waste of money.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-white flex items-center gap-2">
                                    <Target className="w-5 h-5 text-red-400" />
                                    Bad Offer
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    Ads amplify what exists. If your product doesn't have market fit, ads will just help you fail faster.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-white flex items-center gap-2">
                                    <Smartphone className="w-5 h-5 text-red-400" />
                                    Poor Website
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    If your site conversion rate is below 1%, we fix the site (CRO) before buying traffic.
                                </p>
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Marketing FAQ</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "How much budget do I need?",
                                    a: "For local lead gen, we recommend starting with $1,000/mo in ad spend. For national e-commerce, $3,000/mo is the typical minimum to get statistically significant data."
                                },
                                {
                                    q: "How long until I see results?",
                                    a: "PPC (Google Ads) can generate leads in 48 hours. SEO takes 3-6 months. Social Ads usually take 2-4 weeks to 'learn' and optimize."
                                },
                                {
                                    q: "Do you guarantee results?",
                                    a: "No ethical agency guarantees specific ROI, as we don't control the market. However, we do guarantee that our tracking will be accurate and our work transparent."
                                },
                                {
                                    q: "Who owns the ad account?",
                                    a: "You do. Always. We manage it, but you retain full ownership of the data and account history if you ever leave."
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
                title="Get a Free Campaign Audit"
                description="Already running ads? Let us analyze your account to find wasted spend and missed opportunities."
                buttonText="Book Strategy Call"
            />
        </>
    );
}
