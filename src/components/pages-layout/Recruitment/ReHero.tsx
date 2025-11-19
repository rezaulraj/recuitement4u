import React from "react";
import { motion } from "framer-motion";
import ImageSlider from "@/components/common/ImageSlider";
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
import { useTranslations } from "next-intl";
import Link from "next/link";

const images = [img2, img3, img4, img5, img6, img7, img8, img9, img10];
export default function Hero() {
  const t = useTranslations("recruitmentcard");
  return (
    <section className="relative bg-[#E8F5F4] ml-[-10vw]  w-screen overflow-hidden">
      <div className="container mx-auto">
        {/* Background images container */}
        <div className="flex h-[70vh] min-h-[500px]">
          {/* Left image */}
          <div
            className="w-1/2 bg-[url('/images/reruitmentleft.jpg')] bg-cover bg-no-repeat bg-center"
            style={{ backgroundPosition: "50% center" }}></div>

          {/* Right image - now with relative positioning for the child Image */}
          <div className="w-1/2 relative bg-[url('/images/reruitmentright.jpg')] bg-cover bg-no-repeat bg-center"></div>
        </div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t("title")}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                {t("desc1")}
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                {t("desc2")}
              </p>
              <Link
                className="bg-primary text-[25px] font-bold mt-5 text-white px-8 py-4 rounded-md hover:text-slate-700 transition-all"
                href="https://calendly.com/recruitment4u-head-office"
                target="_blank">
                {t("buttonText")}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" bg-white ">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-5">
            <h5 className="text-black text-[22px] md:text-[24px] font-bold">
              {t("ads")}
            </h5>
            <ImageSlider images={images} height="h-8" speed={50} />
          </div>
        </div>
      </div>
    </section>
  );
}
