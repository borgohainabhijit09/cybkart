import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Bot, Workflow, Database, Cpu } from 'lucide-react';

export const metadata: Metadata = {
    title: 'White-Label Light AI-Automation | CybKart Global',
    description: 'Upsell your clients on cutting-edge AI features. We deploy smart lead capture bots and automated CRM workflows on top of any site.',
};

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-cyan-400' : 'text-cyan-600'}`}>
            <span className={`block w-6 h-px ${light ? 'bg-cyan-400' : 'bg-cyan-600'}`} />
            {children}
        </span>
    );
}

export default function AIAutomationService() {
    return (
        <>
            <section className="relative min-h-[60vh] bg-[#030712] overflow-hidden flex items-end pb-20 pt-32">
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-cyan-600/20 blur-[120px] animate-glow-pulse" />
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <SectionLabel light>Light AI-Automation</SectionLabel>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mt-6 mb-6 tracking-tight leading-[1.05]">
                            Smart Features.<br/>
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee, #0891b2)' }}>
                                Easy Upsells.
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
                            Upsell your clients on cutting-edge AI features without needing an AI specialist on payroll. We deploy smart lead capture bots and automated CRM workflows.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-28 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Add Revenue to Every Build</h2>
                            <p className="text-lg text-slate-500 mb-6 leading-relaxed font-medium">
                                "AI" is the biggest buzzword in marketing right now. Your clients are asking for it, but building custom LLM integrations or complex automations is out of scope for most agencies.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed font-medium mb-8">
                                We make it simple. We can add light AI automation—like intelligent customer support bots trained on the client's data, or automated lead-routing workflows—on top of any site we build for you.
                            </p>
                            <ul className="space-y-4">
                                {['Custom-Trained Chatbots', 'CRM Lead Routing', 'Automated Email Workflows', 'Easy Agency Upsells'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700 font-bold">
                                        <CheckCircle className="w-5 h-5 text-cyan-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 shadow-2xl">
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-8">Automation Offerings</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center"><Bot className="w-6 h-6 text-cyan-600" /></div>
                                    <h4 className="font-bold text-slate-900">AI Chatbots</h4>
                                    <p className="text-sm text-slate-500">Trained on client documentation.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"><Workflow className="w-6 h-6 text-blue-600" /></div>
                                    <h4 className="font-bold text-slate-900">Workflows</h4>
                                    <p className="text-sm text-slate-500">Connect the site to Zapier/Make.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center"><Database className="w-6 h-6 text-emerald-600" /></div>
                                    <h4 className="font-bold text-slate-900">CRM Sync</h4>
                                    <p className="text-sm text-slate-500">Send leads directly to HubSpot/Salesforce.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center"><Cpu className="w-6 h-6 text-purple-600" /></div>
                                    <h4 className="font-bold text-slate-900">Processing</h4>
                                    <p className="text-sm text-slate-500">Automate tedious data entry tasks.</p>
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
                    <Link href="/" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white bg-cyan-600 hover:bg-cyan-500 transition-colors">
                        Book a 15-Minute Fit Call
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
