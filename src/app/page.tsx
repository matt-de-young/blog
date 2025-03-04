import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { BlogPosts } from "@/app/_components/blog-posts";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  return (
    <main>
      <Container>
        <Intro />
        <BlogPosts posts={getAllPosts()} />
      </Container>
    </main>
  );
}
