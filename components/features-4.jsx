import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function RedFlags() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Red Flags We Catch All the Time
          </h2>
          <p>
            Most quotes look fine on the surface. Until you know what to look
            for.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Vague line items</h3>
            </div>
            <p className="text-sm">
              “Electrics - £3,200” with zero detail? Not good enough.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">
                Provisional sums with no cap
              </h3>
            </div>
            <p className="text-sm">
              “To be confirmed later” often means “surprise invoice.”
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4" />

              <h3 className="text-sm font-medium">Missing scope</h3>
            </div>
            <p className="text-sm">
              No mention of plastering, waste removal, or final fittings?
              You&apos;ll be paying extra.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pencil className="size-4" />

              <h3 className="text-sm font-medium">Labour cost inflation</h3>
            </div>
            <p className="text-sm">
              We&apos;ve seen £600/day pricing for junior trades. Nah.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings2 className="size-4" />

              <h3 className="text-sm font-medium">Double-dipping</h3>
            </div>
            <p className="text-sm">
              Charging for both “install” and “labour”? We&apos;ll show you
              where the overlap is.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium">Dodgy timelines or terms</h3>
            </div>
            <p className="text-sm">
              Vague completion dates and one-sided contracts? We flag them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
