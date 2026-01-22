'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import {
    ArrowRight,
    CheckCircle2,
    Clock,
    Users,
    TrendingUp,
    Zap,
    Shield,
    Target,
    MessageSquare,
    Globe,
    Calendar,
    BarChart3,
    ChevronDown,
    Play,
    Sparkles,
    DollarSign,
    Rocket,
    Award,
    Lock,
    HeadphonesIcon
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';

export default function CybkartGlobalLanding() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* 1️⃣ HERO SECTION */}
            <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 dark-grid-bg opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Copy */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
                                <Sparkles className="w-4 h-4 text-blue-400" />
                                <span className="text-blue-300 text-sm font-semibold">Automation & Growth Systems</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Stop Losing Leads.{' '}
                                <span className="gradient-text">Start Scaling.</span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-relaxed mb-8">
                                We build AI-powered automation systems for US service businesses—so you can focus on growth, not manual work.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
                                >
                                    Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
                                </button>
                                <a
                                    href="#how-it-works"
                                    className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700"
                                >
                                    See How It Works
                                </a>
                            </div>

                            <p className="text-sm text-slate-400">
                                ✓ No obligation · ✓ 20–30 minutes · ✓ Clear next steps
                            </p>
                        </div>

                        {/* Right: Visual */}
                        <div className="relative">
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                        <MessageSquare className="w-8 h-8 text-blue-400" />
                                        <div>
                                            <div className="text-white font-semibold">AI Lead Capture</div>
                                            <div className="text-slate-400 text-sm">24/7 automated responses</div>
                                        </div>
                                        <CheckCircle2 className="w-6 h-6 text-green-400 ml-auto" />
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                        <Calendar className="w-8 h-8 text-purple-400" />
                                        <div>
                                            <div className="text-white font-semibold">Auto Booking</div>
                                            <div className="text-slate-400 text-sm">No back-and-forth emails</div>
                                        </div>
                                        <CheckCircle2 className="w-6 h-6 text-green-400 ml-auto" />
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                        <BarChart3 className="w-8 h-8 text-emerald-400" />
                                        <div>
                                            <div className="text-white font-semibold">CRM Integration</div>
                                            <div className="text-slate-400 text-sm">All data in one place</div>
                                        </div>
                                        <CheckCircle2 className="w-6 h-6 text-green-400 ml-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2️⃣ WHO THIS IS FOR */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Built for Growing US Businesses
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            If you're spending too much time on manual tasks instead of serving clients, we can help.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Users,
                                title: 'Service Businesses',
                                pain: 'Losing leads to slow response times',
                                outcome: 'Instant AI responses, 24/7 lead capture'
                            },
                            {
                                icon: HeadphonesIcon,
                                title: 'Clinics & Coaches',
                                pain: 'Manual booking back-and-forth',
                                outcome: 'Automated scheduling, zero admin work'
                            },
                            {
                                icon: Globe,
                                title: 'E-commerce Brands',
                                pain: 'Low website conversion rates',
                                outcome: 'High-converting sites that sell'
                            },
                            {
                                icon: Target,
                                title: 'Consultants & Agencies',
                                pain: 'Too many disconnected tools',
                                outcome: 'One unified automation system'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm mb-3">
                                    <span className="font-semibold text-red-600">Pain:</span> {item.pain}
                                </p>
                                <p className="text-slate-600 text-sm">
                                    <span className="font-semibold text-green-600">Outcome:</span> {item.outcome}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ THE PROBLEMS WE FIX */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            The Problems We Fix
                        </h2>
                        <p className="text-xl text-slate-600">
                            Real business issues. Clear solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { problem: 'Missed leads from slow response times', impact: 'Lost revenue every day' },
                            { problem: 'Hours wasted on manual follow-ups', impact: 'No time for actual work' },
                            { problem: 'Website that doesn\'t convert visitors', impact: 'Wasted ad spend' },
                            { problem: 'Too many disconnected tools', impact: 'Data chaos, no clarity' },
                            { problem: 'No automated booking system', impact: 'Email ping-pong hell' },
                            { problem: 'Can\'t scale without hiring more staff', impact: 'Growth bottleneck' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-red-300 transition-all">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="text-slate-900 font-semibold mb-2">{item.problem}</p>
                                        <p className="text-slate-600 text-sm italic">→ {item.impact}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ OUR SOLUTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Our System-Based Solutions
                        </h2>
                        <p className="text-xl text-slate-600">
                            Not just tools. Complete systems that work together.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: MessageSquare,
                                name: 'AI Chatbots & Lead Automation',
                                replaces: 'Manual lead qualification, slow email responses',
                                delivers: '24/7 instant responses, qualified leads in your CRM, zero manual work',
                                color: 'blue'
                            },
                            {
                                icon: Globe,
                                name: 'Conversion-Focused Websites',
                                replaces: 'Generic templates, slow-loading sites',
                                delivers: 'Fast, mobile-optimized sites built to convert visitors into customers',
                                color: 'purple'
                            },
                            {
                                icon: Calendar,
                                name: 'Automated Booking & CRM',
                                replaces: 'Email back-and-forth, manual calendar management',
                                delivers: 'One-click booking, automated reminders, integrated payment',
                                color: 'emerald'
                            },
                            {
                                icon: Zap,
                                name: 'Business Process Automation',
                                replaces: 'Repetitive manual tasks, disconnected workflows',
                                delivers: 'Automated workflows, integrated systems, time saved daily',
                                color: 'orange'
                            }
                        ].map((solution, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all">
                                <solution.icon className={`w-12 h-12 text-${solution.color}-600 mb-4`} />
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{solution.name}</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500 mb-1">REPLACES:</p>
                                        <p className="text-slate-700">{solution.replaces}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500 mb-1">DELIVERS:</p>
                                        <p className="text-slate-900 font-semibold">{solution.delivers}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ HOW IT WORKS */}
            <section id="how-it-works" className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-slate-600">
                            Simple 4-step process. Clear timeline. No surprises.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                step: '01',
                                title: 'Diagnose',
                                description: 'We audit your current setup, identify bottlenecks, and map your ideal workflow.',
                                timeline: 'Week 1',
                                icon: Target
                            },
                            {
                                step: '02',
                                title: 'Design',
                                description: 'Custom system blueprint tailored to your business. You approve before we build.',
                                timeline: 'Week 1-2',
                                icon: Award
                            },
                            {
                                step: '03',
                                title: 'Build',
                                description: 'We build, integrate, and test your automation system. You review at each milestone.',
                                timeline: 'Week 2-4',
                                icon: Rocket
                            },
                            {
                                step: '04',
                                title: 'Optimize',
                                description: 'Launch, monitor, and refine based on real data. Ongoing support included.',
                                timeline: 'Week 4+',
                                icon: TrendingUp
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all h-full">
                                    <div className="text-5xl font-bold text-blue-600/20 mb-4">{item.step}</div>
                                    <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 mb-4">{item.description}</p>
                                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        <Clock className="w-4 h-4" />
                                        {item.timeline}
                                    </div>
                                </div>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ PROOF & CREDIBILITY */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            See It In Action
                        </h2>
                        <p className="text-xl text-slate-600">
                            Real systems. Real results.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Demo Preview */}
                        <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center h-64 bg-slate-800/50 rounded-lg border border-slate-700 mb-4">
                                    <div className="text-center">
                                        <Play className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                                        <p className="text-white font-semibold">Watch Demo</p>
                                        <p className="text-slate-400 text-sm">See our AI chatbot in action</p>
                                    </div>
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">AI Lead Capture Demo</h3>
                                <p className="text-slate-300">Watch how our chatbot qualifies leads and books appointments automatically.</p>
                            </div>
                        </div>

                        {/* Mini Case Scenario */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <div className="mb-6">
                                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                    <CheckCircle2 className="w-4 h-4" />
                                    Case Study
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Wellness Clinic</h3>
                                <p className="text-slate-600">Los Angeles, CA</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-red-600 font-bold">❌</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Before:</p>
                                        <p className="text-slate-600 text-sm">Missing 40% of leads, 3 hours/day on booking emails</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-green-600 font-bold">✓</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">After:</p>
                                        <p className="text-slate-600 text-sm">100% lead response rate, zero manual booking, 15 hours/week saved</p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
                                    <p className="text-blue-900 font-semibold mb-2">Result:</p>
                                    <p className="text-blue-700">+$8,400/month revenue increase in 90 days</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tool Stack */}
                    <div className="mt-16 text-center">
                        <p className="text-slate-500 text-sm font-semibold mb-6">TRUSTED TECHNOLOGY STACK</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                            {['OpenAI', 'Zapier', 'Calendly', 'Stripe', 'HubSpot', 'Twilio'].map((tool, i) => (
                                <div key={i} className="text-slate-400 font-bold text-lg">{tool}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7️⃣ WHY CYBKART GLOBAL */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Why CYBKART GLOBAL?
                        </h2>
                        <p className="text-xl text-slate-300">
                            We're different. Here's how.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Zap,
                                title: 'Systems > Tools',
                                description: 'We build complete workflows, not just install plugins. Everything works together.'
                            },
                            {
                                icon: Lock,
                                title: 'No Lock-Ins',
                                description: 'You own everything. No proprietary platforms. Leave anytime (you won\'t want to).'
                            },
                            {
                                icon: DollarSign,
                                title: 'Transparent Pricing',
                                description: 'Fixed-scope projects or monthly retainers. No hidden fees. Clear ROI projections.'
                            },
                            {
                                icon: Target,
                                title: 'Built for US Businesses',
                                description: 'US time zones. English-first. We understand your market and compliance needs.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
                                <item.icon className="w-10 h-10 text-blue-400 mb-4" />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8️⃣ OFFER SECTION */}
            <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Get a Free Automation Audit
                        </h2>
                        <p className="text-xl mb-8 text-blue-100">
                            We'll analyze your current setup and show you exactly where you're losing time and money.
                        </p>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
                            <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
                            <div className="grid md:grid-cols-2 gap-4 text-left">
                                {[
                                    'Complete workflow analysis',
                                    'Bottleneck identification',
                                    'Custom automation roadmap',
                                    'ROI projections',
                                    'Tool stack recommendations',
                                    'Priority action items'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8">
                            <p className="font-semibold mb-2">This is NOT for:</p>
                            <p className="text-blue-100">
                                ❌ Businesses looking for quick fixes<br />
                                ❌ DIY enthusiasts who want to build it themselves<br />
                                ❌ Companies not ready to invest in growth
                            </p>
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl"
                        >
                            Claim Your Free Audit <ArrowRight className="w-6 h-6" />
                        </button>

                        <p className="mt-6 text-blue-100 text-sm">
                            Limited to 5 audits per month · No credit card required
                        </p>
                    </div>
                </div>
            </section>

            {/* 9️⃣ FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-slate-600">
                            Everything you need to know
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                question: 'What\'s the typical investment range?',
                                answer: 'Projects typically range from $3,000–$15,000 depending on complexity. AI chatbot systems start at $3,500. Full website + automation systems range $8,000–$15,000. We also offer monthly retainers starting at $1,500/month for ongoing optimization and support.'
                            },
                            {
                                question: 'How long does implementation take?',
                                answer: 'Most projects are completed in 3–6 weeks. Simple chatbot setups can be live in 1–2 weeks. Complex multi-system integrations may take 6–8 weeks. We provide a detailed timeline during the strategy call.'
                            },
                            {
                                question: 'What tools and platforms do you use?',
                                answer: 'We use best-in-class tools: OpenAI for AI, Zapier/Make for automation, Calendly/Cal.com for booking, Stripe for payments, HubSpot/Pipedrive for CRM, and Next.js for websites. We choose based on your needs, not vendor kickbacks.'
                            },
                            {
                                question: 'Do I need to maintain this myself?',
                                answer: 'No. We offer maintenance packages starting at $500/month that include monitoring, updates, and optimization. Or, we can train your team to manage it. You choose what works best.'
                            },
                            {
                                question: 'How do you handle data security?',
                                answer: 'We follow SOC 2 and GDPR compliance standards. All data is encrypted in transit and at rest. We use enterprise-grade tools with 99.9% uptime SLAs. We can sign NDAs and BAAs for healthcare clients.'
                            },
                            {
                                question: 'What about time zones and communication?',
                                answer: 'We operate in US time zones (EST/PST). You\'ll have a dedicated project manager available via Slack, email, or scheduled calls. Weekly progress updates are standard. Emergency support available for critical issues.'
                            },
                            {
                                question: 'Can you integrate with my existing tools?',
                                answer: 'Yes. We specialize in integrations. Whether it\'s your CRM, email platform, payment processor, or custom software—we can connect it. We\'ll audit your current stack during the discovery phase.'
                            },
                            {
                                question: 'What if I\'m not happy with the results?',
                                answer: 'We work in milestones with approval at each stage. You see progress before we move forward. If we don\'t meet agreed-upon deliverables, we\'ll make it right or refund the milestone payment. Your success is our success.'
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
                                >
                                    <span className="font-bold text-slate-900 text-lg pr-4">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-6">
                                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔟 FINAL CTA */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Ready to Stop Losing Leads?
                        </h2>
                        <p className="text-xl text-slate-300 mb-10">
                            Book a free strategy call. We'll show you exactly how automation can transform your business.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/20 hover:shadow-blue-600/40 mb-6"
                        >
                            Book Your Free Strategy Call <ArrowRight className="w-6 h-6" />
                        </button>

                        <p className="text-slate-400">
                            ✓ No obligation · ✓ 20–30 minutes · ✓ Clear next steps
                        </p>

                        <div className="mt-12 pt-12 border-t border-slate-800">
                            <p className="text-slate-500 text-sm">
                                © 2026 CYBKART GLOBAL. Built for US businesses serious about growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
