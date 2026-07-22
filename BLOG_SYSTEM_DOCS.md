# Blog System Documentation

## Overview

The CYBKART GLOBAL website now has a fully functional blog system with dynamic routing for individual blog posts. The system uses MDX (Markdown + JSX) for content management and Next.js App Router for routing.

## Features

✅ **Dynamic Blog Post Pages** - Individual pages for each blog post
✅ **MDX Support** - Write blog posts in Markdown with JSX components
✅ **SEO Optimized** - Automatic metadata generation for each post
✅ **Styled Components** - Custom MDX components matching the site's design
✅ **Related Posts** - Automatic related post suggestions
✅ **Category Filtering** - Posts organized by category
✅ **Reading Time** - Automatic reading time calculation
✅ **Social Sharing** - Built-in share functionality
✅ **Responsive Design** - Mobile-first, fully responsive

## File Structure

```
src/
├── app/
│   └── knowledge-hub/
│       ├── page.tsx              # Blog listing page
│       └── [slug]/
│           ├── page.tsx          # Individual blog post page
│           └── not-found.tsx     # 404 page for missing posts
├── components/
│   └── MDXComponents.tsx         # Styled MDX components
├── content/
│   └── blog/
│       ├── ai-chatbots-guide.mdx
│       └── website-speed-optimization.mdx
└── lib/
    └── blog.ts                   # Blog utility functions
```

## How to Add a New Blog Post

### 1. Create a New MDX File

Create a new file in `src/content/blog/` with a descriptive slug name:

```bash
src/content/blog/your-post-slug.mdx
```

### 2. Add Frontmatter

Start your MDX file with YAML frontmatter:

```mdx
---
title: "Your Blog Post Title"
date: "2026-01-22"
author: "CYBKART GLOBAL Team"
category: "AI Automation"
excerpt: "A brief description of your blog post that will appear in listings and meta descriptions."
readTime: "8 min read"
---
```

**Frontmatter Fields:**
- `title` (required): The post title
- `date` (required): Publication date in YYYY-MM-DD format
- `author` (optional): Author name (defaults to "CYBKART GLOBAL Team")
- `category` (required): Post category (see categories below)
- `excerpt` (required): Brief description for listings and SEO
- `readTime` (optional): Reading time (auto-calculated if not provided)

### 3. Write Your Content

Write your content in Markdown below the frontmatter:

```mdx
# Your Main Heading

Your introduction paragraph...

## Section Heading

Your content here...

### Subsection

More content...

- Bullet point 1
- Bullet point 2

**Bold text** and *italic text*

[Link to another page](/services)

![Image description](image-url.jpg)
```

### 4. The Post is Live!

The blog system automatically:
- Generates a URL at `/knowledge-hub/your-post-slug`
- Adds it to the Knowledge Hub listing
- Creates SEO metadata
- Calculates reading time
- Suggests related posts

## Available Categories

Current categories (can be extended):
- AI Automation
- Business Systems
- AI Integration
- Performance
- E-Commerce
- Case Study
- Security
- Web Architecture
- Growth Strategy

To add a new category, update the `categoryIcons` and `categoryColors` objects in `src/app/knowledge-hub/page.tsx`.

## MDX Components

### Standard Markdown

All standard Markdown syntax is supported and styled:

- Headings (H1-H6)
- Paragraphs
- Links (internal and external)
- Lists (ordered and unordered)
- Blockquotes
- Code blocks
- Tables
- Images
- Bold and italic text

### Code Blocks

Use triple backticks for code blocks:

\`\`\`javascript
const example = "This will be syntax highlighted";
console.log(example);
\`\`\`

### Callout Components

Use callout components for special notes:

```mdx
<Callout type="info">
This is an informational callout.
</Callout>

<Callout type="success">
This is a success message.
</Callout>

<Callout type="warning">
This is a warning message.
</Callout>

