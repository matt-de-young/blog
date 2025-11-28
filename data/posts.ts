// Central metadata for all blog posts

export interface PostMetadata {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  draft: boolean;
}

export const allPosts: PostMetadata[] = [
  {
    id: "no-project-managers-no-scrum-masters",
    title: "No Project Managers, No Scrum Masters",
    excerpt:
      "Scrum discourages ownership & encourages mediocrity. A better process is possible.",
    date: "2025-03-04",
    slug: "/blog/no-project-managers-no-scrum-masters",
    draft: false,
  },
];

// Helper function to get recent posts (e.g., last 3)
export function getRecentPosts(limit = 3): PostMetadata[] {
  return allPosts
    .filter((post) => !post.draft) // Optionally filter out drafts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Helper function to get a specific post by ID
export function getPostById(id: string): PostMetadata | undefined {
  return allPosts.find((post) => post.id === id);
}

// Helper function to get a specific post by slug
export function getPostBySlug(slug: string): PostMetadata | undefined {
  return allPosts.find((post) => post.slug === slug);
}
