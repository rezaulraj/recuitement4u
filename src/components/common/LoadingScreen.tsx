"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <motion.div 
      className={cn(
        "fixed inset-0 z-[999]",
        "flex items-center justify-center",
        "bg-primary/90 backdrop-blur-sm",
        "overflow-hidden" // Added overflow hidden
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative flex items-center justify-center max-w-[90vw] mx-auto"> {/* Added max width constraint */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "relative",
            "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48", // Reduced base sizes
            "flex items-center justify-center"
          )}
        >
          {/* Logo Image Container */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 1, 0.6, 1],
              scale: [0.8, 1, 0.95, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.4, 0.7, 1]
            }}
          >
            <div className="relative flex items-center justify-center w-full h-full">
              <Image
                src="/logo/Recruitment4u-single.svg"
                alt="Recruitment4u Logo"
                width={140}
                height={140}
                className={cn(
                  "object-contain",
                  "w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48" 
                )}
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;