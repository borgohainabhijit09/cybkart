import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'CYBKART GLOBAL',
        short_name: 'CYBKART',
        description: 'Enterprise-grade digital systems and AI automation for high-growth businesses.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0F172A',
        theme_color: '#0F172A',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
