import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
};

export function Button({ href, children, variant = "primary", external }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-btn px-[22px] py-[11px] text-[14px] font-medium transition-opacity hover:opacity-80";

  const styles =
    variant === "primary"
      ? "bg-text-primary text-bg"
      : "border-[0.5px] border-border-strong text-text-primary";

  return (
    <Link
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
