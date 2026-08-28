import FeaturedCategories from "@components/FeaturedCategories";
import FeaturedProducts from "@components/FeaturedProducts";
import Hero from "@components/Hero";
import Newsletter from "@components/Newsletter";
import PromoSection from "@components/PromoSection";
import WhyShopHub from "@components/WhyShopHub";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <PromoSection />
      <WhyShopHub />
      <Newsletter />
    </main>
  );
}
