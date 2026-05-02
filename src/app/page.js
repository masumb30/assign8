import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import PopularSection from "@/components/PopularSection";

export default function Home() {
  return (
    <div className="max-w-7xl px-2 mx-auto  pb-12">
      <HeroSlider />
      <PopularSection />
    </div>
  );
}
