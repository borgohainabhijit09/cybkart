import { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight,
    ShoppingCart,
    CreditCard,
    Package,
    BarChart,
    Globe,
    ShieldCheck,
    Zap,
    Check,
    LayoutGrid,
    Truck,
    RefreshCw,
    Lock,
    Server
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
    title: 'Enterprise E-Commerce Development | CYBKART GLOBAL',
    description: 'Scalable online stores built on Shopify Plus or Headless architectures. Optimized for high-volume sales and global reach.',
};

export default function EcommercePage() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            High-Volume Retail Systems
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Architecting Global <br />
                            <span className="text-indigo-500">Commerce Engines.</span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                            We build scalable e-commerce platforms designed for growth.
                            From high-conversion Shopify stores to custom headless architectures
                            handling millions in transaction volume.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/25">
                                Discuss Your Platform
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        SYSTEM OVERVIEW 
      */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Revenue-First Engineering</h2>
                        <p className="text-lg text-slate-600">We don't just build stores; we build ecosystems that optimize every stage of the transaction.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-slate-50 rounded-2xl hover:bg-indigo-50 transition-colors group">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <LayoutGrid className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">UX/UI Design</h3>
                            <p className="text-slate-600 text-sm">Frictionless browsing and intuitive navigation that guides users to checkout.</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl hover:bg-indigo-50 transition-colors group">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <CreditCard className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Conversion Core</h3>
                            <p className="text-slate-600 text-sm">Optimized checkout flows, one-click payments, and abandoned cart recovery.</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl hover:bg-indigo-50 transition-colors group">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Package className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Post-Purchase</h3>
                            <p className="text-slate-600 text-sm">Automated order updates, easy returns portals, and loyalty program integration.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        PLATFORM COMPARISON 
      */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Selecting Your Engine</h2>
                        <p className="text-lg text-slate-600">Choosing the right infrastructure based on your business stage.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Shopify */}
                        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-emerald-50 p-6 border-b border-emerald-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">Shopify Plus</h3>
                                <p className="text-emerald-700 text-sm font-medium">Best for Rapid Scaling & D2C Brands</p>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-emerald-500" />
                                        <span className="text-slate-700">Fastest time-to-market (4-6 weeks)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-emerald-500" />
                                        <span className="text-slate-700">Zero maintenance infrastructure</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-emerald-500" />
                                        <span className="text-slate-700">Native app ecosystem (Subscriptions, Reviews)</span>
                                    </li>
                                </ul>
                                <div className="text-sm text-slate-500 italic border-t border-slate-100 pt-4">
                                    "For 90% of brands, Shopify Plus provides the perfect balance of power and ease."
                                </div>
                            </div>
                        </div>

                        {/* Custom Headless */}
                        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-blue-50 p-6 border-b border-blue-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">Custom Headless</h3>
                                <p className="text-blue-700 text-sm font-medium">Best for Unique UX & Complex B2B</p>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-blue-500" />
                                        <span className="text-slate-700">Unlimited design freedom (Next.js)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-blue-500" />
                                        <span className="text-slate-700">Connects to proprietary ERP/Legacy systems</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-blue-500" />
                                        <span className="text-slate-700">Sub-second page loads globally</span>
                                    </li>
                                </ul>
                                <div className="text-sm text-slate-500 italic border-t border-slate-100 pt-4">
                                    "For enterprises with complex data needs or highly custom user journeys."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        CHECKOUT & INVENTORY 
      */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase">Backend Intelligence</span>
                            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">Inventory & Order Automation</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Your store is only as good as its operations. We build automated workflows that save hours of manual entry.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                                        <RefreshCw className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Multi-Channel Sync</h3>
                                        <p className="text-sm text-slate-600">Inventory syncs in real-time across your Store, Amazon, Instagram, and physical POS.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                                        <Truck className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Fulfillment Routing</h3>
                                        <p className="text-sm text-slate-600">Orders auto-route to the nearest warehouse or 3PL provider for fastest delivery.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Abandonment Logic</h3>
                                        <p className="text-sm text-slate-600">Smart triggers send SMS/Email recovery sequences 1hr and 24hr after card abandonment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
                            <div className="relative z-10 text-white space-y-8">
                                <div>
                                    <div className="text-sm text-slate-400 mb-1 font-mono">CHECKOUT CONVERSION</div>
                                    <div className="text-4xl font-bold">Try vs. Trust</div>
                                    <p className="text-slate-400 mt-2 text-sm">A customized checkout increases trust. We implement:</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 p-4 rounded-lg">
                                        <Lock className="w-5 h-5 text-emerald-400 mb-2" />
                                        <div className="font-bold text-sm">Trust Badges</div>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-lg">
                                        <Globe className="w-5 h-5 text-blue-400 mb-2" />
                                        <div className="font-bold text-sm">Auto-Address</div>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-lg">
                                        <CreditCard className="w-5 h-5 text-purple-400 mb-2" />
                                        <div className="font-bold text-sm">One-Click Pay</div>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-lg">
                                        <ShieldCheck className="w-5 h-5 text-orange-400 mb-2" />
                                        <div className="font-bold text-sm">Fraud Protect</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        ARCHITECTURES & SCALABILITY 
      */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Scalability Planning</h2>
                        <p className="text-lg text-slate-600">Architecture that handles Black Friday traffic without a sweat.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-2">Cloud Infrastructure</h3>
                            <p className="text-slate-600 text-sm mb-6">
                                We utilize Edge Caching (via Cloudflare or Vercel) to serve product pages from locations
                                closest to your customers, reducing load times by 60%.
                            </p>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-blue-500"></div>
                            </div>
                            <div className="flex justify-between text-xs text-slate-500 mt-2">
                                <span>Server Load</span>
                                <span>Optimized</span>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-2">Database Sharding</h3>
                            <p className="text-slate-600 text-sm mb-6">
                                For high-SKU stores, we implement optimized database indexing and search functionality
                                (using Algolia or ElasticSearch) for instant product filtering.
                            </p>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-slate-100 text-xs font-mono rounded">100k+ SKUs</span>
                                <span className="px-2 py-1 bg-slate-100 text-xs font-mono rounded"> &lt;50ms Search</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        CASE SCENARIOS 
      */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Retail Architectures</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Fashion */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors">
                            <div className="uppercase text-xs font-bold text-pink-600 mb-2">Fashion & Lifestyle</div>
                            <h3 className="font-bold text-slate-900 mb-4">D2C Brand</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>• Visual-heavy product pages</li>
                                <li>• Instagram Shop integration</li>
                                <li>• "Fit Finder" size quiz</li>
                                <li>• Returns automation loop</li>
                            </ul>
                        </div>

                        {/* B2B */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors">
                            <div className="uppercase text-xs font-bold text-blue-600 mb-2">Wholesale Distribution</div>
                            <h3 className="font-bold text-slate-900 mb-4">B2B Portal</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>• Customer-specific pricing tiers</li>
                                <li>• Bulk order forms</li>
                                <li>• Net-30 payment terms</li>
                                <li>• ERP inventory sync</li>
                            </ul>
                        </div>

                        {/* Digital */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors">
                            <div className="uppercase text-xs font-bold text-purple-600 mb-2">Software & Media</div>
                            <h3 className="font-bold text-slate-900 mb-4">Digital Goods</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>• Instant secure delivery</li>
                                <li>• Subscription management</li>
                                <li>• License key generation</li>
                                <li>• Member-only content access</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        FAQs 
      */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">E-Commerce FAQ</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "Shopify or Custom Build?",
                                    a: "If you sell standard physical products, Shopify is usually best. If you have complex recurring billing, highly custom product builders, or need deep ERP integration, Custom is better."
                                },
                                {
                                    q: "How secure is the checkout?",
                                    a: "Extremely. We use Level 1 PCI-DSS compliant processors (Stripe/Shopify Payments). Customer credit card data never touches your own servers, minimizing liability."
                                },
                                {
                                    q: "Can you migrate us from WooCommerce/Magento?",
                                    a: "Yes. We handle full data migration including products, customer history, and SEO redirects so you don't lose traffic during the switch."
                                },
                                {
                                    q: "What is the typical build time?",
                                    a: "A standard Shopify Plus build takes 4-8 weeks. A Custom Headless solution typically takes 10-14 weeks depending on the complexity of integrations."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white border border-slate-200 rounded-lg p-6">
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
                title="Ready to Scale Your Store?"
                description="Schedule a technical consultation. We'll audit your current setup and propose a roadmap for growth."
                buttonText="Discuss Your Project"
            />
        </>
    );
}
