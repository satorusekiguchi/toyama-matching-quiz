import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function PageShell({
  children,
  className = "",
  containerClassName = "",
}: PageShellProps) {
  return (
    <div className={`min-h-dvh bg-stone-50 ${className}`}>
      <div className={`mx-auto w-full max-w-6xl ${containerClassName}`}>
        {children}
      </div>
    </div>
  );
}
