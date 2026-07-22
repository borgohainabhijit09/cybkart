import Link from 'next/link';
import { CheckCircle2, Phone, Mail, Calendar, ArrowRight, Home } from 'lucide-react';

export default function ThankYouPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-6 bg-slate-50">
            <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">

                {/* Success Icon */}
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Thank You!</h1>
                <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                    Your request has been received. <br />
                    We'll be in touch shortly to discuss your project.
                </p>

                {/* Contact Options */}
                <div className="space-y-6 mb-12">
                    <h2 className="text-lg font-semibold text-slate-900">Want to skip the queue?</h2>

                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        {/* Phone */}
                        <a href="tel:8446991255" className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group bg-slate-50 hover:bg-white cursor-pointer">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Toll-Free</div>
                                <div className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">844-699-1255</div>
                            </div>
                        </a>

                        {/* Email */}
                        <a href="mailto:info@cybkartglobal.com" className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group bg-slate-50 hover:bg-white cursor-pointer">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Us</div>
                                <div className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">info@cybkartglobal.com</div>
                            </div>
                        </a>
                    </div>

                    {/* Calendly - Prominent */}
                    <a
                        href="https://calendly.com/cybkartglobal/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full p-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1 group cursor-pointer"
                    >
                        <Calendar className="w-6 h-6" />
                        Schedule a Booking via Calendly
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors"
                >
                    <Home className="w-4 h-4" /> Return to Home
                </Link>

            </div>
        </div>
    );
}
