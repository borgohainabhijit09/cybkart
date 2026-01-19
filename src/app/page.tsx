import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  Globe,
  ShoppingCart,
  Target,
  Zap,
  BarChart3,
  Shield,
  Search,
  Layout,
  LineChart,
  Database,
  Layers,
  ChevronRight,
  Code2,
  Terminal,
  Activity,
  Clock
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      {/* 
        HERO SECTION 
        Style: Dark Enterprise Tech
        Purpose: Immediate Authority
      */}
      <section className="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden border-b border-gray-800">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                System-First Agency
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Digital Systems That <br />
                <span className="gradient-text-light">Drive Revenue.</span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                We don't just build websites. We architect enterprise-grade AI, automation, and web ecosystems for ambitious US businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
                  Book Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/case-scenarios" className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  View Case Studies
                </Link>
              </div>

              <div className="pt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  Enterprise Security
                </span>
                <span className="flex items-center gap-2">
                  <Layout className="w-4 h-4 text-blue-500" />
                  AI Native
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-500" />
                  US Optimized
                </span>
              </div>
            </div>

            {/* Right Visual - Abstract System Visualization */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-xl bg-slate-900 border border-slate-700/50 shadow-2xl p-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none"></div>
                <div className="bg-[#0B1121] rounded-lg p-6 space-y-6 relative">
                  {/* Mock Dashboard UI */}
                  <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                    </div>
                    <div className="text-xs text-slate-500 font-mono">system_status: active</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                      <div className="text-slate-400 text-xs mb-1">Total Conversions</div>
                      <div className="text-2xl font-bold text-white">1,284</div>
                      <div className="text-emerald-500 text-xs flex items-center mt-1">
                        <Activity className="w-3 h-3 mr-1" /> +12.5%
                      </div>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                      <div className="text-slate-400 text-xs mb-1">Avg. Response</div>
                      <div className="text-2xl font-bold text-white">0.3s</div>
                      <div className="text-blue-500 text-xs mt-1">AI Optimized</div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <Terminal className="w-3 h-3" />
                      <span className="text-blue-400">&gt;&gt;</span> Initializing AI agent...
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <Terminal className="w-3 h-3" />
                      <span className="text-blue-400">&gt;&gt;</span> Optimization complete.
                    </div>
                    <div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-blue-500 w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-6 -bottom-6 bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-xl max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Revenue Automated</div>
                    <div className="text-slate-400 text-xs">System saved 42hrs of manual work this week.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        PROBLEMS SECTION 
        Style: Clean, Minimalist Grid
      */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              The Digital Bottleneck
            </h2>
            <p className="text-lg text-slate-600">
              Most businesses are held back by disconnected tools and manual processes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Layers,
                title: "Tool Chaos",
                desc: "Apps that don't talk to each other create data silos and confusion."
              },
              {
                icon: Clock,
                title: "Manual Waste",
                desc: "Valuable team time lost to data entry, scheduling, and repetitive tasks."
              },
              {
                icon: Target,
                title: "Missed Leads",
                desc: "Slow response times cost you 67% of potential new business."
              },
              {
                icon: Layout,
                title: "Poor UX",
                desc: "Confusing website designs that frustrate users and kill conversions."
              }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                  <item.icon className="w-6 h-6 text-slate-700 group-hover:text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        SOLUTIONS SECTION 
        Style: Bento Grid
      */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Our Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Enterprise Architecture for Growth
              </h2>
            </div>
            <Link href="/services" className="text-blue-600 font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform">
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

            {/* AI Automation - Large Card */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 min-h-[320px]">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                <Brain className="w-64 h-64 text-blue-600" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">AI Automation & Chatbots</h3>
                  <p className="text-slate-600 max-w-md leading-relaxed">
                    Intelligent agents that handle customer service, booking, and sales 24/7.
                    Reduce operational costs by 60% and eliminate response delays.
                  </p>
                </div>
                <Link href="/services/ai-automation" className="inline-flex items-center text-blue-600 font-medium mt-8 group-hover:gap-2 transition-all">
                  View Architecture <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Websites - Standard Card */}
            <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 min-h-[320px]">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                    <Layout className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Websites + Booking</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Conversion-focused sites with integrated scheduling. Turn visitors into bookings instantly.
                  </p>
                </div>
                <Link href="/services/websites-booking" className="inline-flex items-center text-cyan-600 font-medium group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* E-Commerce - Standard Card */}
            <div className="relative group overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 min-h-[320px]">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                    <ShoppingCart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">E-Commerce</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    High-performance stores built on Shopify or custom stacks. Optimized for scale.
                  </p>
                </div>
                <Link href="/services/ecommerce" className="inline-flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Digital Marketing - Wide Card */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-[#0F172A] p-8 hover:shadow-xl transition-all duration-300 text-white min-h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                    <LineChart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Digital Marketing</h3>
                  <p className="text-slate-400 max-w-lg leading-relaxed">
                    Data-driven campaigns. We track every click, conversion, and dollar to ensure positive ROI across Google, Meta, and LinkedIn.
                  </p>
                </div>
                <Link href="/services/digital-marketing" className="inline-flex items-center text-white font-medium mt-6 group-hover:gap-2 transition-all">
                  View Strategies <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        HOW WE WORK 
        Style: Horizontal Process Steps
      */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The System Methodology</h2>
            <p className="text-slate-600">Our engineering approach to business growth.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-slate-100"></div>

            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {[
                { step: "01", title: "Diagnose", icon: Search, desc: "We audit your current systems, identifying bottlenecks and revenue leaks." },
                { step: "02", title: "Design", icon: Code2, desc: "Architecting a custom solution tailored to your specific operational needs." },
                { step: "03", title: "Build", icon: Database, desc: "Rapid deployment using enterprise-grade frameworks and best practices." },
                { step: "04", title: "Optimize", icon: LineChart, desc: "Continuous data analysis and refinement to maximize ROI over time." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 relative pt-4 text-center">
                  <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-sm relative z-20">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        PROOF & TOOL STACK
      */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Built on Modern Primitives</h2>
              <p className="text-lg text-slate-600 mb-8">
                We leverage the most powerful technologies available to build independent, scalable systems for your business.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "AI Models", val: "GPT-4 & Claude" },
                  { label: "Framework", val: "Next.js 15" },
                  { label: "Infrastructure", val: "Vercel / AWS" },
                  { label: "Payments", val: "Stripe Connect" },
                ].map((stat, i) => (
                  <div key={i} className="border border-slate-200 bg-white p-4 rounded-lg">
                    <div className="text-xs text-slate-400 font-semibold uppercase">{stat.label}</div>
                    <div className="font-mono text-slate-900 font-medium mt-1">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Industries We Serve
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Healthcare & Clinics', 'Legal & Professional', 'E-Commerce Brands', 'Marketing Agencies', 'SaaS Companies', 'Local Services'].map((ind, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-default">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-slate-700 font-medium">{ind}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-200">
                <Link href="/case-scenarios" className="text-slate-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  See Real Client Results <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        FINAL CTA 
      */}
      <CTASection
        title="Stop Leaking Revenue."
        description="Book a free diagnosis. We'll identify your system bottlenecks and propose a custom automation roadmap."
        buttonText="Book Diagnosis Call"
      />
    </>
  );
}