<Callout type="tip">
This is a helpful tip.
</Callout>
```

## Blog Utility Functions

Located in `src/lib/blog.ts`:

### `getAllPosts()`
Returns all blog posts sorted by date (newest first).

```typescript
const posts = getAllPosts();
```

### `getPostBySlug(slug: string)`
Returns a single blog post by its slug.

```typescript
const post = getPostBySlug('ai-chatbots-guide');
```

### `getAllPostSlugs()`
Returns an array of all post slugs (used for static generation).

```typescript
const slugs = getAllPostSlugs();
```

### `getPostsByCategory(category: string)`
Returns all posts in a specific category.

```typescript
const aiPosts = getPostsByCategory('AI Automation');
```

### `getAllCategories()`
Returns an array of all unique categories.

```typescript
const categories = getAllCategories();
```

### `getRelatedPosts(slug: string, limit: number)`
Returns related posts (same category, excluding current post).

```typescript
const related = getRelatedPosts('ai-chatbots-guide', 3);
```

## SEO Features

Each blog post automatically includes:

- **Title Tag**: `{post.title} | CYBKART GLOBAL`
- **Meta Description**: From the `excerpt` field
- **Open Graph Tags**: For social media sharing
- **Twitter Card Tags**: For Twitter sharing
- **Canonical URL**: Prevents duplicate content issues
- **Structured Data**: Article schema (can be added)

## Customization

### Styling MDX Components

Edit `src/components/MDXComponents.tsx` to customize the appearance of blog content.

### Blog Listing Page

Edit `src/app/knowledge-hub/page.tsx` to customize:
- Featured post display
- Trending posts section
- Grid layout
- Category filters

### Individual Post Page

Edit `src/app/knowledge-hub/[slug]/page.tsx` to customize:
- Post header layout
- Author section
- Related posts display
- Share functionality

## Performance

The blog system is optimized for performance:

- **Static Generation**: All blog posts are pre-rendered at build time
- **Automatic Code Splitting**: Each post is a separate chunk
- **Image Optimization**: Use Next.js Image component for images
- **Lazy Loading**: Related posts load efficiently

## Best Practices

### Writing Blog Posts

1. **Use Descriptive Slugs**: `ai-chatbots-guide` not `post-1`
2. **Write Compelling Excerpts**: 150-160 characters for SEO
3. **Use Headings Properly**: H1 for title, H2 for sections, H3 for subsections
4. **Add Alt Text to Images**: For accessibility and SEO
5. **Internal Linking**: Link to relevant service pages and other posts
6. **Keep It Scannable**: Use bullet points, short paragraphs, and subheadings

### SEO Optimization

1. **Target Keywords**: Include target keywords in title, excerpt, and headings
2. **Optimal Length**: Aim for 1,500-2,500 words for in-depth posts
3. **Update Regularly**: Keep content fresh and relevant
4. **Add Images**: Include relevant images with descriptive alt text
5. **Link Building**: Link to authoritative external sources

### Content Strategy

1. **Consistency**: Publish on a regular schedule
2. **Value First**: Focus on solving reader problems
3. **Actionable Content**: Provide clear takeaways and next steps
4. **Data-Driven**: Include statistics and case studies
5. **CTAs**: Include relevant calls-to-action

## Troubleshooting

### Post Not Showing Up

1. Check that the MDX file is in `src/content/blog/`
2. Verify frontmatter is valid YAML
3. Ensure the file has a `.mdx` extension
4. Restart the development server

### Styling Issues

1. Check that MDX components are imported correctly
2. Verify Tailwind classes are valid
3. Check browser console for errors

### Build Errors

1. Validate all frontmatter fields
2. Check for syntax errors in MDX content
3. Ensure all required dependencies are installed

## Future Enhancements

Potential additions to the blog system:

- [ ] Full-text search functionality
- [ ] Category filtering on listing page
- [ ] Author pages
- [ ] Comments system
- [ ] Newsletter integration
- [ ] RSS feed
- [ ] Table of contents for long posts
- [ ] Estimated reading progress bar
- [ ] Social share counters
- [ ] Related posts by tags (not just category)

## Support

For questions or issues with the blog system, contact the development team or refer to:
- Next.js MDX Documentation
- Gray Matter Documentation
- MDX Documentation

---

**Last Updated**: January 22, 2026
**Version**: 1.0.0
