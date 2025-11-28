import type { ComponentChildren } from "preact";

export interface ButtonProps {
  id?: string;
  onClick?: () => void;
  children?: ComponentChildren;
  disabled?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({ children, href, disabled, ...props }: ButtonProps) {
  const className =
    "inline-block px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-medium rounded-lg hover:from-blue-800 hover:to-indigo-800 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

  if (href && !disabled) {
    return (
      <a href={href} class={className}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} disabled={disabled} class={className}>
      {children}
    </button>
  );
}
