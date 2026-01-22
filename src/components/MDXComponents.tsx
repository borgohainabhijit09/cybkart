import React from 'react';
import Link from 'next/link';
import { ArrowRight, Info, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

/**
 * Custom MDX Components for Blog Posts
 * These components style the markdown content with the site's design system
 */

export const MDXComponents = {
    // Headings
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-12 first:mt-0 tracking-tight leading-tight"
            {...props}
        >
            {children}
        </h1>
    ),

    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 mt-12 tracking-tight border-b border-slate-100 pb-3"
            {...props}
        >
            {children}
        </h2>
    ),

    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 mt-10 tracking-tight"
            {...props}
        >
            {children}
        </h3>
    ),

    h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className="text-xl md:text-2xl font-bold text-slate-900 mb-3 mt-8"
            {...props}
        >
            {children}
        </h4>
    ),

    h5: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
            className="text-lg md:text-xl font-bold text-slate-900 mb-3 mt-6"
            {...props}
        >
            {children}
        </h5>
    ),

    h6: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
            className="text-base md:text-lg font-bold text-slate-900 mb-2 mt-6"
            {...props}
        >
            {children}
        </h6>
    ),

    // Paragraphs
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
            className="text-lg text-slate-700 leading-relaxed mb-6"
            {...props}
        >
            {children}
        </p>
    ),

    // Links
    a: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
        const isInternal = href?.startsWith('/') || href?.startsWith('#');

        if (isInternal) {
            return (
                <Link
                    href={href || '#'}
                    className="text-blue-600 font-medium hover:text-blue-700 underline decoration-blue-300 decoration-2 underline-offset-2 transition-colors inline-flex items-center gap-1"
                    {...props}
                >
                    {children}
                    <ArrowRight className="w-3 h-3" />
                </Link>
            );
        }

        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-700 underline decoration-blue-300 decoration-2 underline-offset-2 transition-colors"
                {...props}
            >
                {children}
            </a>
        );
    },

    // Lists
    ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul
            className="space-y-3 mb-6 ml-6"
            {...props}
        >
            {children}
        </ul>
    ),

    ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol
            className="space-y-3 mb-6 ml-6 list-decimal"
            {...props}
        >
            {children}
        </ol>
    ),

    li: ({ children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
        <li
            className="text-lg text-slate-700 leading-relaxed pl-2 relative before:content-['•'] before:absolute before:-left-4 before:text-blue-600 before:font-bold"
            {...props}
        >
            {children}
        </li>
    ),

    // Blockquote
    blockquote: ({ children, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
            className="border-l-4 border-blue-600 bg-blue-50 pl-6 pr-6 py-4 my-8 italic text-slate-700 rounded-r-lg"
            {...props}
        >
            {children}
        </blockquote>
    ),

    // Code
    code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
            className="bg-slate-100 text-slate-900 px-2 py-1 rounded text-sm font-mono border border-slate-200"
            {...props}
        >
            {children}
        </code>
    ),

    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
        <pre
            className="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto mb-6 border border-slate-700 shadow-lg"
            {...props}
        >
            {children}
        </pre>
    ),

    // Tables
    table: ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
        <div className="overflow-x-auto mb-8 rounded-lg border border-slate-200">
            <table
                className="w-full border-collapse"
                {...props}
            >
                {children}
            </table>
        </div>
    ),

    thead: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
        <thead
            className="bg-slate-50 border-b-2 border-slate-200"
            {...props}
        >
            {children}
        </thead>
    ),

    th: ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
        <th
            className="px-6 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider"
            {...props}
        >
            {children}
        </th>
    ),

    td: ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
        <td
            className="px-6 py-4 text-slate-700 border-b border-slate-100"
            {...props}
        >
            {children}
        </td>
    ),

    // Horizontal Rule
    hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
        <hr
            className="my-12 border-t-2 border-slate-200"
            {...props}
        />
    ),

    // Images
    img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <img
            src={src}
            alt={alt || ''}
            className="rounded-xl w-full my-8 shadow-lg border border-slate-200"
            {...props}
        />
    ),

    // Strong/Bold
    strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <strong
            className="font-bold text-slate-900"
            {...props}
        >
            {children}
        </strong>
    ),

    // Emphasis/Italic
    em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <em
            className="italic text-slate-700"
            {...props}
        >
            {children}
        </em>
    ),
};

/**
 * Callout Component for special notes/tips
 * Usage in MDX: <Callout type="info">Your content here</Callout>
 */
interface CalloutProps {
    type?: 'info' | 'success' | 'warning' | 'tip';
    children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ type = 'info', children }) => {
    const styles = {
        info: {
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            icon: Info,
            iconColor: 'text-blue-600',
        },
        success: {
            bg: 'bg-green-50',
            border: 'border-green-200',
            icon: CheckCircle,
            iconColor: 'text-green-600',
        },
        warning: {
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            icon: AlertTriangle,
            iconColor: 'text-yellow-600',
        },
        tip: {
            bg: 'bg-purple-50',
            border: 'border-purple-200',
            icon: Lightbulb,
            iconColor: 'text-purple-600',
        },
    };

    const style = styles[type];
    const Icon = style.icon;

    return (
        <div className={`${style.bg} ${style.border} border-l-4 rounded-r-lg p-6 my-6 flex gap-4`}>
            <Icon className={`${style.iconColor} w-6 h-6 flex-shrink-0 mt-1`} />
            <div className="text-slate-700 leading-relaxed">{children}</div>
        </div>
    );
};

export default MDXComponents;
