import React from "react";
import Image from "next/image";
import FemaleCircle from "../../../../public/images/valueman.jpg";
import MaleCircle from "../../../../public/images/valueman1.jpg";
import FemaleCircle1 from "../../../../public/images/valueman2.jpg";
import { useTranslations } from "next-intl";

export default function BehindValues() {
  const t = useTranslations("behindthebrand");
  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid gap-5 lg:grid-cols-[600px_600px] justify-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full max-w-[600px]">
          <div className="bg-[#B1DBF2] w-full p-6 py-8 sm:py-12 rounded-2xl flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-[28px] text-black font-bold mb-2">
                {t("content1.title")}
              </h3>
              <p className="text-black text-base sm:text-[18px]">
                {t("content1.pera")}
              </p>
            </div>
            <Image
              src={MaleCircle}
              alt="mission"
              width={150}
              height={150}
              className="rounded-full object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-[150px] md:h-[150px]"
            />
          </div>
          <div className="bg-[#D5DBDE] w-full p-6 py-8 sm:py-12 rounded-2xl flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-[28px] text-black font-bold mb-2">
                {t("content2.title")}
              </h3>
              <p className="text-black text-base sm:text-[18px]">
                {t("content2.pera")}
              </p>
            </div>
            <Image
              src={FemaleCircle1}
              alt="vision"
              width={150}
              height={150}
              className="rounded-full object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-[150px] md:h-[150px]"
            />
          </div>
        </div>
        {/* Right Column */}
        <div className="bg-[#90DA7B] w-full max-w-[600px] p-6 rounded-2xl flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl text-black font-bold mb-4">
              {t("content3.title")}
            </h3>
            <p className="mb-5 text-black text-base sm:text-[18px]">
              {t("content3.pera1")}
            </p>
            <p className="mb-5 text-black text-base sm:text-[18px]">
              {t("content3.pera2")}
            </p>
            <p className="mb-5 text-black text-base sm:text-[18px]">
              {t("content3.pera3")}
            </p>
          </div>
          <div className="self-end mt-4">
            <Image
              src={FemaleCircle}
              alt="approach"
              width={100}
              height={100}
              className="rounded-full object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
