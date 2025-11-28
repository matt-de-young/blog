import { ComponentChildren } from "preact";

interface LinkProps {
  href: string;
  children: ComponentChildren;
  openInNewTab?: boolean;
  class?: string;
}

export function Link({
  href,
  children,
  openInNewTab = false,
  class: className,
}: LinkProps) {
  const targetProps = openInNewTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...targetProps}
      class={`inline-flex items-center gap-2 text-slate-600 hover:text-blue-800 transition-colors duration-200 group ${
        className || ""
      }`}
    >
      {children}
    </a>
  );
}
