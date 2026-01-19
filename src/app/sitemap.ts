import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cybkartglobal.com';

    const routes = [
        '',
        '/about',
        '/services',
        '/services/ai-automation',
        '/services/websites-booking',
        '/services/ecommerce',
        '/services/digital-marketing',
        '/services/branding-design',
        '/case-scenarios',
        '/knowledge-hub',
        '/contact',
        '/privacy',
        '/terms',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
