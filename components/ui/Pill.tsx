export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-pill border-[0.5px] border-border px-3 py-1 text-[12px] text-text-muted">
      {children}
    </span>
  );
}
