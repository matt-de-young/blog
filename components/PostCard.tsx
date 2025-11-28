export interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  draft?: boolean;
}

export function PostCard({ title, excerpt, date, slug, draft }: PostCardProps) {
  return (
    <a
      href={slug}
      class="group block bg-white rounded-xl shadow-md p-6 sm:p-8 border-2 border-transparent transition-all duration-200 hover:shadow-xl hover:scale-[1.02] hover:border-blue-700"
    >
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div class="flex items-center gap-2">
          <h3 class="text-xl font-semibold text-slate-900">
            {title}
          </h3>
          {draft && (
            <span class="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
              Draft
            </span>
          )}
        </div>
        <time
          class="text-sm text-slate-500 whitespace-nowrap"
          dateTime={date}
        >
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-slate-600 leading-relaxed">
          {excerpt}
        </p>
        <span class="ml-4 text-slate-400 transition-all text-4xl group-hover:bg-linear-to-r group-hover:from-blue-800 group-hover:to-indigo-800 group-hover:bg-clip-text group-hover:text-transparent">
          →
        </span>
      </div>
    </a>
  );
}
