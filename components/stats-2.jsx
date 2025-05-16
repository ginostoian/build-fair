export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Buildfair in numbers
          </h2>
          <p>
            We&apos;re bringing clarity and fairness to UK home renovations—one
            quote at a time.
          </p>
        </div>

        <div className="grid gap-0.5 *:text-center md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
          <div className="bg-muted rounded-(--radius) space-y-4 py-12">
            <div className="text-5xl font-bold">+284</div>
            <p>homeowners helped and counting</p>
          </div>
          <div className="bg-muted rounded-(--radius) space-y-4 py-12">
            <div className="text-5xl font-bold">62%</div>
            <p>quotes flagged for inflated or missing costs</p>
          </div>
          <div className="bg-muted rounded-(--radius) space-y-4 py-12">
            <div className="text-5xl font-bold">£197,300</div>
            <p> potential overspend prevented</p>
          </div>
        </div>
      </div>
    </section>
  );
}
