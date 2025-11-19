"use client";
import { motion, Variants } from "framer-motion";
import Card from "@/components/common/Card";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const CardHome = () => {
  const card1 = useTranslations("cardhome1");
  const card2 = useTranslations("cardhome2");
  const card3 = useTranslations("cardhome3");

  const router = useRouter();
  const handleButtonClick = (path: string) => {
    router.push(path);
  };
  return (
    <motion.div
      className="container mx-auto px-4 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}>
      <motion.div className="flex justify-center items-center max-md:flex-col gap-4 md:gap-8">
        <motion.div
          onClick={() => handleButtonClick("/recruitment")}
          className="w-full sm:w-[360px] cursor-pointer"
          variants={cardVariants}>
          <Card
            title={card1("title")}
            description={card1("description")}
            bgColor="bg-[#05123F]"
          />
        </motion.div>

        <motion.div
          onClick={() => handleButtonClick("/hr-consulting")}
          className="w-full sm:w-[360px] cursor-pointer"
          variants={cardVariants}>
          <Card
            title={card2("title")}
            description={card2("description")}
            bgColor="bg-[#009AEE]"
          />
        </motion.div>

        <motion.div
          onClick={() => handleButtonClick("/outstaffing")}
          className="w-full sm:w-[360px] cursor-pointer"
          variants={cardVariants}>
          <Card
            title={card3("title")}
            description={card3("description")}
            bgColor="bg-[#90DA7B]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardHome;
