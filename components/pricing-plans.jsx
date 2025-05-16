import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingPlans() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Pricing that Scales with You
          </h1>
          <p>
            Gemini is evolving to be more than just the models. It supports an
            entire to the APIs and platforms helping developers and businesses
            innovate.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
          <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
            <div className="space-y-4">
              <div>
                <h2 className="font-medium">Project &lt; £15,000</h2>
                <span className="my-3 block text-2xl font-semibold">£49</span>
                <p className="text-muted-foreground text-sm">Per quote</p>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full"
              >
                <Link href="">Get Started</Link>
              </Button>

              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Expert review within 24h",
                  "Red flags highlighted line by line",
                  "Plain-English report with cost guidance",
                  "Built-in peace of mind before you commit",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium">Project &lt; £45,000</h2>
                  <span className="my-3 block text-2xl font-semibold">£99</span>
                  <p className="text-muted-foreground text-sm">Per quote</p>
                </div>

                <Button
                  asChild
                  className="w-full"
                >
                  <Link href="">Get Started</Link>
                </Button>
              </div>

              <div>
                <div className="text-sm font-medium">
                  Limited reviews per week
                </div>

                <ul className="mt-4 list-outside space-y-3 text-sm">
                  {[
                    "Expert review within 72h",
                    "Red flags highlighted line by line",
                    "Plain-English report with cost guidance",
                    "Built-in peace of mind before you commit",
                    "Scope gaps, vague terms, and hidden extras flagged",
                    " Advice on what to clarify, question, or renegotiate",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
