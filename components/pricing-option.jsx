import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingOption() {
  return (
    <div className="relative py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            For bigger builds-where one missed detail can cost thousands.
          </h2>
        </div>
        <div className="mt-8 md:mt-20">
          <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
            <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="pb-12 text-center md:pb-0 md:pr-12">
                <h3 className="text-2xl font-semibold">BuildFair Premium</h3>
                <p className="mt-2 text-lg">
                  For renovation projects over £45K, extensions or lofts
                </p>
                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                  <span className="text-4xl">£</span>299
                </span>

                <div className="flex justify-center">
                  <Button
                    asChild
                    size="lg"
                  >
                    <Link href="#">Get started</Link>
                  </Button>
                </div>

                <p className="text-muted-foreground mt-12 text-sm">
                  Includes : PDF Report, Email Q&A, Peace of mind before signing
                </p>
              </div>
              <div className="relative pl-4">
                <ul
                  role="list"
                  className="space-y-4"
                >
                  {[
                    "Expert review",
                    "Red flags highlighted line by line",
                    "Plain-English report with cost guidance",
                    "Built-in peace of mind before you commit",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <Check className="size-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-6 text-sm">
                  Team can be any size, and you can add or switch members as
                  needed. Companies using our platform include:
                </p>
                <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
                  <img
                    className="h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                  <img
                    className="h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/column.svg"
                    alt="Column Logo"
                    height="16"
                    width="auto"
                  />
                  <img
                    className="h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/github.svg"
                    alt="GitHub Logo"
                    height="16"
                    width="auto"
                  />
                  <img
                    className="h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Nike Logo"
                    height="20"
                    width="auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
