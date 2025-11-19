import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardContainer, CardBody } from "@/components/ui/3d-card";
import { useTranslations } from "next-intl";

const HomeEmploy = () => {
  const t = useTranslations("homepartner");

  const stats = [
    {
      number: t("state1.no1"),
      title: t("state1.statetitle"),
      description: t("state1.statedec"),
    },
    {
      number: t("state2.no2"),
      title: t("state2.statetitle"),
      description: t("state2.statedec"),
    },
    {
      number: t("state3.no3"),
      title: t("state3.statetitle"),
      description: t("state3.statedec"),
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Container remains unchanged */}
          <div className="order-1 lg:order-2 mb-8 lg:mb-0 max-w-[300px] sm:max-w-full mx-auto">
            <CardContainer className="w-full !p-0" containerClassName="!py-0">
              <CardBody className="relative  w-full aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden">
                {/* Updated background gradient using primary-secondary */}
                <div className="absolute inset-0 ">
                  <Image
                    src="/images/partner.png"
                    alt="Employment Services"
                    fill
                    className="p-2  object-contain sm:p-4 rounded-lg  hover:opacity-90 transition-all duration-300"
                    priority
                  />
                </div>
                {/* Updated overlay gradient */}
                {/* <div className="absolute inset-0 rounded-lg shadow-xl bg-gradient-to-r from-primary-secondary/10 to-transparent" /> */}
              </CardBody>
            </CardContainer>
          </div>
          {/* Content with updated text colors */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black">
              {t("partner")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
              {t("partnerdesc")}
              {/* We specialize in recruiting and selecting foreign workers from
              various regions, including Asia, the Gulf, North and South
              America, and Africa. Operating from our central offices in Dubai,
              we place workers in countries such as the UK, Croatia, Malta,
              Bulgaria, Poland, Romania, and other European nations. */}
            </p>
          </motion.div>
        </div>

        {/* Stats Grid with updated text colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative mt-16 lg:mt-24">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 70,
                  damping: 12,
                }}
                className={cn(
                  "p-4",
                  "bg-white shadow-sm",
                  "relative group",
                  "hover:shadow-lg transition-all duration-300",
                  "transform hover:-translate-y-1",
                  "rounded-lg",
                  "hover:bg-primary"
                )}>
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="relative shrink-0">
                    <div
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center 
                      transition-all duration-300 group-hover:bg-white">
                      <span
                        className="text-2xl font-bold text-primary 
                        group-hover:text-primary transition-colors duration-300">
                        {stat.number}
                      </span>
                    </div>
                  </div>
                  <h3
                    className="text-lg font-bold text-black group-hover:text-white 
                    transition-colors duration-300">
                    {stat.title}
                  </h3>
                </div>
                <p
                  className="text-sm text-black pl-16 leading-relaxed 
                  group-hover:text-white/90 transition-colors duration-300">
                  {stat.description}
                </p>
              </motion.div>

              {/* Divider with updated color */}
              {(index === 0 || index === 1) && (
                <div
                  className="hidden lg:block absolute w-px bg-black/10"
                  style={{
                    left: `${(index + 1) * (100 / 3)}%`,
                    transform: "translateX(-50%)",
                    height: "85%",
                    top: "8%",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeEmploy;
