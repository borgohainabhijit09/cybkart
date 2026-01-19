import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | CYBKART GLOBAL',
    description: 'How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
                <p className="text-slate-500 mb-12">Last Updated: January 1, 2026</p>

                <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                        At CYBKART GLOBAL ("we", "us", or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This policy explains how we collect, use, and safeguard your data when you visit our website or engage our services.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Information We Collect</h3>
                    <p className="mb-4 text-slate-600">We collect information that you voluntarily provide to us, including:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, and physical address when you fill out our contact forms.</li>
                        <li><strong>Business Information:</strong> Project details, budget ranges, and technical requirements you share during consultations.</li>
                        <li><strong>Technical Data:</strong> IP address, browser type, and usage patterns via standard analytics tools (to improve our website performance).</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. How We Use Your Information</h3>
                    <p className="mb-4 text-slate-600">We use your data solely for legitimate business purposes:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600">
                        <li>To provide and deliver the services you request (e.g., building your website or automation system).</li>
                        <li>To communicate with you regarding project updates, invoices, and technical support.</li>
                        <li>To send you relevant industry insights or newsletters (only if you have opted in).</li>
                        <li>To comply with legal obligations and enforce our agreements.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Data Security & Global Processing</h3>
                    <p className="mb-4 text-slate-600">
                        We implement industry-standard security measures to protect your data from unauthorized access. However, no method of transmission over the Internet is 100% secure.
                    </p>
                    <p className="mb-6 text-slate-600">
                        <strong>International Transfer:</strong> As a global organization with operations in the United States and India, your information may be processed on servers located outside of your state or country. By using our services, you consent to this transfer, ensuring that we maintain strict data protection standards across all our offices.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Third-Party Services</h3>
                    <p className="mb-6 text-slate-600">
                        We may share data with trusted third-party vendors who assist us in operating our business (e.g., payment processors like Stripe, cloud hosting providers like AWS/Vercel). These parties agree to keep this information confidential and use it only for the services we request.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Your Rights</h3>
                    <p className="mb-6 text-slate-600">
                        Depending on your location, you may have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:hello@cybkartglobal.com" className="text-blue-600 hover:underline">hello@cybkartglobal.com</a>.
                    </p>

                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-12">
                        <h4 className="font-bold text-slate-900 mb-2">Contact Us</h4>
                        <p className="text-slate-600 text-sm">
                            If you have any questions about this Privacy Policy, please contact us:<br />
                            Email: hello@cybkartglobal.com<br />
                            Phone: 844-699-1255
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
