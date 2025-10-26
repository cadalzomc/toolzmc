import {
  HomeContact,
  HomeFAQ,
  HomeFeatures,
  HomeHero,
  HomePricing,
  HomeStats,
  HomeTestimonial,
} from "@/components/shared/sections";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeFeatures />
      <HomeTestimonial />
      <HomePricing />
      <HomeFAQ />
      <HomeContact />
    </>
  );
}
