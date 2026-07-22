import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Ghost, DollarSign, Handshake, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: '100% White-Label Development Delivery | CybKart Global',
    description: 'We are completely invisible to your clients. Learn how our white-label delivery and wholesale pricing structure protects your margins.',
};

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-violet-400' : 'text-violet-600'}`}>
            <span className={`block w-6 h-px ${light ? 'bg-violet-400' : 'bg-violet-600'}`} />
            {children}
        </span>
    );
}

export default function WhiteLabelDeliveryService() {
    return (
        <>
            <section className="relative min-h-[60vh] bg-[#030712] overflow-hidden flex items-end pb-20 pt-32">
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px] animate-glow-pulse" />
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(139,92,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.6) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <SectionLabel light>White-Label Delivery</SectionLabel>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mt-6 mb-6 tracking-tight leading-[1.05]">
                            Your Brand.<br/>
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #8b5cf6)' }}>
                                Our Engineering.
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
                            We work entirely behind the scenes with wholesale pricing structures designed to give you significant markup potential without the overhead of in-house engineers.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-28 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">The Mechanics of the Partnership</h2>
                            <p className="text-lg text-slate-500 mb-6 leading-relaxed font-medium">
                                The biggest risk in outsourcing is exposing your clients to a third party. We mitigate this completely. CybKart Global is an invisible infrastructure provider.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed font-medium mb-8">
                                You own the relationship, the strategy, and the billing. We operate strictly as your backstage development team, communicating only with your project managers.
                            </p>
                            <ul className="space-y-4">
                                {['Zero Client-Facing Contact', 'Strict Non-Disclosure Agreements', 'Your Agency Owns the Code', 'Wholesale Partner Pricing'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700 font-bold">
                                        <CheckCircle className="w-5 h-5 text-violet-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 shadow-2xl">
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-8">Why It Works</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center"><Ghost className="w-6 h-6 text-violet-600" /></div>
                                    <h4 className="font-bold text-slate-900">Invisible</h4>
                                    <p className="text-sm text-slate-500">We never speak to your clients directly.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center"><DollarSign className="w-6 h-6 text-emerald-600" /></div>
                                    <h4 className="font-bold text-slate-900">High Margins</h4>
                                    <p className="text-sm text-slate-500">Priced to leave room for your agency's markup.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"><Handshake className="w-6 h-6 text-blue-600" /></div>
                                    <h4 className="font-bold text-slate-900">True Partnership</h4>
                                    <p className="text-sm text-slate-500">We act as your dedicated, invisible dev team.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center"><ShieldCheck className="w-6 h-6 text-amber-600" /></div>
                                    <h4 className="font-bold text-slate-900">Guaranteed</h4>
                                    <p className="text-sm text-slate-500">Strict NDAs protect your client roster.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-28 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <SectionLabel light>Ready To Scale?</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-6 mb-8 tracking-tight">Let's discuss your next project.</h2>
                    <Link href="/" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white bg-violet-600 hover:bg-violet-500 transition-colors">
                        Book a 15-Minute Fit Call
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
