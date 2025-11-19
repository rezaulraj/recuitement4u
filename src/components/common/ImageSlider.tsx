"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ImageSliderProps {
  images: StaticImageData[];
  speed?: number; // optional: control speed of animation
  height?: string; // optional: image height
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  speed = 50,
  height = "h-8",
}) => {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <motion.div
        className="flex space-x-8 w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}>
        {[...images, ...images].map((img, index) => (
          <div key={index} className="group mx-10">
            <Image
              src={img}
              alt={`slider-img-${index}`}
              className={`w-auto ${height} object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageSlider;
