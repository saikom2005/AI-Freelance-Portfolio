export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1.2px] text-text-faint">
      {children}
    </p>
  );
}
