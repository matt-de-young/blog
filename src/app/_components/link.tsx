import NextLink from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = "" }: LinkProps) {
  const baseClasses = `border-b-2 border-amber-400 dark:border-amber-300 hover:text-amber-400 dark:hover:text-amber-300 transition-colors ${className}`;

  const isExternal =
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//');

  if (isExternal) {
    return (
      <a
        href={href}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={baseClasses}>
      {children}
    </NextLink>
  );
}
