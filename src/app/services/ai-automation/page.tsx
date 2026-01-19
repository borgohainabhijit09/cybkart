import { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight,
    MessageCircle,
    Calendar,
    ShieldCheck,
    Clock,
    Users,
    Headphones,
    Check,
    PlayCircle
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'AI Customer Service Agents | CYBKART GLOBAL',
    description: 'Automate your customer support and bookings with intelligent AI agents that work 24/7.',
};

export default function AIAutomationPage() {
    return (
        <>
            {/* 
        HERO SECTION 
        Style: Clean & Direct
      */}
            <section className="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            24/7 Automated Support
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Never Miss a Customer <br />
                            <span className="text-blue-500">Message Again.</span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                            Stop losing business to missed calls and slow email replies.
                            Our AI agents answer questions, book appointments, and capture leads instantly—day or night.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25">
                                See How It Works
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/case-scenarios" className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all">
                                View Examples
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        HOW IT WORKS 
        Style: Simple Steps
      */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
                        <p className="text-lg text-slate-600">Three simple steps to automate your customer service.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Step 1 */}
                        <div className="text-center relative z-10">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                                <MessageCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Connects</h3>
                            <p className="text-slate-600 leading-relaxed">
                                The AI connects to your website chat, WhatsApp, SMS, and Email. It's ready to listen wherever your customers are.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center relative z-10">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                                <PlayCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Understands</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We train it on <strong>your</strong> business info. It knows your prices, services, and policies perfectly—just like your best employee.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center relative z-10">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                                <Check className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Solves</h3>
                            <p className="text-slate-600 leading-relaxed">
                                It doesn't just chat. It can book appointments on your calendar, verify availability, and collect customer details automatically.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        BENEFITS GRID
        Style: Simple & Relatable
      */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Business Owners Love It</h2>
                        <p className="text-slate-600">Real problems solved, without the technical headache.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Clock,
                                title: "Instant Responses",
                                desc: "Customers hate waiting. Your AI replies in 2 seconds, keeping leads hot and customers happy."
                            },
                            {
                                icon: Calendar,
                                title: "Books Appointments",
                                desc: "Wake up to a full calendar. The AI handles the back-and-forth scheduling for you."
                            },
                            {
                                icon: Users,
                                title: "Qualifies Leads",
                                desc: "Stop wasting time on bad leads. The AI asks the right questions before you ever hop on a call."
                            },
                            {
                                icon: ShieldCheck,
                                title: "100% Secure",
                                desc: "Your data is safe. We use enterprise-grade security to protect your business information."
                            },
                            {
                                icon: Headphones,
                                title: "24/7 Availability",
                                desc: "Your business is now open 24/7. Capture night-owl customers while you sleep."
                            },
                            {
                                icon: MessageCircle,
                                title: "Works Everywhere",
                                desc: "One system handles your Website chat, Facebook Messenger, and Instagram DMs."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-6 border border-slate-200 rounded-xl hover:shadow-md transition-all duration-200">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 
        FAQ SECTION
        Style: Plain English
      */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Common Questions</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "Will it sound like a robot?",
                                    a: "No. It uses advanced language tools to speak naturally, just like a human assistant. Most customers won't even know it's AI."
                                },
                                {
                                    q: "What if it doesn't know the answer?",
                                    a: "It will politely say it doesn't know and offer to connect the customer with a human staff member. It never guesses."
                                },
                                {
                                    q: "Is it hard to set up?",
                                    a: "Not at all. We handle the entire setup for you. We just need your website URL and some basic business info to train it."
                                },
                                {
                                    q: "Can I see chat logs?",
                                    a: "Yes. You have a simple dashboard where you can read every conversation and see exactly what the AI is doing."
                                }
                            ].map((item, i) => (
                                <div key={i} className="border border-slate-200 rounded-lg p-6">
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
                title="Ready to Save Time?"
                description="Book a quick 15-minute demo. We'll show you exactly how this can work for your business."
                buttonText="Get a Free Demo"
            />
        </>
    );
}
