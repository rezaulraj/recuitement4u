import React from "react";
// import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import ImageSlider from "@/components/common/ImageSlider";
import { useTranslations } from "next-intl";
// Import images
import FemaleImage from "../../../../public/images/brandfemale.jpeg";
// import img1 from "../../../../public/images/brand1.png";
import img2 from "../../../../public/images/brand2.png";
import img3 from "../../../../public/images/brand3.png";
import img4 from "../../../../public/images/brand4.png";
import img5 from "../../../../public/images/brand5.png";
import img6 from "../../../../public/images/brand6.png";
import img7 from "../../../../public/images/brand7.png";
import img8 from "../../../../public/images/brand8.png";
import img9 from "../../../../public/images/brand9.png";
import img10 from "../../../../public/images/brand10.png";

// Store images in an array
const images = [ img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Brand = () => {
  const t = useTranslations("brand");
  const router = useRouter();
  const handleButtonClick = (path: string) => {
    router.push(path);
  };
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 mx-auto overflow-hidden">
      <div className="container mb-10 mx-auto text-center">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          {t("title")}
        </h1>
      </div>
      {/* Smooth Scrolling Image Slider */}
      <ImageSlider images={images} height="h-8" speed={50} />
      <div className="container py-12 mx-auto flex max-md:flex-col  justify-center items-center text-center mt-8">
        <div className="max-md:mt-8 ">
          <Image
            src={FemaleImage}
            alt="brand"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h5 className="text-black text-[32px] max-md:text-[32px] font-bold">
            {t("subtitle")}
          </h5>
          <Button
            onClick={() => handleButtonClick("/contact")}
            className="bg-primary text-[30px] mt-5 px-12 py-8 font-bold">
            {t("brandbutton")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Brand;
