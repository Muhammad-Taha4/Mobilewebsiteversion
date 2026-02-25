import Link from "next/link";
import TopSelling from "@/components/TopSelling";
import WeeklyBestSellers from "@/components/WeeklyBestSellers";
import PromoBanners from "@/components/PromoBanners";
import Hero from "@/components/Hero";
import BrandsMarquee from "@/components/BrandsMarquee";
import DiscountedProducts from "@/components/DiscountedProducts";
import ScrollReveal from "@/components/ScrollReveal";
import DarkPromoBanner from "@/components/DarkPromoBanner";

export default function Home() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 to-slate-100 min-h-screen pb-12">
      {/* Hero Section Slideshow */}
      <Hero />

      <div className="space-y-12 mt-8 md:space-y-16 md:mt-12">
        {/* Infinite Brand Marquee (Replaced Static Categories) */}
        <ScrollReveal delay={100}>
          <BrandsMarquee />
        </ScrollReveal>

        {/* Top Selling Mobile Parts */}
        <ScrollReveal delay={100}>
          <TopSelling />
        </ScrollReveal>

        {/* Promo Banners as Main Categories Navigation */}
        <ScrollReveal delay={100}>
          <PromoBanners />
        </ScrollReveal>

        {/* Products With Discounts */}
        <ScrollReveal delay={100}>
          <DiscountedProducts />
        </ScrollReveal>

        {/* Dark Promo Banner */}
        <ScrollReveal delay={100}>
          <DarkPromoBanner />
        </ScrollReveal>

        {/* Weekly Best Sellers */}
        <ScrollReveal delay={100}>
          <WeeklyBestSellers />
        </ScrollReveal>
      </div>
    </div>
  );
}
