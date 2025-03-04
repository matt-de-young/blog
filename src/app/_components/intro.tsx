import { BLOG_TITLE, BLOG_DESCRIPTION } from "@/lib/constants";

export function Intro() {
  return (
    <>
      <section className="flex-col xl:flex-row flex items-center xl:justify-between mt-8 lg:mb-16 xl:mb-12 pb-8 border-b">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight xl:pr-8">
          {BLOG_TITLE}
        </h1>
        <h4 className="text-center xl:text-left md:text-lg mt-5 xl:pl-8">
          {BLOG_DESCRIPTION}
        </h4>
      </section>
      <section className="mt-8 lg:mb-16 xl:mb-12 pb-8 border-b">
        <p>Serial founding engineer, & veteran web developer. The past few years I have focused on building teams that build software but I am always in the details.</p>
        <p>Note: this site still needs a lot of love & attention. Maybe I will git to it one day, but in the mean time you can see what I am up to on <a className="font-bold hover:underline" href="https://github.com/matt-de-young">GitHub</a>.</p>
      </section>
    </>
  );
}
