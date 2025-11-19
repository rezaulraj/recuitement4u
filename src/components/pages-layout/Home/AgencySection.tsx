import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
// import NoSelector from "@/components/common/Noselector";

export default function AgencySection() {
  const [openItem, setOpenItem] = useState<number>(0);
  const t = useTranslations("agencysection");

  const accordionItems = [
    {
      title: t("accordionItems1.accordiontitle"),
      content: t("accordionItems1.contentdec"),
    },
    {
      title: t("accordionItems2.accordiontitle"),
      content: t("accordionItems2.contentdec"),
    },
    {
      title: t("accordionItems3.accordiontitle"),
      content: t("accordionItems3.contentdec"),
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-18 w-full overflow-hidden">
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Icons Section */}
          <div className="relative order-1 lg:order-1 grid grid-cols-2 gap-4 w-full max-w-md mx-auto lg:mt-4">
            {" "}
            {/* Reduced top margin */}
            {/* Top row - Two cards side by side */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square rounded-md bg-primary flex items-center justify-center ">
              <Image
                src="/images/modern1.png"
                alt="Image"
                className="w-full h-full object-contain"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="aspect-square rounded-md bg-primary flex items-center justify-center -mt-4 sm:-mt-8">
              <Image
                src="/images/modern2.png"
                alt="Image"
                className="w-full h-full object-contain"
                width={100}
                height={100}
              />
            </motion.div>
            {/* Bottom row - Centered card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-2 rounded-md aspect-square bg-primary flex items-center justify-center  w-1/2 -mt-10 sm:-mt-14 ml-16 sm:ml-24">
              <Image
                src="/images/modern3.png"
                alt="Image"
                className="w-full  h-full object-contain"
                width={100}
                height={100}
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-2 mt-6" // Reduced top margin
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black">
              {t("title")}
            </h2>

            <div className="space-y-3">
              {accordionItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border-b border-black/10">
                  <button
                    onClick={() => setOpenItem(openItem === index ? -1 : index)}
                    className="w-full py-2 sm:py-3 lg:py-4 flex justify-between items-center group hover:text-primary transition-colors">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-left text-black">
                      {item.title}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 text-black",
                        openItem === index ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openItem === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden">
                        <div className="pb-2 sm:pb-3 lg:pb-4 text-xs sm:text-sm lg:text-base text-black">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.content,
                            }}></p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
