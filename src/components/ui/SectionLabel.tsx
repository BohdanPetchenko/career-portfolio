export function SectionLabel({ n, children, dark = false }: { n: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`label flex gap-3.5 ${dark ? "text-muted-dark" : "text-muted"}`}>
      <span>{n}</span>
      <span>{children}</span>
    </p>
  );
}
