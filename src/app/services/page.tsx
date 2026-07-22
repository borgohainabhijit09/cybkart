import { Metadata } from 'next';
import Link from 'next/link';
import { Bot, ArrowRight, Check, Layout, Server, ShieldCheck } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'White-Label Agency Services | CybKart Global',
    description: 'We offer full-service white-label website design, hosting, and AI-automation for marketing agencies.',
};

const services = [
    {
        title: 'Website Design & Development',
        description: 'Premium, high-performance websites built on modern frameworks (React/Next.js) delivered in 3-5 days. You handle the client, we handle the code.',
        icon: Layout,
        href: '/services/website-design',
        badge: 'Core Service',
        features: [
            'Custom UI/UX Design',
            'Mobile-First Optimization',
            'Lightning Fast Load Times',
            'Clean, Scalable Code architecture'
        ]
    },
    {
        title: 'Hosting & Maintenance',
        description: 'The "We handle the headaches" bundle. We monitor uptime, handle all technical updates, and process basic content revisions entirely behind the scenes.',
        icon: Server,
        href: '/services/hosting-maintenance',
        badge: 'Recurring',
        features: [
            '99.9% Uptime Guarantee',
            'Proactive Security & Patching',
            'Unlimited Minor Content Updates',
            'Daily Automated Backups'
        ]
    },
    {
        title: 'White-Label Delivery',
        description: 'An invisible infrastructure provider for your agency. We work strictly backstage with wholesale pricing designed to maximize your markup potential.',
        icon: ShieldCheck,
        href: '/services/white-label-delivery',
        badge: 'Partnership',
        features: [
            'Zero Client-Facing Contact',
            'Strict Non-Disclosure Agreements',
            'Your Agency Owns the Code',
            'Wholesale Partner Pricing Tiers'
        ]
    },
    {
        title: 'Light AI-Automation',
        description: 'Easy upsells for your clients. Add custom-trained support bots and automated CRM lead routing to any site without hiring an in-house AI specialist.',
        icon: Bot,
        href: '/services/ai-automation',
        badge: 'Upsell',
        features: [
            'Custom-Trained AI Chatbots',
            'CRM Lead Routing Workflows',
            'Automated Email Sequences',
            'Data Processing Automation'
        ]
    }
];

export default function ServicesPage() {
    return (
        <>
            <section className="relative bg-[#0F172A] py-24 overflow-hidden border-b border-slate-800 pt-32">
                <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                            Your Complete <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">Technical Department</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
                            We take the entire technical burden off your plate. From custom builds to ongoing hosting and AI upsells, our wholesale services let your agency scale without scaling payroll.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="space-y-8">
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.href}
                                    className="group bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                                >
                                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between">
                                                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                                                    <Icon className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors" />
                                                </div>
                                                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                                    {service.badge}
                                                </span>
                                            </div>

                                            <div>
                                                <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                                                    {service.title}
                                                </h2>
                                                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                                                    {service.description}
                                                </p>
                                            </div>

                                            <Link
                                                href={service.href}
                                                className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg group-hover:gap-3 transition-all pt-2"
                                            >
                                                Explore Service <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>

                                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                                            <h3 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                                                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                                                Service Details
                                            </h3>
                                            <ul className="grid sm:grid-cols-1 gap-y-4">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="mt-1 w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                                                            <Check className="w-3 h-3 text-blue-600" />
                                                        </div>
                                                        <span className="text-slate-600 text-sm font-bold">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to Expand Your Capabilities?"
                description="Your dedicated engineering team is waiting. Let's discuss how we can integrate into your agency's workflow."
                buttonText="Book a 15-Minute Fit Call"
            />
        </>
    );
}
