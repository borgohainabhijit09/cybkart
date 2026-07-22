import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Recent Work | CYBKART GLOBAL',
    description: 'Verified projects and deployments built by our white-label engineering team.',
};

const RECENT_WORK = [
    {
        title: 'Julie Hull Landscape Design',
        url: 'https://juliehulllandscapedesign.ca',
        description: 'Custom design & build for a landscape design studio in Ontario, Canada. Full design + build, delivered in under a week.',
        image: '/images/julie-hull.jpg',
        features: ['Custom Web Design', 'Lead Generation Focus', 'Mobile-First Layout', 'Rapid 5-Day Delivery']
    }
];

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-blue-400' : 'text-blue-600'}`}>
            <span className={`block w-6 h-px ${light ? 'bg-blue-400' : 'bg-blue-600'}`} />
            {children}
        </span>
    );
}

export default function RecentWorkPage() {
    return (
        <>
            <section className="relative min-h-[50vh] bg-[#030712] overflow-hidden flex items-center pt-32 pb-20">
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[120px] animate-glow-pulse" />
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(99,102,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.6) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <SectionLabel light>Portfolio</SectionLabel>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mt-4 mb-6 tracking-tight leading-[1.05]">
                            Recent <br />
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                                Deployments.
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed">
                            Real, verifiable work delivered for our agency partners. No placeholder stats, just live deployments built for performance.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="space-y-16">
                        {RECENT_WORK.map((project, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                                <div className="grid lg:grid-cols-2">
                                    <div className="relative h-[300px] lg:h-auto overflow-hidden bg-slate-100">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
                                    </div>
                                    <div className="p-10 lg:p-14 flex flex-col justify-center">
                                        <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">{project.title}</h2>
                                        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                                            {project.description}
                                        </p>
                                        
                                        <ul className="space-y-3 mb-10">
                                            {project.features.map((feature, fi) => (
                                                <li key={fi} className="flex items-center gap-3">
                                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                    <span className="text-slate-700 font-bold">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div>
                                            <a 
                                                href={project.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md"
                                            >
                                                View Live Site
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Have a build in the pipeline?"
                description="Send us the brief and let's get it live in 3-5 days."
                buttonText="Book a 15-Minute Fit Call"
            />
        </>
    );
}
