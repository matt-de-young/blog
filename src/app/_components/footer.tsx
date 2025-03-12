import Container from "@/app/_components/container";
import { SOURCE_CODE_LINK } from "@/lib/constants";
import { Link } from "./link";

export function Footer() {
  return (
    <footer className="bg-zinc-400 border-t border-neutral-200 dark:bg-zinc-900">
      <Container>
        <div className="py-8 flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
            <Link
              href={SOURCE_CODE_LINK}
              className="font-bold"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
