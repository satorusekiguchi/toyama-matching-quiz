import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className={`min-h-dvh bg-stone-50 ${className}`}>
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </div>
  );
}
