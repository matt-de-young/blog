import Container from "@/app/_components/container";
import { SOURCE_CODE_LINK } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-zinc-400 border-t border-neutral-200 dark:bg-zinc-900">
      <Container>
        <div className="py-8 flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
            <a
              href={SOURCE_CODE_LINK}
              className="font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
