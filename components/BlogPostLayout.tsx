import type { ComponentChildren } from "preact";
import { MonogramNav } from "@/components/MonogramNav.tsx";

export interface BlogPostLayoutProps {
  title: string;
  date: string;
  excerpt?: string;
  draft?: boolean;
  children: ComponentChildren;
}

export function BlogPostLayout({
  title,
  date,
  draft,
  children,
}: BlogPostLayoutProps) {
  return (
    <div class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/50 to-slate-50">
      <MonogramNav />
      <article class="max-w-4xl mx-auto px-6 py-16 sm:px-8">
        <header class="mt-4 mb-16">
          <h1 class="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {draft && (
            <div class="mt-4 inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded">
              Draft
            </div>
          )}
          {!draft && (
            <time class="text-sm text-slate-500 block mb-4">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </header>

        <div class="bg-white rounded-2xl shadow-lg p-8 sm:p-12 prose prose-lg max-w-none">
          {children}
        </div>
      </article>
    </div>
  );
}
