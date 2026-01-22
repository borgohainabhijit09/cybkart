import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0F172A] text-slate-400 border-t border-slate-800">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6 group">
                            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 border border-slate-700">
                                <span className="text-white font-bold text-xl">CK</span>
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                CYBKART <span className="text-blue-500">GLOBAL</span>
                            </span>
                        </div>
                        <p className="mb-6 leading-relaxed text-sm text-slate-400">
                            Enterprise-grade digital systems for high-growth businesses. We architect the AI, automation, and web infrastructure that powers the future of work.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-slate-700">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-slate-700">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-slate-700">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services/ai-automation" className="hover:text-blue-400 transition-colors">AI Automation & Chatbots</Link></li>
                            <li><Link href="/services/websites-booking" className="hover:text-blue-400 transition-colors">Websites + Booking Systems</Link></li>
                            <li><Link href="/services/ecommerce" className="hover:text-blue-400 transition-colors">E-Commerce Development</Link></li>
                            <li><Link href="/services/digital-marketing" className="hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
                            <li><Link href="/services/branding-design" className="hover:text-blue-400 transition-colors">Branding & Design</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">All Services</Link></li>
                            <li><Link href="/case-scenarios" className="hover:text-blue-400 transition-colors">Case Scenarios</Link></li>
                            <li><Link href="/knowledge-hub" className="hover:text-blue-400 transition-colors">Knowledge Hub</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Contact</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <div><a href="mailto:info@cybkartglobal.com" className="hover:text-blue-400 transition-colors">info@cybkartglobal.com</a></div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <div><a href="tel:8446991255" className="hover:text-blue-400 transition-colors">844-699-1255 (Toll Free)</a></div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <div><p>1309 Coffeen Ave, Sheridan, WY 82801</p></div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-slate-500 text-xs">
                            © {currentYear} CYBKART GLOBAL. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-xs font-medium">
                            <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
