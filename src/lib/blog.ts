import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  readTime: string;
  content: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  readTime: string;
}

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculate reading time if not provided
    const readTimeResult = readingTime(content);
    const readTime = data.readTime || readTimeResult.text;

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString().split('T')[0],
      author: data.author || 'CYBKART GLOBAL Team',
      category: data.category || 'Uncategorized',
      excerpt: data.excerpt || '',
      readTime,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog posts metadata (without content)
 */
export function getAllPosts(): BlogPostMetadata[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      
      // Return metadata only (exclude content)
      const { content, ...metadata } = post;
      return metadata;
    })
    .filter((post): post is BlogPostMetadata => post !== null)
    .sort((a, b) => {
      // Sort by date descending (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = allPosts.map((post) => post.category);
  return Array.from(new Set(categories));
}

/**
 * Get related posts (same category, excluding current post)
 */
export function getRelatedPosts(slug: string, limit: number = 3): BlogPostMetadata[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((post) => post.slug !== slug && post.category === currentPost.category)
    .slice(0, limit);

  return relatedPosts;
}
