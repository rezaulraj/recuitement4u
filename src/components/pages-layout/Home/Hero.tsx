import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
// import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
// import { useRouter } from "next/router";

const Hero = () => {
  const t = useTranslations("hero");
  // const router = useRouter();
  // const handleButtonClick = (path: string) => {
  //   router.push(path);
  // };
  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden",
        "py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32",
        "bg-primary w-screen",
        "left-[50%] right-[50%] mx-[-50vw] px-0",
        "min-h-[85vh] md:min-h-[90vh] lg:min-h-[85vh] xl:min-h-[100vh]",
        "-mt-20"
      )}>
      <div className="container mx-auto px-4 pt-12 sm:pt-16 md:pt-20 lg:pt-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Image - Left Side on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.6,
            }}
            className={cn(
              "relative w-full",
              "max-w-[220px] xs:max-w-[260px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[550px]",
              "aspect-square",
              "mx-auto",
              "order-1 lg:order-1", // 👈 Now image is first on all screens
              "-mt-6 sm:mt-0 mb-6 sm:mb-0"
            )}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute left-0 top-0 h-full w-full object-cover">
              <source
                src="https://res.cloudinary.com/dtw7qhd69/video/upload/v1753440662/12_ujxinn.mp4"
                type="video/mp4"
              />
            </video>
            {/* <ImageFrameBorder> */}
          </motion.div>

          {/* Content - Right Side on Desktop */}
          <div className="order-2 lg:order-2 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }} // 👈 animate from right now
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.4,
              }}
              className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {t("title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                }}
                className="text-sm sm:text-base lg:text-lg text-white max-w-xl">
                {t("subtitle")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                }}
                className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-2 sm:pt-4">
                {/* Buttons */}
                {/* <motion.button
                  onClick={() => handleButtonClick("/contact")}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-4 sm:px-8 py-2.5 sm:py-4 rounded-full font-semibold",
                    "bg-primary-secondary text-primary",
                    "transform transition-all duration-200",
                    "text-xs sm:text-sm lg:text-base",
                    "hover:bg-primary-secondary/90"
                  )}>
                  {t("buttonText1")}
                </motion.button> */}

                {/* <motion.button
                  onClick={() => handleButtonClick("/for-companies")}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-4 sm:px-8 py-2.5 sm:py-4 rounded-full font-semibold",
                    "bg-primary text-white",
                    "border-2 border-primary-secondary",
                    "transform transition-all duration-200",
                    "text-xs sm:text-sm lg:text-base",
                    "hover:bg-primary-secondary/10"
                  )}>
                  {t("buttonText2")}
                </motion.button> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
