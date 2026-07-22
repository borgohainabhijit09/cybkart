import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {
    ArrowLeft,
    Calendar,
    Clock,
    User,
    Tag,
    ChevronRight
} from 'lucide-react';
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from '@/lib/blog';
import MDXComponents from '@/components/MDXComponents';
import CTASection from '@/components/CTASection';
import ShareButton from '@/components/ShareButton';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

/**
 * Generate static params for all blog posts
 */
export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found | CYBKART GLOBAL',
        };
    }

    return {
        title: `${post.title} | CYBKART GLOBAL`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
        },
    };
}

/**
 * Blog Post Page Component
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(slug, 3);

    // Format date
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <>
            {/* Breadcrumb & Back Navigation */}
            <section className="bg-slate-50 border-b border-slate-200 pt-28 pb-6">
                <div className="container mx-auto px-6">
                    <Link
                        href="/knowledge-hub"
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Knowledge Hub
                    </Link>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/knowledge-hub" className="hover:text-blue-600 transition-colors">Knowledge Hub</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-900 font-medium">{post.title}</span>
                    </div>
                </div>
            </section>

            {/* Article Header */}
            <section className="bg-white py-12 border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                            <Tag className="w-3 h-3" />
                            {post.category}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            {post.excerpt}
                        </p>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 pb-8 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span className="font-medium">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formattedDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                            <ShareButton title={post.title} excerpt={post.excerpt} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <MDXRemote
                                source={post.content}
                                components={MDXComponents}
                            />
                        </div>
                    </div>
                </div>
            </article>

            {/* Author CTA */}
            <section className="py-12 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-20 h-20 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-2xl">CK</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                        Written by {post.author}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        We're a team of engineers and strategists who build digital systems that actually work.
                                        Every article we publish is based on real implementations with real clients.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-md"
                                    >
                                        Work With Us
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.slug}
                                        href={`/knowledge-hub/${relatedPost.slug}`}
                                        className="group"
                                    >
                                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all h-full flex flex-col">
                                            <div className="text-xs font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                                                {relatedPost.category}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-1">
                                                {relatedPost.excerpt}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <Clock className="w-3 h-3" />
                                                {relatedPost.readTime}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <CTASection
                title="Ready to Build Your System?"
                description="Every strategy we write about, we implement. Let's build your custom automation roadmap."
                buttonText="Book Strategy Call"
            />
        </>
    );
}
