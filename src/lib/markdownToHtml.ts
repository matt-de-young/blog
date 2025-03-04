import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeCallouts from 'rehype-callouts';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) // Parse markdown into mdast
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to hast
    .use(rehypeCallouts) // Process callouts
    .use(rehypeStringify, { allowDangerousHtml: true }) // Convert to HTML string
    .process(markdown);

  return result.toString();
}
