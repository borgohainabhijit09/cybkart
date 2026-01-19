import { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight,
    Calendar,
    Smartphone,
    CreditCard,
    Bell,
    Clock,
    Check,
    Layout,
    MousePointer2,
    AlertCircle,
    TrendingUp,
    Database,
    Server,
    Shield,
    Zap,
    RefreshCcw,
    Search,
    Code
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Websites & Booking Automations | CYBKART GLOBAL',
    description: 'High-converting websites with built-in booking engines. Turn visitors into paid appointments automatically.',
};

export default function WebsitesBookingPage() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Automated Operations
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Primary Booking Architecture <br />
                            <span className="text-blue-500">For Service Businesses.</span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                            We replace "brochure websites" with high-performance conversion engines.
                            Integrated booking, payments, and CRM automation in one system.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25">
                                Book Architecture Review
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        SECTION 1: WHY MOST WEBSITES FAIL 
      */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Most Business Websites Fail</h2>
                        <p className="text-lg text-slate-600">Most websites are just expensive business cards. They don't generate revenue.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                            <AlertCircle className="w-8 h-8 text-red-500 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Friction-Heavy</h3>
                            <p className="text-slate-600 text-sm">Forcing customers to "Call for Quote" or "Email us" kills 70% of potential leads instantly.</p>
                        </div>
                        <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                            <Clock className="w-8 h-8 text-red-500 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Slow & Unresponsive</h3>
                            <p className="text-slate-600 text-sm">If a site takes &gt;3 seconds to load on mobile, 53% of users abandon it immediately.</p>
                        </div>
                        <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                            <MousePointer2 className="w-8 h-8 text-red-500 mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">No Clear Logic</h3>
                            <p className="text-slate-600 text-sm">Confusing navigation and weak Calls-to-Action leave users wondering what to do next.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        SECTION 2: CONVERSION PSYCHOLOGY
      */}
            <section className="py-24 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">The Science</span>
                            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">Conversion Psychology</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                We design with specific psychological triggers to maximize trust and action.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Authority: Professional design signals competence instantly.",
                                    "Scarcity: Live calendar availability creates urgency.",
                                    "Social Proof: Strategic placement of testimonials near CTAs.",
                                    "Ease: The 'Path of Least Resistance' booking flow."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900">+400%</div>
                                    <div className="text-sm text-slate-500">Typical Conv. Rate Increase</div>
                                </div>
                            </div>
                            <p className="text-slate-600 italic">
                                "By moving to an automated booking flow, we removed the barrier to entry. Clients book while they are motivated."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        SECTION 3 & 4: ARCHITECTURE & FLOW 
      */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Booking Ecosystem Architecture</h2>
                        <p className="text-slate-600">How data moves through your new system.</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Stage 1 */}
                        <div className="flex items-start gap-6 mb-12">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">1</div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 w-full">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <Smartphone className="w-5 h-5 text-blue-600" /> User Interaction
                                </h3>
                                <p className="text-sm text-slate-600">Client visits site, views services, selects a time slot on the live calendar.</p>
                            </div>
                        </div>

                        {/* Connecting Line */}
                        <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-slate-200 -z-0"></div>

                        {/* Stage 2 */}
                        <div className="flex items-start gap-6 mb-12">
                            <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">2</div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 w-full">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <Database className="w-5 h-5 text-slate-900" /> Validation & Payment
                                </h3>
                                <p className="text-sm text-slate-600">System checks real-time availability (preventing double bookings), processes deposit via Stripe, and locks the slot.</p>
                            </div>
                        </div>

                        {/* Stage 3 */}
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">3</div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 w-full">
                                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <Bell className="w-5 h-5 text-green-600" /> Notifications & CRM
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Confirmation email/SMS sent to client.
                                    <br />Calendar event created for staff.
                                    <br />Client profile updated in CRM with booking history.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        SECTION 6 & 7: STANDARDS & TECH STACK 
      */}
            <section className="py-24 bg-[#0F172A] text-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Standards */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Performance Standards</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Zap className="w-6 h-6 text-yellow-400 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg">Sub-Second Loads</h3>
                                        <p className="text-slate-400 text-sm">We aim for perfect lighthouse scores. Speed is a ranking factor.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Search className="w-6 h-6 text-blue-400 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg">Technical SEO Built-In</h3>
                                        <p className="text-slate-400 text-sm">Semantic HTML, Schema markup, and meta tags are standard, not addons.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Shield className="w-6 h-6 text-green-400 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg">Security First</h3>
                                        <p className="text-slate-400 text-sm">SSL, secure headers, and protected API routes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Code className="w-5 h-5 text-blue-400" /> Our Tech Stack
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {['Next.js 14', 'React Server Components', 'Tailwind CSS', 'Stripe Payments', 'PostgreSQL', 'Vercel Edge Network'].map((tech) => (
                                    <div key={tech} className="bg-white/10 px-4 py-2 rounded text-sm text-center border border-white/5">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        SECTION 8: CASE SCENARIOS 
      */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Real World Applications</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Clinic */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="uppercase text-xs font-bold text-blue-600 mb-2">The Clinic</div>
                            <h3 className="font-bold text-slate-900 mb-4">Dental & Medical</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                <strong>Problem:</strong> Front desk overwhelmed with calls. No-shows costing $2k/mo.
                            </p>
                            <p className="text-slate-600 text-sm">
                                <strong>Solution:</strong> Automated reminders reduced no-shows by 80%. Patients book follow-ups via SMS link.
                            </p>
                        </div>

                        {/* Coach */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="uppercase text-xs font-bold text-indigo-600 mb-2">The Coach</div>
                            <h3 className="font-bold text-slate-900 mb-4">Fitness & Life Coaching</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                <strong>Problem:</strong> Spending 10 hours/week scheduling zoom calls via email.
                            </p>
                            <p className="text-slate-600 text-sm">
                                <strong>Solution:</strong> Clients buy packages online. Calendar only shows free slots. Zoom link auto-generated.
                            </p>
                        </div>

                        {/* Consultant */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="uppercase text-xs font-bold text-emerald-600 mb-2">The Consultant</div>
                            <h3 className="font-bold text-slate-900 mb-4">Legal & Financial</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                <strong>Problem:</strong> Unqualified leads wasting free consultation time.
                            </p>
                            <p className="text-slate-600 text-sm">
                                <strong>Solution:</strong> Intake form required before booking. $50 deposit filters out non-serious clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        SECTION 9 & 10: PROCESS & MAINTENANCE 
      */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Timeline */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">4-Week Deployment</h2>
                            <ul className="space-y-6">
                                {[
                                    { week: "Week 1", title: "Strategy & Wireframes", desc: "Mapping your service menu and conversion flows." },
                                    { week: "Week 2", title: "Development", desc: "Building the Next.js core and booking integrations." },
                                    { week: "Week 3", title: "Payment & Testing", desc: "Connecting Stripe and stress-testing calendar sync." },
                                    { week: "Week 4", title: "Launch & Training", desc: "Live deployment + training your staff on the dashboard." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="font-bold text-blue-600 whitespace-nowrap w-20">{step.week}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{step.title}</h4>
                                            <p className="text-sm text-slate-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </div>

                        {/* Maintenance */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <RefreshCcw className="w-6 h-6 text-slate-700" /> Active Maintenance
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Software needs care. We don't just hand over the keys and vanish. Our monthly support ensures your booking engine never stalls.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2 text-sm text-slate-700"><Check className="w-4 h-4 text-green-500" /> API Updates (Google/Stripe)</li>
                                <li className="flex items-center gap-2 text-sm text-slate-700"><Check className="w-4 h-4 text-green-500" /> Security Patching</li>
                                <li className="flex items-center gap-2 text-sm text-slate-700"><Check className="w-4 h-4 text-green-500" /> Performance Monitoring</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        SECTION 11: FAQs 
      */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Common Questions</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "Why custom development over Wix/Squarespace?",
                                    a: "Templates are bloated and slow. Our custom Next.js builds are significantly faster, rank better on Google, and allow for unrestricted custom logic that templates simply can't handle."
                                },
                                {
                                    q: "Can I edit content myself?",
                                    a: "Yes. We connect a Headless CMS (like Sanity or Strapi) so you can easily update text, images, and prices without touching code."
                                },
                                {
                                    q: "Does this replace my receptionist?",
                                    a: "It augments them. It handles the routine 80% of booking tasks, freeing your human staff to handle complex customer service and in-person experiences."
                                },
                                {
                                    q: "What are the ongoing costs?",
                                    a: "Aside from our maintenance fee, you'll have standard hosting (Vercel/AWS) and domain costs. We optimize architecture to keep infrastructure bills under $50/mo for most small businesses."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
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
                title="Stop Losing Revenue to Friction"
                description="Book a technical audit. We'll show you exactly where your current site is leaking leads."
                buttonText="Schedule Audit"
            />
        </>
    );
}
