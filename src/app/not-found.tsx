import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-cream px-4 text-center">
      <p className="label text-muted">404</p>
      <h1 className="font-serif text-[72px] leading-[0.9] text-hunter md:text-[120px]">
        Nothing <span className="italic">here.</span>
      </h1>
      <p className="max-w-[420px] text-ink-2">The page you&apos;re looking for doesn&apos;t exist — the work does.</p>
      <Link href="/" className="bg-hunter px-[30px] py-[17px] text-xs font-semibold uppercase tracking-[0.08em] text-cream-2">
        Back to the portfolio
      </Link>
    </main>
  );
}
