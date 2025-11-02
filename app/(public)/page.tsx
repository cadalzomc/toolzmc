import { HomeFAQ, HomeFeatures, HomeHero, HomeStats, HomeTestimonial } from "@/components/shared/sections";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeFeatures />
      <HomeTestimonial />
      <HomeFAQ />
    </>
  );
}
