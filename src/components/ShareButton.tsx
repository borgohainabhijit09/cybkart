'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
    title: string;
    excerpt: string;
}

export default function ShareButton({ title, excerpt }: ShareButtonProps) {
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: title,
                text: excerpt,
                url: window.location.href,
            }).catch((error) => {
                console.log('Error sharing:', error);
            });
        } else {
            // Fallback: copy URL to clipboard
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Link copied to clipboard!');
            }).catch((error) => {
                console.log('Error copying to clipboard:', error);
            });
        }
    };

    return (
        <button
            onClick={handleShare}
            className="flex items-center gap-2 ml-auto text-blue-600 hover:text-blue-700 font-medium transition-colors"
            aria-label="Share this article"
        >
            <Share2 className="w-4 h-4" />
            Share
        </button>
    );
}
