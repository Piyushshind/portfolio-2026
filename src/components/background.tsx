export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* aurora gradient blobs */}
      <div className="animate-aurora absolute -left-24 -top-40 h-[44rem] w-[44rem] rounded-full bg-cyan/20 blur-[130px]" />
      <div className="animate-float-slower absolute -right-32 top-1/3 h-[40rem] w-[40rem] rounded-full bg-violet/25 blur-[140px]" />
      <div className="animate-float-slow absolute -bottom-20 left-1/4 h-[34rem] w-[34rem] rounded-full bg-cyan/10 blur-[130px]" />

      {/* grid */}
      <div className="grid-overlay absolute inset-0 opacity-60" />

      {/* film grain */}
      <div className="grain absolute inset-0 opacity-[0.12] mix-blend-overlay" />

      {/* vignette to ground the content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--background)_100%)]" />
    </div>
  );
}
