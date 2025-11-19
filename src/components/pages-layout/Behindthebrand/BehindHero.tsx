"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function BehindHero() {
  const t = useTranslations("behindthebrand");
  return (
    <section className="relative bg-primary xl:ml-[-10vw] lg:ml-[-10vw] md:ml-[-10vw] sm:ml-[0vw] ml-0 w-screen overflow-hidden">
      {/* Background images container */}
      <div className="flex h-[70vh] min-h-[500px]">
        {/* Left image */}
        <div
          className="w-1/2 bg-[url('/images/behind.jpg')] bg-cover bg-no-repeat bg-center"
          style={{ backgroundPosition: "50% center" }}></div>

        {/* Right image - now with relative positioning for the child Image */}
        <div className="w-1/2 relative bg-[url('/images/behind2.jpg')] bg-cover bg-no-repeat bg-center"></div>
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
              {t("description")}
            </p>
            <Link
              className="bg-primary text-[25px] font-bold mt-5 text-white px-8 py-4 rounded-md hover:text-slate-700 transition-all"
              href="https://calendly.com/recruitment4u-head-office"
              target="_blank">
              {t("btn")}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
