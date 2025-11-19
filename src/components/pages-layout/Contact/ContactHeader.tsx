"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function ContactHeader() {
  const t = useTranslations("contactus");
  const HandleScrollToSection = () => {
    const section = document.getElementById("offices");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={cn(
        "bg-[url('/images/contact-bg.jpg')] w-screen h-[500px] md:h-[600px] lg:h-[700px]", // Adjusted height
        "left-[50%] right-[50%] mx-[-50vw]",
        "relative -mt-24 px-0",
        "overflow-hidden",
        "bg-cover bg-center bg-no-repeat",
        "flex items-center" // Add flex to center content vertically
      )}>
      <motion.div
        className="container mx-auto px-4 sm:px-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="max-w-2xl">
          {" "}
          {/* Added max-width for better text readability */}
          <motion.h4
            className="text-sm sm:text-4xl md:text-sm font-bold text-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
            {t("text")}
          </motion.h4>
          <motion.h1
            className="text-[50px] max-md:[30px] max-sm:text-[20px] font-extrabold text-black mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}>
            {t("title")}
          </motion.h1>
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}>
            <Button
              onClick={HandleScrollToSection}
              className="bg-primary rounded-full text-white font-bold text-[25px] py-8 px-20">
              {t("btnText")}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
