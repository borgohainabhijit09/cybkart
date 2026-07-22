'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  Brain,
  Globe,
  Target,
  Zap,
  Shield,
  Layout,
  Clock,
  TrendingUp,
  Banknote,
  Frown,
  MonitorDot,
  Eye,
  Rocket,
  PhoneCall,
  Star,
  CalendarCheck,
  Code2,
  CheckCircle,
  Sparkles,
  Play,
  ChevronDown,
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';

// ─── Data ─────────────────────────────────────────────────────────────────────







const SERVICES = [
  {
    title: 'Website Design & Development',
    desc: 'Custom-built, mobile-first sites — live in 3–5 days.',
    icon: Layout,
    href: '/services/website-design',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    glow: 'group-hover:shadow-blue-500/20',
  },
  {
    title: 'Hosting & Maintenance',
    desc: 'We manage uptime, updates, and support so you don\'t have to.',
    icon: Shield,
    href: '/services/hosting-maintenance',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    glow: 'group-hover:shadow-emerald-500/20',
  },
  {
    title: 'White-Label Delivery',
    desc: 'Fully under your agency\'s brand — zero client-facing exposure for us.',
    icon: Target,
    href: '/services/white-label-delivery',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    glow: 'group-hover:shadow-purple-500/20',
  },
  {
    title: 'Light AI-Automation',
    desc: 'Lead capture, chatbots, and workflow automation add-ons on top of any site.',
    icon: Brain,
    href: '/services/ai-automation',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    glow: 'group-hover:shadow-rose-500/20',
  },
];

