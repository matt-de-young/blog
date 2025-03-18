import { BLOG_TITLE, BLOG_DESCRIPTION } from "@/lib/constants";
import { Link } from "@/app/_components/link";

export function Intro() {
  return (
    <>
      <section className="mt-8 lg:mb-16 xl:mb-12 pb-8 border-b">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-2">
          {BLOG_TITLE}
        </h1>
        <h4 className="md:text-lg">
          {BLOG_DESCRIPTION}
        </h4>
      </section>
      <section className="max-w-6xl mx-auto text-2xl mt-8">
        <p>Experienced hands-on engineering manager, & veteran web developer. The past few years I have focused on building high-performing, distributed software teams but I am always in the details.</p>
        <p>My current favored tech stack is Typescript by default everywhere, using other languages (usually Rust) where needed.</p>
      </section>
      <section className="flex flex-row justify-center items-center lg:mb-16 xl:mb-12 gap-16 py-8 border-b">
        <Link href="https://mastodon.social/@mattdeyoung">Mastodon</Link>
        <Link href="https://github.com/matt-de-young">GitHub</Link>
        <Link href="https://www.linkedin.com/in/matt-de-young-5019092a1">LinkedIn</Link>
      </section>
    </>
  );
}
