import React, { useState } from 'react';
import axios from 'axios';

interface AccountDeletionProps {
    onBack: () => void;
}

const AccountDeletion: React.FC<AccountDeletionProps> = ({ onBack }) => {
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
        type: null,
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        try {
            // Endpoint provided in the context: /api/delete-acc-req/request
            const response = await axios.post("https://verge-2026-codebase-production.up.railway.app/api/delete-acc-req/request", {
                email,
                reason,
            });

            if (response.status === 201) {
                setStatus({
                    type: 'success',
                    message: 'Deletion request submitted successfully. We will process it shortly.',
                });
                setEmail('');
                setReason('');
            }
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Server error. Please try again later.';
            setStatus({
                type: 'error',
                message: errorMessage,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen pt-32 pb-20 px-6 font-mono selection:bg-red-500/30">
            <div className="max-w-2xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="group mb-12 flex items-center gap-2 text-cosmic-green hover:text-white transition-colors duration-300"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform duration-300">←</span>
                    <span className="text-xs tracking-[0.2em] uppercase">Return to Main Terminal</span>
                </button>

                {/* Header Section */}
                <div className="mb-12 border-l-2 border-red-500 pl-8">
                    <h1 className="text-4xl font-bold tracking-tighter mb-4 text-white uppercase italic">
                        Account Deletion
                    </h1>
                    <div className="flex items-center gap-2 text-[10px] text-white/40 tracking-[0.2em] uppercase">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Security Protocol: Sensitive Action
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm relative overflow-hidden">
                    {/* Subtle warning pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rotate-45 translate-x-16 -translate-y-16 pointer-events-none" />

                    <p className="text-white/60 mb-8 text-sm leading-relaxed">
                        Please provide your registered email address and the reason for account deletion.
                        Once submitted, our administrators will review the request. You will receive an
                        email confirmation once the process is complete.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-cosmic-green mb-2">
                                User Identifier (Email)
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="identity@domain.com"
                                className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-cosmic-green transition-colors font-mono text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="reason" className="block text-[10px] uppercase tracking-[0.2em] text-cosmic-green mb-2">
                                Deactivation Logic (Reason)
                            </label>
                            <textarea
                                id="reason"
                                rows={4}
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                placeholder="Briefly explain why you wish to delete your account..."
                                className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-cosmic-green transition-colors font-mono text-sm resize-none"
                            />
                        </div>

                        {status.type && (
                            <div className={`p-4 text-xs ${status.type === 'success' ? 'bg-cosmic-green/10 text-cosmic-green border border-cosmic-green/30' : 'bg-red-500/10 text-red-500 border border-red-500/30'}`}>
                                <span className="font-bold mr-2">[{status.type.toUpperCase()}]</span>
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 relative group overflow-hidden transition-all duration-300 ${isSubmitting ? 'bg-white/10' : 'bg-red-500 hover:bg-red-600'}`}
                        >
                            <span className="relative z-10 text-xs font-bold tracking-[0.3em] uppercase text-white">
                                {isSubmitting ? 'Processing Request...' : 'Initiate Sequence'}
                            </span>
                            {!isSubmitting && (
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                            )}
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-[10px] text-white/30 text-center tracking-widest uppercase italic">
                    CRITICAL: This action cannot be undone once approved by admin.
                </div>
            </div>
        </div>
    );
};

export default AccountDeletion;
