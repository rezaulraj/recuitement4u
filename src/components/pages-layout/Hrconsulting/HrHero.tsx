import Image from "next/image";
import HRImage from "../../../../public/images/hrconsultingleft.jpg"; // or use another overlay image
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
  const t = useTranslations("hrconsulting");
  return (
    <section>
      <div
        className="bg-cover bg-no-repeat bg-center min-h-[600px] flex items-center px-5"
        style={{
          backgroundImage: `url('/images/hrconsultingcover.jpg')`, // or dynamically via import
        }}>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-black">
            <h1 className="text-[52px] font-bold mb-6">{t("title")}</h1>
            <p className="text-[25px] mb-6 max-w-lg">{t("desc1")}</p>
            <Link
              className="bg-primary text-[25px] font-bold mt-5 text-white px-8 py-4 rounded-md hover:text-slate-700 transition-all"
              href="https://calendly.com/recruitment4u-head-office"
              target="_blank">
              {t("buttonText")}
            </Link>
          </div>
          {/* Right image */}
          <div className="hidden md:block">
            <Image
              src={HRImage}
              alt="HR consulting illustration"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
      <div className=" bg-white ">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-5">
            <h5 className="text-black text-[22px] md:text-[24px] font-bold mb-6">
              {t("ads")}
            </h5>
            <ImageSlider images={images} height="h-8" speed={50} />
          </div>
        </div>
      </div>
    </section>
  );
}
