import { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight,
    TrendingUp,
    Clock,
    Users,
    DollarSign,
    BarChart,
    Check,
    Activity,
    ShoppingBag,
    Briefcase
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Case Scenarios & Performance Data | CYBKART GLOBAL',
    description: 'Real-world results from our automated systems. See how businesses reduce costs and drive revenue with intelligent architecture.',
};

export default function CaseScenariosPage() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Proven Outcomes
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Performance Data <br />
                            <span className="text-emerald-500">In Real World Tests.</span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                            We track everything. See precisely how our automated booking systems and
                            sales funnels perform for Medical, Retail, and Professional Service clients.
                        </p>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-slate-800 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">~$2.4M</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">Client Revenue Generated</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">12k+</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">Automated Bookings</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">98.5%</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">Uptime Reliability</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        CASE STUDY 1: MEDICAL 
      */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
                                <Activity className="w-5 h-5" />
                                Medical & Wellness
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The "Zero-Admin" Clinic</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                A busy dental practice was losing ~15 appointments a week to phone tag and manual errors. Their front desk was overwhelmed.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase">Key Results</h4>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">No-Show Reduction</span>
                                            <span className="font-bold text-blue-600">-85%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full w-[85%] bg-blue-500 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">Admin Hours Saved</span>
                                            <span className="font-bold text-blue-600">25hrs/wk</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full w-[60%] bg-blue-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-red-500 rounded-t-2xl"></div>
                                <h3 className="font-bold text-slate-900 mb-4">Before CYBKART</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="text-red-500 font-bold">✕</span> Voice-mail tag for bookings
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="text-red-500 font-bold">✕</span> Manual SMS reminders (often forgotten)
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="text-red-500 font-bold">✕</span> No deposit collection
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-2xl"></div>
                                <h3 className="font-bold text-slate-900 mb-4">The Solution</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className="w-4 h-4 text-blue-600 mt-0.5" /> 24/7 Self-booking portal
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className="w-4 h-4 text-blue-600 mt-0.5" /> Automated WhatsApp/SMS flows
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className="w-4 h-4 text-blue-600 mt-0.5" /> $50 Refundable deposit required
                                    </li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-blue-200 text-sm italic text-blue-800">
                                    "It's like having a receptionist who never sleeps."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        CASE STUDY 2: E-COMMERCE 
      */}
            <section className="py-24 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3 lg:order-2">
                            <div className="inline-flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4">
                                <ShoppingBag className="w-5 h-5" />
                                Retail & E-Commerce
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Scalable Brand</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                A streetwear brand was stuck at $20k/mo. Their generic template site was slow, uninspiring, and crashed during drops.
                            </p>
                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase">Key Results</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-indigo-50 rounded text-center">
                                        <div className="text-2xl font-bold text-indigo-600">+140%</div>
                                        <div className="text-xs text-slate-500">Conv. Rate</div>
                                    </div>
                                    <div className="p-3 bg-indigo-50 rounded text-center">
                                        <div className="text-2xl font-bold text-indigo-600">0.8s</div>
                                        <div className="text-xs text-slate-500">Page Load</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 lg:order-1 grid sm:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-red-500 rounded-t-2xl"></div>
                                <h3 className="font-bold text-slate-900 mb-4">Before CYBKART</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="text-red-500 font-bold">✕</span> 4.5s Mobile load time
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="text-red-500 font-bold">✕</span> Generic, non-branded checkout
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="text-red-500 font-bold">✕</span> Zero email automation
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-indigo-50 p-8 rounded-2xl shadow-sm border border-indigo-100 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 rounded-t-2xl"></div>
                                <h3 className="font-bold text-slate-900 mb-4">The Solution</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className="w-4 h-4 text-indigo-600 mt-0.5" /> Headless Shopify (Next.js)
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className="w-4 h-4 text-indigo-600 mt-0.5" /> Abandoned cart recovery flows
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className="w-4 h-4 text-indigo-600 mt-0.5" /> "Shop the Look" features
                                    </li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-indigo-200 text-sm italic text-indigo-800">
                                    "We doubled our revenue in 3 months just by fixing the user experience."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        CASE STUDY 3: CONSULTANT 
      */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <div className="inline-flex items-center gap-2 text-purple-600 font-bold uppercase tracking-wider text-sm mb-4">
                                <Briefcase className="w-5 h-5" />
                                Professional Services
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The High-Ticket Pipeline</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                A financial consultant was wasting 15 hours/week on free calls with unqualified leads who couldn't afford his services.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase">Key Results</h4>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">Lead Quality Score</span>
                                            <span className="font-bold text-purple-600">9/10</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full w-[90%] bg-purple-500 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-slate-600">Revenue per Hour</span>
                                            <span className="font-bold text-purple-600">+300%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full w-[100%] bg-purple-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-red-500 rounded-t-2xl"></div>
                                <h3 className="font-bold text-slate-900 mb-4">Before CYBKART</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="text-red-500 font-bold">✕</span> "Contact Us" form (spam magnet)
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="text-red-500 font-bold">✕</span> Manually emailing PDF brochures
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="text-red-500 font-bold">✕</span> No clear pricing on site
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-8 rounded-2xl shadow-sm border border-purple-100 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-purple-600 rounded-t-2xl"></div>
                                <h3 className="font-bold text-slate-900 mb-4">The Solution</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className="w-4 h-4 text-purple-600 mt-0.5" /> 3-Step Qualification Quiz
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className="w-4 h-4 text-purple-600 mt-0.5" /> Automated calendar (paid calls only)
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-700">
                                        <Check className="w-4 h-4 text-purple-600 mt-0.5" /> Auto-webinar for education
                                    </li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-purple-200 text-sm italic text-purple-800">
                                    "I now only talk to people who have their credit card in hand."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Be Our Next Case Study"
                description="We are looking for ambitious partners in Medical, Law, and Retail sectors."
                buttonText="Work With Us"
            />
        </>
    );
}
