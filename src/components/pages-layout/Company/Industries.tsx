"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Industries() {
  const [openItem, setOpenItem] = useState<number>(0);
  const t = useTranslations("forcompanies");

  const industriesData = [
    {
      title: t("industrie1.title"),
      content: [t("industrie1.content1")],
    },
    {
      title: t("industrie2.title"),
      content: [t("industrie2.content2")],
    },
    {
      title: t("industrie3.title"),
      content: [t("industrie3.content3")],
    },
    {
      title: t("industrie4.title"),
      content: [t("industrie4.content4")],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image with adjusted width and padding */}
          <div className="relative order-1 lg:order-1 py-8 w-full max-w-3xl mx-auto">
            {" "}
            {/* Added max-w-3xl */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={cn(
                "relative w-full mx-auto",
                "h-[250px] sm:h-[400px] lg:h-[550px]", // Increased heights
                "rounded-2xl",
                "p-4 sm:p-6 lg:p-8", // Responsive padding
                "flex items-center justify-center" // Added flex for better centering
              )}>
              <Image
                src="/images/teamworks.png"
                alt="Industry Illustration"
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                quality={95}
              />
            </motion.div>
          </div>

          {/* Right side - Content with updated accordion icons */}
          <div className="order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-black">
                  {t("title")}
                </h2>
                <p className="text-black">{t("desc")}</p>
              </div>

              <div className="space-y-4">
                {industriesData.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b border-gray-200">
                    <button
                      onClick={() =>
                        setOpenItem(openItem === index ? -1 : index)
                      }
                      className="w-full py-4 flex justify-between items-center group hover:text-primary transition-colors">
                      <h3 className="text-lg font-semibold text-left text-black group-hover:text-primary transition-colors">
                        {industry.title}
                      </h3>
                      {openItem === index ? (
                        <Minus className="w-5 h-5 text-primary transition-colors" />
                      ) : (
                        <Plus className="w-5 h-5 text-black group-hover:text-primary transition-colors" />
                      )}
                    </button>
                    <AnimatePresence initial={false}>
                      {openItem === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden">
                          <div className="pb-4 text-black">
                            <p className="leading-relaxed">
                              {industry.content}.
                            </p>
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
      </div>
    </section>
  );
}
