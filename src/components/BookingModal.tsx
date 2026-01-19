'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>
            <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white z-10">
                    <span className="font-bold text-slate-900">Book Strategy Call</span>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>
                <div className="flex-1 w-full relative">
                    <iframe
                        src="https://calendly.com/cybkartglobal/30min?hide_gdpr_banner=1"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Select a Date & Time - Calendly"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
