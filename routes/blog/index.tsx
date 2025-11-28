import { define } from "@/utils.ts";
import { allPosts } from "@/data/posts.ts";
import { PostCard } from "@/components/PostCard.tsx";
import { MonogramNav } from "@/components/MonogramNav.tsx";

export default define.page(function BlogIndex() {
  return (
    <div class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/50 to-slate-50">
      <MonogramNav />
      <div class="max-w-4xl mx-auto px-6 py-16 sm:px-8">
        <header class="mt-4 mb-16">
          <h1 class="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Blog
          </h1>
          <p class="text-xl text-slate-700 leading-relaxed">
            Thoughts on engineering leadership, team building, and software
            development.
          </p>
        </header>

        {allPosts.length === 0
          ? (
            <div class="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-l-4 border-blue-700 text-center">
              <p class="text-slate-600 text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )
          : (
            <div class="grid gap-6">
              {allPosts.map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                  draft={post.draft}
                />
              ))}
            </div>
          )}
      </div>
    </div>
  );
});
