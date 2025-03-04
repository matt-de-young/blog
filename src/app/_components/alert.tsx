import Container from "@/app/_components/container";
import cn from "classnames";

type Props = {
  draft?: boolean;
};

const Alert = ({ draft }: Props) => {
  return draft ? (
    <></>
  ) : (
    <div
      className={cn("border-b dark:bg-zinc-900", {
        "bg-zinc-900 border-neutral-800 text-white": draft,
        "bg-neutral-50 border-neutral-200": !draft,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
            <>
              This page is a draft.
            </>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
