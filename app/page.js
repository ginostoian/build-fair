import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import RedFlags from "@/components/features-4";
import Testimonials from "@/components/testimonials";
import StatsSection from "@/components/stats-2";
import PricingPlans from "@/components/pricing-plans";
import PricingOption from "@/components/pricing-option";
import FAQs from "@/components/faqs";
import ContentSection from "@/components/content-2";
import CallToAction from "@/components/call-to-action";

export default function Page() {
  return (
    <>
      <main>
        <HeroSection />
        <Features />
        <RedFlags />
        <Testimonials />
        <StatsSection />
        <PricingPlans />
        <PricingOption />
        <FAQs />
        {/* <ContentSection /> */}
        <CallToAction />
      </main>
    </>
  );
}
