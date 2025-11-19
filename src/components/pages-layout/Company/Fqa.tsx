"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

type FaqItemType = {
  question: string;
  answer: string;
};

const FaqItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItemType;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 last:border-none">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={onToggle}>
        <span className="text-base md:text-lg font-bold text-black">
          {item.question}
        </span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-6 w-6 text-primary" />
          ) : (
            <Plus className="h-6 w-6 text-primary" />
          )}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden">
        <p className="pb-4 text-black">{item.answer}</p>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const t = useTranslations("forcompanies");
  const faqItems = [
    {
      question: t("faq.faq1.qus"),
      answer: t("faq.faq1.ans"),
    },
    {
      question: t("faq.faq2.qus"),
      answer: t("faq.faq2.ans"),
    },
    {
      question: t("faq.faq3.qus"),
      answer: t("faq.faq3.ans"),
    },
    {
      question: t("faq.faq4.qus"),
      answer: t("faq.faq4.ans"),
    },
    {
      question: t("faq.faq5.qus"),
      answer: t("faq.faq5.ans"),
    },
    {
      question: t("faq.faq6.qus"),
      answer: t("faq.faq6.ans"),
    },
    {
      question: t("faq.faq7.qus"),
      answer: t("faq.faq7.ans"),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t("faq.title")}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
