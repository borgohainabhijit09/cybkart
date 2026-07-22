import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Server, RefreshCw, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'White-Label Website Hosting & Maintenance | CybKart Global',
    description: 'You sell the site, we keep it online. Secure managed hosting, monitoring, and ongoing updates for your agency clients.',
};

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-emerald-400' : 'text-emerald-600'}`}>
            <span className={`block w-6 h-px ${light ? 'bg-emerald-400' : 'bg-emerald-600'}`} />
            {children}
        </span>
    );
}

export default function HostingMaintenanceService() {
    return (
        <>
            <section className="relative min-h-[60vh] bg-[#030712] overflow-hidden flex items-end pb-20 pt-32">
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-emerald-600/20 blur-[120px] animate-glow-pulse" />
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.6) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <SectionLabel light>Hosting & Maintenance</SectionLabel>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mt-6 mb-6 tracking-tight leading-[1.05]">
                            You Sell The Site.<br/>
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #34d399, #10b981)' }}>
                                We Keep It Online.
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
                            Our managed hosting includes 24/7 uptime monitoring, security patching, and unlimited minor content updates—so your account managers aren't dealing with weekend server crashes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-28 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">The "We Handle The Headaches" Bundle</h2>
                            <p className="text-lg text-slate-500 mb-6 leading-relaxed font-medium">
                                The worst part of selling websites is the ongoing maintenance. Plugins break, PHP versions expire, and clients email you at 8pm on a Friday because an image isn't loading.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed font-medium mb-8">
                                CybKart Global's white-label hosting bundle completely removes this burden. We monitor uptime, handle all technical updates, and even process basic content revisions—all completely invisible to your client.
                            </p>
                            <ul className="space-y-4">
                                {['99.9% Uptime Guarantee', 'Daily Automated Backups', 'SSL Certificates Included', 'Monthly Performance Reports'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700 font-bold">
                                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 shadow-2xl">
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-8">Maintenance Features</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center"><Server className="w-6 h-6 text-emerald-600" /></div>
                                    <h4 className="font-bold text-slate-900">Secure Hosting</h4>
                                    <p className="text-sm text-slate-500">Enterprise-grade cloud infrastructure.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"><Shield className="w-6 h-6 text-blue-600" /></div>
                                    <h4 className="font-bold text-slate-900">Proactive Security</h4>
                                    <p className="text-sm text-slate-500">Continuous monitoring and patching.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center"><RefreshCw className="w-6 h-6 text-purple-600" /></div>
                                    <h4 className="font-bold text-slate-900">Content Updates</h4>
                                    <p className="text-sm text-slate-500">Unlimited minor text/image revisions.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center"><Clock className="w-6 h-6 text-amber-600" /></div>
                                    <h4 className="font-bold text-slate-900">24/7 Monitoring</h4>
                                    <p className="text-sm text-slate-500">We know if a site drops before your client does.</p>
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
                    <Link href="/" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white bg-emerald-600 hover:bg-emerald-500 transition-colors">
                        Book a 15-Minute Fit Call
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
