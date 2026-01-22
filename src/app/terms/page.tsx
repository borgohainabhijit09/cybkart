import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service | CYBKART GLOBAL',
    description: 'The rules and regulations for using CYBKART GLOBAL\'s website and services.',
};

export default function TermsPage() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
                <p className="text-slate-500 mb-12">Last Updated: January 1, 2026</p>

                <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                        These Terms of Service ("Terms") govern your access to and use of CYBKART GLOBAL's website and services. By accessing or using our services, you agree to be bound by strict adherence to these Terms.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Services Provided</h3>
                    <p className="mb-6 text-slate-600">
                        CYBKART GLOBAL provides software development, systems architecture, digital marketing, and design services. Specific deliverables, timelines, and costs are defined in individual Statements of Work (SOW) or Contracts signed by both parties. In the event of a conflict between these Terms and a specific SOW, the SOW shall control.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Intellectual Property Rights</h3>
                    <p className="mb-6 text-slate-600">
                        <strong>Client Ownership:</strong> Upon full payment of all fees, CYBKART GLOBAL assigns to the Client all right, title, and interest in the custom code, designs, and assets created specifically for the Client under the agreement.
                    </p>
                    <p className="mb-6 text-slate-600">
                        <strong>Our Tools:</strong> CYBKART GLOBAL retains ownership of its background technology, pre-existing code libraries, and generic development tools used to create the deliverables. The Client is granted a perpetual, non-exclusive, royalty-free license to use these background technologies as part of the final deliverable.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Payments & Fees</h3>
                    <p className="mb-6 text-slate-600">
                        Fees are strictly non-refundable once work has commenced, unless otherwise stated in your Contract.
                        We typically require a deposit (usually 50%) to begin work, with the balance due upon project completion or milestones.
                        Late payments may incur interest charges of 1.5% per month or the maximum allowable law.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Limitation of Liability</h3>
                    <p className="mb-6 text-slate-600">
                        To the fullest extent permitted by law, CYBKART GLOBAL shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill. Our total liability for any claim arising out of these Terms shall not exceed the amount paid by you to us for the specific service giving rise to the claim in the 12 months preceding the incident.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Project Delays & Client Responsibilities</h3>
                    <p className="mb-6 text-slate-600">
                        Timelines provided are estimates. Completion of projects requires timely feedback and assets from the Client. CYBKART GLOBAL is not responsible for delays caused by the Client's failure to provide necessary information, access, or approvals.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Governing Law</h3>
                    <p className="mb-6 text-slate-600">
                        These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions.
                    </p>

                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-12">
                        <h4 className="font-bold text-slate-900 mb-2">Questions?</h4>
                        <p className="text-slate-600 text-sm">
                            For legal inquiries, please contact us at <a href="mailto:info@cybkartglobal.com" className="text-blue-600 hover:underline">info@cybkartglobal.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
