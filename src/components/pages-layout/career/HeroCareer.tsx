"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  FiMapPin,
  FiBriefcase,
  FiArrowRight,
  FiStar,
  FiUsers,
  FiAward,
} from "react-icons/fi";
import { useTranslations } from "next-intl";
import Link from "next/link";
const HeroCareer: React.FC = () => {
  const t = useTranslations("career");
  const HandleScrollToPositions = () => {
    const section = document.getElementById("open-positions");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div
      className={cn(
        "bg-[url('/images/contact-bg.jpg')] w-screen h-[600px] md:h-[700px] lg:h-[800px]",
        "left-[50%] right-[50%] mx-[-50vw]",
        "relative -mt-20 px-0",
        "overflow-hidden",
        "bg-cover bg-center bg-no-repeat",
        "flex items-center"
      )}
    >
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-[#70C8BC]/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <FiAward className="text-[#70C8BC]" />
                  <span className="text-sm text-white font-medium">
                    {t("tag")}
                  </span>
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                >
                  {t("titleh1")}
                  <span className="block" style={{ color: "#70C8BC" }}>
                    {t("titleh2")}
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                  {t("paragraph")}
                </motion.p>
              </div>

              <motion.div
                className="grid grid-cols-3 gap-6 py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                {[
                  { icon: FiUsers, number: "5K+", label: t("stats1") },
                  { icon: FiMapPin, number: "25+", label: t("stats2") },
                  {
                    icon: FiBriefcase,
                    number: "100+",
                    label: t("stats3"),
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-[#70C8BC]/20 hover:border-[#70C8BC]/40 transition-all duration-300"
                  >
                    <stat.icon
                      className="w-8 h-8 mx-auto mb-2"
                      style={{ color: "#70C8BC" }}
                    />
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#70C8BC" }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <Button
                  onClick={HandleScrollToPositions}
                  className="flex items-center justify-center gap-3 text-white px-8 py-6 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-0"
                  style={{
                    backgroundColor: "#70C8BC",
                    boxShadow: "0 20px 40px rgba(112, 200, 188, 0.3)",
                  }}
                >
                  {t("botton2")}
                  <FiArrowRight className="w-5 h-5" />
                </Button>

                <Link
                  href={"/contact"}
                  className="flex items-center justify-center gap-3 bg-black/50 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-bold text-lg border border-[#70C8BC]/30 hover:border-[#70C8BC]/50 hover:bg-black/70 transition-all duration-300"
                >
                  {t("botton3")}
                  <FiStar className="w-5 h-5" style={{ color: "#70C8BC" }} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-md">
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-[#70C8BC]/30 hover:border-[#70C8BC]/50 transition-all duration-300">
                  <div className="text-center space-y-4">
                    <FiBriefcase
                      className="w-16 h-16 mx-auto"
                      style={{ color: "#70C8BC" }}
                    />
                    <h3 className="text-2xl font-bold text-white">
                      {t("jobsectiontitle")}
                    </h3>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-[#70C8BC] flex-shrink-0"></div>
                        <span>{t("listcate1")}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-[#70C8BC] flex-shrink-0"></div>
                        <span>{t("listcate2")}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-[#70C8BC] flex-shrink-0"></div>
                        <span>{t("listcate3")}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-[#70C8BC] flex-shrink-0"></div>
                        <span>{t("listcate4")}</span>
                      </div>
                    </div>
                    <div
                      onClick={HandleScrollToPositions}
                      className="inline-flex items-center gap-2 font-semibold cursor-pointer hover:gap-3 transition-all duration-300 pt-4"
                      style={{ color: "#70C8BC" }}
                    >
                      {t("botton1")}
                      <FiArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroCareer;
