import React from 'react';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
    return (
        <div className="relative min-h-screen pt-32 pb-20 px-6 font-mono selection:bg-cosmic-green/30">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="group mb-12 flex items-center gap-2 text-cosmic-green hover:text-white transition-colors duration-300"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform duration-300">←</span>
                    <span className="text-xs tracking-[0.2em] uppercase">Return to Main Terminal</span>
                </button>

                {/* Header Section */}
                <div className="mb-16 border-l-2 border-cosmic-green pl-8">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white uppercase italic">
                        Privacy Policy
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-[10px] text-white/40 tracking-[0.2em] uppercase">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cosmic-green animate-pulse" />
                            Document Status: Finalized
                        </div>
                        <div>Last Updated: [Last Updated Date]</div>
                        <div className="text-cosmic-green/60">Version: 1.0.4-Stable</div>
                    </div>
                </div>

                {/* Policy Content */}
                <div className="space-y-12 text-sm md:text-base leading-relaxed text-white/70">

                    {/* 1. Introduction */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
                            <span className="text-cosmic-green text-xs">01//</span>
                            Introduction
                        </h2>
                        <div className="space-y-4">
                            <p>
                                Welcome to Verge 2k26 (the "Application"), a mobile platform operated by Verge 2026 ("we," "our," or "us").
                                We are committed to protecting your privacy and ensuring the security of your personal data.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Application.
                            </p>
                            <p>
                                By downloading, accessing, or using Verge 2k26, you agree to the terms of this Privacy Policy. If you do not agree
                                with the terms of this policy, please do not use the Application.
                            </p>
                        </div>
                    </section>

                    {/* 2. Information We Collect */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
                            <span className="text-cosmic-green text-xs">02//</span>
                            Information We Collect
                        </h2>
                        <div className="space-y-4">
                            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
                            <ul className="list-none space-y-3 pl-4 border-l border-white/10">
                                <li>
                                    <span className="text-cosmic-green mr-2">/</span>
                                    <strong className="text-white/90">Personal Data:</strong> Personally identifiable information, such as your name, email address, phone number, and shipping address that you voluntarily give to us when you register with the Application or place an order.
                                </li>
                                <li>
                                    <span className="text-cosmic-green mr-2">/</span>
                                    <strong className="text-white/90">Order Details:</strong> Information regarding the products you browse, items added to your cart, and history of purchases made through the Application.
                                </li>
                                <li>
                                    <span className="text-cosmic-green mr-2">/</span>
                                    <strong className="text-white/90">Derivative Data:</strong> Information our servers automatically collect when you access the Application, such as your native actions that are integral to the Application, including browsing history and interactions with products.
                                </li>
                                <li>
                                    <span className="text-cosmic-green mr-2">/</span>
                                    <strong className="text-white/90">Device Information:</strong> We may collect basic device information such as your mobile device ID, model, manufacturer, and operating system version to optimize app performance.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 3. How We Use Information */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
                            <span className="text-cosmic-green text-xs">03//</span>
                            How We Use Information
                        </h2>
                        <div className="space-y-4">
                            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We use the information collected via the Application to:</p>
                            <ul className="list-none space-y-3 pl-4 border-l border-white/10">
                                <li><span className="text-cosmic-green mr-2">/</span>Create and manage your account.</li>
                                <li><span className="text-cosmic-green mr-2">/</span>Process your orders and transactions.</li>
                                <li><span className="text-cosmic-green mr-2">/</span>Email or text you regarding your account or order.</li>
                                <li><span className="text-cosmic-green mr-2">/</span>Fulfill and manage purchases, orders, payments, and other transactions.</li>
                                <li><span className="text-cosmic-green mr-2">/</span>Generate a personal profile about you to make future visits to the Application more personalized.</li>
                                <li><span className="text-cosmic-green mr-2">/</span>Monitor and analyze usage and trends to improve your experience with the Application.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 4. Third-Party Services */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
                            <span className="text-cosmic-green text-xs">04//</span>
                            Third-Party Services
                        </h2>
                        <div className="space-y-4">
                            <p>
                                The Application may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us.
                                We may also use third-party payment processors to handle financial transactions.
                            </p>
                            <p>
                                Once you use these links or services to leave the Application, any information you provide to these third parties is not covered by this Privacy Policy.
                                We are not responsible for the content or privacy and security practices and policies of any third parties.
                            </p>
                        </div>
                    </section>

                    {/* 5. Data Security */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
                            <span className="text-cosmic-green text-xs">05//</span>
                            Data Security
                        </h2>
                        <div className="space-y-4">
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information.
                                While we have taken reasonable steps to secure the personal information you provide to us, please be aware that
                                despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be
                                guaranteed against any interception or other type of misuse.
                            </p>
                        </div>
                    </section>

                    {/* 6. Children's Privacy */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
                            <span className="text-cosmic-green text-xs">06//</span>
                            Children's Privacy
                        </h2>
                        <div className="space-y-4">
                            <p>
                                We do not knowingly solicit information from or market to children under the age of 13.
                                If you become aware of any data we have collected from children under age 13, please contact us using the
                                contact information provided below.
                            </p>
                        </div>
                    </section>

                    {/* 7. Changes to This Policy */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
                            <span className="text-cosmic-green text-xs">07//</span>
                            Changes to This Policy
                        </h2>
                        <div className="space-y-4">
                            <p>
                                We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices
                                or for other operational, legal, or regulatory reasons. We will notify you of any changes by updating the
                                "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to
                                stay informed of updates.
                            </p>
                        </div>
                    </section>

                    {/* 8. Contact Information */}
                    <section className="p-8 border-2 border-dashed border-cosmic-green/30 bg-cosmic-green/5">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
                            <span className="text-cosmic-green text-xs">08//</span>
                            Contact Information
                        </h2>
                        <div className="space-y-4">
                            <p>
                                If you have questions or comments about this Privacy Policy, please contact us at:
                            </p>
                            <div className="font-bold text-white">
                                <div>Verge 2026</div>
                                <div className="text-cosmic-green">verge@srmuniversity.ac.in</div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
