import { motion } from "framer-motion";
import { ReactNode } from "react";

type CardProps = {
  label: string;
  text: string;
  icon: ReactNode;
};

const ContactCard: React.FC<CardProps> = ({ label,  text, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="group flex justify-start gap-10 max-sm:gap-4 items-center md:h-[150px] h-auto p-6 md:p-10 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-gray-400 hover:border-primary/20">
      <div className="p-14 md:p-10 bg-primary/10 rounded-full flex items-center justify-center w-12 h-12 md:w-16 md:h-16 group-hover:bg-white transition-all duration-300">
        <h5 className="text-xl md:text-2xl">{icon}</h5>
      </div>
      <div>
        <h4 className="text-[22px] md:text-[20px] font-semibold text-gray-900 mb-1 md:mb-2">
          {label}
        </h4>
        <a
          //   href={`mailto:${email}`}
          className="text-sm md:text-base text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
          <span className="group-hover:underline">{ text}</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ContactCard;
