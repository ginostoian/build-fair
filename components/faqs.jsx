export default function FAQs() {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Frequently <br className="hidden lg:block" /> Asked{" "}
              <br className="hidden lg:block" />
              Questions
            </h2>
            <p>Accusantium quisquam. Illo, omnis?</p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
            <div className="pb-6">
              <h3 className="font-medium">
                Do you actually read the quote, or is it AI?
              </h3>
              <p className="text-muted-foreground mt-4">
                No robots here. A real human, with experience in UK renovations,
                reviews every quote manually. We look at scope, pricing,
                wording, and layout—so nothing gets missed.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">What file formats can I upload?</h3>
              <p className="text-muted-foreground mt-4">
                PDFs are ideal, but we can also handle screenshots, Word docs,
                even photos from your phone. If we can read it, we can review
                it.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">How long does it take?</h3>
              <p className="text-muted-foreground my-4">
                Standard turnaround is within 24 hours, Mon-Fri. If it&apos;s
                urgent, email us—we&apos;ll see what we can do.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">What if my quote looks fine?</h3>
              <p className="text-muted-foreground mt-4">
                Great-we&apos;ll tell you that too. We&apos;re not here to find
                problems where there aren&apos;t any. If your quote&apos;s clean
                and fair, we&apos;ll say so.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Do you contact my builder?</h3>
              <p className="text-muted-foreground mt-4">
                Never. This is completely confidential. We review your quote and
                send you the report—what you do with it is up to you.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">What do I actually get back?</h3>
              <p className="text-muted-foreground mt-4">
                You&apos;ll receive a clean, annotated version of your quote -
                PDF - plus a plain-English summary of any issues we found—and
                what to do next.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                Why would I need a second opinion on a builder&apos;s quote?
              </h3>
              <p className="text-muted-foreground mt-4">
                Because most quotes are vague, full of assumptions, or padded
                with extras you&apos;d never spot unless you&apos;ve seen 100+
                before. A second opinion helps you challenge, clarify, or walk
                away before it costs you thousands.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                Can you help me get another quote if mine&apos;s bad?
              </h3>
              <p className="text-muted-foreground mt-4">
                Not directly-but we&apos;ll tell you what&apos;s missing or
                unclear so you can go back to your builder, or others, and get
                it sorted. Think of us as your guide, not your broker.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                What if I’ve got two or three quotes for the same job?
              </h3>
              <p className="text-muted-foreground mt-4">
                That&apos;s actually ideal. We can compare them side-by-side,
                flag inconsistencies, and help you understand who&apos;s
                offering what—and where the risks are. Get in touch and
                we&apos;ll give you a multi-quote discount.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Have another question?</h3>
              <p className="text-muted-foreground mt-4">
                Please reach out to us and we&apos;ll be happy to help with any
                query you might have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
