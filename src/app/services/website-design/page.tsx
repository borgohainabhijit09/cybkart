import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code, Layout, Zap, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
    title: 'White-Label Website Design & Development | CybKart Global',
    description: 'Stop turning away web projects. We act as your invisible dev team, building premium, high-performance websites delivered in 3-5 days.',
};

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-blue-400' : 'text-blue-600'}`}>
            <span className={`block w-6 h-px ${light ? 'bg-blue-400' : 'bg-blue-600'}`} />
            {children}
        </span>
    );
}

export default function WebsiteDesignService() {
    return (
        <>
            <section className="relative min-h-[60vh] bg-[#030712] overflow-hidden flex items-end pb-20 pt-32">
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px] animate-glow-pulse" />
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.6) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <SectionLabel light>Website Design & Development</SectionLabel>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mt-6 mb-6 tracking-tight leading-[1.05]">
                            High-Performance Sites,<br/>
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                                Built Under Your Brand.
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
                            Stop turning away web projects because of capacity. We act as your invisible dev team, building premium sites on modern frameworks that you can confidently sell.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-28 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Expand Your Capacity Overnight</h2>
                            <p className="text-lg text-slate-500 mb-6 leading-relaxed font-medium">
                                Building websites in-house often means pulling your best people off strategy to deal with CSS bugs and responsive breakpoints. Or worse, dealing with unreliable freelancers who miss deadlines.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed font-medium mb-8">
                                With CybKart Global, you get a dedicated engineering team that delivers custom-designed, fully responsive websites in 3-5 days. You handle the client kickoff, we handle the code.
                            </p>
                            <ul className="space-y-4">
                                {['Custom UI/UX Design', 'Next.js & React Frameworks', 'Mobile-First Optimization', 'Lightning Fast Load Times'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700 font-bold">
                                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 shadow-2xl">
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-8">What We Deliver</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"><Layout className="w-6 h-6 text-blue-600" /></div>
                                    <h4 className="font-bold text-slate-900">Custom Design</h4>
                                    <p className="text-sm text-slate-500">No generic templates. Tailored to your client's brand.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center"><Code className="w-6 h-6 text-emerald-600" /></div>
                                    <h4 className="font-bold text-slate-900">Clean Code</h4>
                                    <p className="text-sm text-slate-500">Modern tech stack (React/Next.js) for scale.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center"><Smartphone className="w-6 h-6 text-purple-600" /></div>
                                    <h4 className="font-bold text-slate-900">Responsive</h4>
                                    <p className="text-sm text-slate-500">Flawless execution across all device sizes.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center"><Zap className="w-6 h-6 text-amber-600" /></div>
                                    <h4 className="font-bold text-slate-900">Speed</h4>
                                    <p className="text-sm text-slate-500">Live deployments delivered in 3 to 5 days.</p>
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
                    <Link href="/" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white bg-blue-600 hover:bg-blue-500 transition-colors">
                        Book a 15-Minute Fit Call
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
