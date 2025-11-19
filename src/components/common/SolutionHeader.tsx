import React from "react";
import { Button } from "../ui/button";
type PropsBanner = {
  title: string;
  description: string;
  onClick?: () => void;
};

const SolutionHeader: React.FC<PropsBanner> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <div className="w-full max-w-[600px] mx-auto flex flex-col text-center items-center justify-center px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-black font-bold mb-4 sm:mb-6">
        {title}
      </h1>
      <div className="w-full">
        <p className="text-base sm:text-lg md:text-[18px] text-black leading-relaxed">
          {description}
        </p>
        <Button
          onClick={onClick}
          className="px-6 sm:px-8 md:px-12 py-3 sm:py-5 md:py-7 rounded-full text-lg sm:text-xl md:text-2xl lg:text-[25px] font-bold mt-6 sm:mt-8 md:mt-10">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default SolutionHeader;