const WHY_CYBKART = [
  {
    title: 'Speed',
    desc: 'Live sites in 3–5 days, not months.',
    icon: Zap,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    title: 'Pricing Built for Reselling',
    desc: 'Our cost structure leaves you real margin, even at competitive client rates.',
    icon: Banknote,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    title: 'Direct Communication',
    desc: 'No account-manager bottleneck — you talk straight to the people building.',
    icon: PhoneCall,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    title: 'US Strategy, Global Engineering',
    desc: 'Client-facing coordination from the US, full-stack build from our engineering team in Bangalore — meaning work keeps moving while your team sleeps.',
    icon: Globe,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
];



// ─── Small Components ─────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 12 12" fill="none">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GradientBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-start sm:items-center gap-2 px-4 py-2 sm:py-1.5 rounded-2xl sm:rounded-full text-xs font-bold uppercase tracking-[0.15em] border border-blue-500/30 bg-blue-500/10 text-blue-400 w-fit text-left">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0 mt-1 sm:mt-0" />
      <span>{children}</span>
    </div>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-blue-400' : 'text-blue-600'}`}>
      <span className={`block w-6 h-px ${light ? 'bg-blue-400' : 'bg-blue-600'}`} />
      {children}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ══════════════════════════════════════════════════════════════
          HERO — Cinematic Dark
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-[#030712] overflow-hidden flex flex-col">

        {/* Abstract Background Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[120px] animate-glow-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-[80px] animate-glow-pulse" style={{ animationDelay: '3s' }} />

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(99,102,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.6) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Radial vignette */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, #030712 100%)' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 items-center">

            {/* ── LEFT COLUMN: Content ───────────────────────────── */}
            <div className="relative lg:col-span-7 xl:col-span-7">
              <div className="flex flex-col gap-7">
                <GradientBadge>WHITE-LABEL DEVELOPMENT PARTNER FOR MARKETING AGENCIES</GradientBadge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
                  We Build the Websites{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa, #34d399)' }}
                  >
                    Your Agency Sells
                  </span>
                </h1>

                <p className="text-lg text-slate-400 leading-relaxed max-w-lg font-medium">
                  Custom sites, hosting, and light AI-automation — delivered under your brand, in 3–5 days. Your client only ever sees one agency: yours.
                </p>

                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] whitespace-nowrap"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                  >
                    <span className="relative z-10">Book a 15-Minute Fit Call</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)' }} />
                  </button>

                  <a
                    href="#partnership"
                    className="inline-flex items-center gap-2 font-bold text-base text-white hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    See How the Partnership Works ↓
                  </a>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Visuals ──────────────────────────── */}
            <div className="relative h-[420px] lg:h-[500px] flex items-center justify-center lg:col-span-5 xl:col-span-5">
              <div className="relative w-full max-w-sm">
                {/* Glow */}
                <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full" />
                <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-6 shadow-2xl rotate-1 animate-float">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 mb-5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                    <div className="flex-1 mx-3 h-5 rounded bg-white/5 flex items-center px-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5" />
                      <div className="h-1.5 w-20 bg-white/10 rounded" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-24 bg-gradient-to-r from-blue-600/30 to-violet-600/30 rounded-xl flex items-center justify-center border border-white/5">
                      <Globe className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                    <div className="h-8 w-1/3 bg-blue-600/40 rounded-lg" />
                  </div>
                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-xl shadow-lg">
                    White-Label ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="relative z-10 flex justify-center pb-8 text-white/20">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — The Problem
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Light diagonal accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-50 blur-[100px] opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-50 blur-[100px] opacity-60 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <SectionLabel>The Problem</SectionLabel>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight mb-10">
              Strong on Strategy.{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                Stretched Thin on Build.
              </span>
            </h2>

            <div className="space-y-6 text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
              <p>
                Most agencies are great at campaigns, positioning, and client relationships — but either don't have in-house dev capacity, or don't want client-facing site builds eating account managers' time.
              </p>
              <p>
                That's where we sit. You keep the client relationship and the brand. We handle build, hosting, and ongoing maintenance — quietly, under your name.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — How the Partnership Works
      ═══════════════════════════════════════════════════════════════ */}
      <section id="partnership" className="py-28 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <SectionLabel light>How the Partnership Works</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight leading-tight">
              Your client only ever sees one agency —{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                yours.
              </span>
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-500/20 via-violet-500/40 to-emerald-500/20" />

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
              {/* Node 1 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full bg-slate-900 border-2 border-blue-500/30 flex items-center justify-center mb-8 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] group-hover:scale-105 group-hover:border-blue-400 transition-all duration-500 relative z-10">
                  <Target className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">Your Agency</h3>
                <p className="text-slate-400 font-medium leading-relaxed max-w-[260px]">
                  Owns the client relationship, brand, and strategy.
                </p>
                {/* Mobile Connector */}
                <div className="lg:hidden h-12 w-[2px] bg-gradient-to-b from-blue-500/30 to-violet-500/30 mt-8" />
              </div>

              {/* Node 2 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full bg-slate-900 border-2 border-violet-500/30 flex items-center justify-center mb-8 shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] group-hover:scale-105 group-hover:border-violet-400 transition-all duration-500 relative z-10">
                  <Code2 className="w-12 h-12 text-violet-400" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">CybKart Global</h3>
                <p className="text-slate-400 font-medium leading-relaxed max-w-[260px]">
                  Builds, hosts, and maintains the site — invisibly, under a white-label agreement.
                </p>
                {/* Mobile Connector */}
                <div className="lg:hidden h-12 w-[2px] bg-gradient-to-b from-violet-500/30 to-emerald-500/30 mt-8" />
              </div>

              {/* Node 3 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full bg-slate-900 border-2 border-emerald-500/30 flex items-center justify-center mb-8 shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] group-hover:scale-105 group-hover:border-emerald-400 transition-all duration-500 relative z-10">
                  <Rocket className="w-12 h-12 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">Live Client Site</h3>
                <p className="text-slate-400 font-medium leading-relaxed max-w-[260px]">
                  Delivered in 3–5 days, live under your agency's name.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-white font-bold tracking-wide shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
              <Sparkles className="w-5 h-5 text-blue-400 relative z-10" />
              <span className="relative z-10">Client sees only you, start to finish.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — What We Handle For You
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 max-w-3xl">
            <SectionLabel light>Services</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              What We Handle{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                For You
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <Link
                href={service.href}
                key={i}
                className={`group relative bg-white/[0.03] border border-white/8 rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${service.glow} block`}
              >
                <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-7 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-3 tracking-tight">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{service.desc}</p>

                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase text-white/20 group-hover:text-blue-400 transition-colors">
                  <div className="w-6 h-px bg-white/20 group-hover:bg-blue-400 group-hover:w-10 transition-all" />
                  Explore Service
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 relative overflow-hidden rounded-3xl p-10 md:p-12" style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #6d28d9 100%)' }}>
            <div className="absolute inset-0 dark-grid-bg opacity-[0.08]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-1">Scale your agency's web offerings today</h3>
                <p className="text-blue-200 font-medium">Book a 15-minute fit call to discuss our white-label process.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl cursor-pointer"
              >
                Book a 15-Minute Fit Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — Why Agencies Partner With Us
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 blur-[100px] opacity-80 rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 max-w-3xl">
            <SectionLabel>Partnership Benefits</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Why Agencies{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                Partner With Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-7">
            {WHY_CYBKART.map((item, i) => (
              <div
                key={i}
                className="group flex gap-5 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-200/80 hover:bg-blue-50/30 hover:shadow-xl transition-all duration-400"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 tracking-tight leading-snug">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8 opacity-50">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-slate-700 font-bold text-xs uppercase tracking-widest">USA Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇨🇦</span>
                <span className="text-slate-700 font-bold text-xs uppercase tracking-widest">Canada HQ</span>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-bold text-base text-white cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97]"
              style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
            >
              Join the Ecosystem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — How We Work (Process)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-100/50 blur-[100px] rounded-full opacity-80 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 max-w-3xl">
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
              From Kickoff to{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                Live Site
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Progress line */}
            <div className="hidden lg:block absolute top-[56px] left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] h-px bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 opacity-30" />

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="group text-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8rem] font-black text-slate-200/50 pointer-events-none select-none leading-none z-0">
                  01
                </div>
                <div className="relative mx-auto w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-blue-500/20 z-10">
                  <MonitorDot className="w-11 h-11 text-white" />
                  <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-slate-800 font-black text-sm shadow-md">
                    01
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight relative z-10">Brief</h3>
                <p className="text-slate-500 leading-relaxed max-w-[260px] mx-auto font-medium relative z-10">
                  You send us the client's requirements and brand assets.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group text-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8rem] font-black text-slate-200/50 pointer-events-none select-none leading-none z-0">
                  02
                </div>
                <div className="relative mx-auto w-28 h-28 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:-rotate-3 transition-all duration-500 shadow-2xl shadow-violet-500/20 z-10">
                  <Code2 className="w-11 h-11 text-white" />
                  <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-slate-800 font-black text-sm shadow-md">
                    02
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight relative z-10">Build</h3>
                <p className="text-slate-500 leading-relaxed max-w-[260px] mx-auto font-medium relative z-10">
                  We design and build the site, with progress check-ins along the way.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group text-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8rem] font-black text-slate-200/50 pointer-events-none select-none leading-none z-0">
                  03
                </div>
                <div className="relative mx-auto w-28 h-28 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-emerald-500/20 z-10">
                  <Rocket className="w-11 h-11 text-white" />
                  <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-slate-800 font-black text-sm shadow-md">
                    03
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight relative z-10">Launch</h3>
                <p className="text-slate-500 leading-relaxed max-w-[260px] mx-auto font-medium relative z-10">
                  Live in 3–5 days, under your agency's name — you handle the client handoff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — Recent Work
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-[0.04] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 max-w-3xl">
            <SectionLabel light>Portfolio</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Recent{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                Work
              </span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Featured Project Card */}
            <div className="group relative bg-white/[0.03] border border-white/8 rounded-[2.5rem] p-8 md:p-12 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-500 overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Left Content */}
              <div className="lg:w-1/2 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Live Project</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  Julie Hull Landscape Design
                </h3>
                <a href="https://juliehulllandscapedesign.ca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors mb-8 group-hover:underline">
                  <Globe className="w-4 h-4" />
                  juliehulllandscapedesign.ca
                </a>
                
                <p className="text-lg text-slate-400 leading-relaxed font-medium mb-8">
                  Custom design & build for a landscape design studio in Ontario, Canada. Full design + build, delivered in under a week.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {['Custom Design', 'Full Build', 'Delivered in < 7 Days'].map(tag => (
                    <div key={tag} className="px-4 py-2 rounded-xl bg-white/5 text-sm font-bold text-slate-300 border border-white/10">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual Frame */}
              <div className="lg:w-1/2 w-full relative z-10">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl shadow-blue-900/20 group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-500">
                  {/* Browser Header */}
                  <div className="h-10 border-b border-white/10 bg-slate-800/50 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                    </div>
                    <div className="mx-auto px-4 py-1 rounded bg-slate-900 border border-white/5 text-[10px] text-slate-500 font-mono flex-1 max-w-[200px] text-center truncate">
                      juliehulllandscapedesign.ca
                    </div>
                  </div>
                  {/* Portfolio Image */}
                  <div className="absolute inset-x-0 bottom-0 top-10 overflow-hidden bg-slate-950">
                    <img 
                      src="/julie-hull-portfolio.png" 
                      alt="Julie Hull Landscape Design Homepage" 
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — Partner Pricing
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 blur-[120px] rounded-full opacity-60 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel>White-Label Pricing</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
              Pricing Built for{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                Agency Partners
              </span>
            </h2>
            <p className="text-xl text-slate-500 font-medium mt-6">
              Our cost structure leaves you real margin, even at competitive client rates.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tier 1: Per-Project */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/20 flex flex-col hover:-translate-y-1 transition-transform">
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Per-Project</h3>
                <p className="text-slate-500 mt-2 font-medium">For agencies testing the partnership on a first client site.</p>
              </div>
              <div className="text-4xl font-black text-slate-900 mb-8 flex items-end gap-2">
                Custom <span className="text-lg text-slate-400 font-medium pb-1">/site</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {['Live in 3-5 days', 'White-label delivery', 'Basic revisions included', 'Standard margin potential'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors">
                Discuss a Project
              </button>
            </div>

            {/* Tier 2: Volume Partner (Highlighted) */}
            <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-800 shadow-2xl shadow-blue-900/20 flex flex-col relative transform lg:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-white tracking-tight">Volume Partner</h3>
                <p className="text-slate-400 mt-2 font-medium">Discounted per-site rate for agencies sending 3+ builds/month.</p>
              </div>
              <div className="text-4xl font-black text-white mb-8 flex items-end gap-2">
                Discounted <span className="text-lg text-slate-500 font-medium pb-1">/site</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {['Priority 3-day turnaround', 'Volume pricing tier', 'Dedicated Slack channel', 'Highest margin potential'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30">
                Talk Pricing on a 15-Minute Call
              </button>
            </div>

            {/* Tier 3: Retainer Partner */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/20 flex flex-col hover:-translate-y-1 transition-transform">
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Retainer Partner</h3>
                <p className="text-slate-500 mt-2 font-medium">Monthly capacity reserved for ongoing agency workflows.</p>
              </div>
              <div className="text-4xl font-black text-slate-900 mb-8 flex items-end gap-2">
                Reserved <span className="text-lg text-slate-400 font-medium pb-1">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {['Guaranteed monthly hours', 'Hosting/maintenance bundle', 'Unlimited minor updates', 'Strategy & architecture syncs'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="w-full py-4 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors">
                Explore Retainers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 9 — Final CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 blur-[120px] rounded-full opacity-80" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 blur-[100px] rounded-full opacity-60" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <SectionLabel>Partner With Us</SectionLabel>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight mt-6">
                Let's Build Something <br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #7c3aed, #06b6d4)' }}>
                  Your Clients Will Love
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto">
                No pitch deck required — just a 15-minute conversation to see if it's a fit.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-xl text-white cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 16px 40px rgba(37,99,235,0.25)' }}
              >
                Book a 15-Minute Fit Call
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-14 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-center gap-8 text-slate-400">
              {['US-based coordination', 'Bangalore engineering team', 'White-label, always'].map((trust) => (
                <div key={trust} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  {trust}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
