import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import PopularSection from "@/components/PopularSection";
import SummerCareTips from "@/components/SummerCareTips";

export default function Home() {
  return (
    <div className="max-w-7xl px-2 mx-auto space-y-12 pb-12">
      <HeroSlider />
      <PopularSection />
      <SummerCareTips />
    </div>
  );
}
