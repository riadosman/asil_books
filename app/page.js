import Image from "next/image";
import ImageSlider from "@/components/Slider";
import Categorys from "@/components/Categorys";
import BestSelling from "@/components/BestSelling";
import PublishingHouse from "@/components/PublishingHouse";
export default function Home() {
  return (
    <div>
      <ImageSlider />
      <Categorys />
      <BestSelling />
      <PublishingHouse />
    </div>
  );
}
