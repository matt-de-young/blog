import { BLOG_DESCRIPTION, BLOG_TITLE } from "@/lib/constants";
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
        <p>
          I believe the best engineering teams are built on trust, clear
          communication, & a culture where people can do their best work.
        </p>
        <p>
          I'm a hands on engineering leader with a full stack developer
          background, rooted in startups. I help build scalable systems &
          high-performing teams by establishing strong engineering practices,
          fostering collaboration, & shipping products that matter. I've built
          across the entire stack, including frontend SPAs, backend
          microservices, platform infrastructure, & agentic workflows. That
          technical foundation shapes how I lead—I understand the challenges my
          teams face because I've lived them.
        </p>
        <p>
          My approach combines technical depth with genuine care for people. I
          believe in servant leadership, removing blockers, & creating
          environments where engineers can thrive. I've led teams from scrappy
          startup mode to more mature, sustainable engineering practices while
          maintaining the speed & adaptability that early stage companies need.
        </p>
      </section>
      <section className="flex flex-row justify-center items-center lg:mb-16 xl:mb-12 gap-16 py-8 border-b">
        <Link href="https://mastodon.social/@mattdeyoung">Mastodon</Link>
        <Link href="https://github.com/matt-de-young">GitHub</Link>
        <Link href="https://www.linkedin.com/in/matt-de-young-5019092a1">
          LinkedIn
        </Link>
      </section>
    </>
  );
}
