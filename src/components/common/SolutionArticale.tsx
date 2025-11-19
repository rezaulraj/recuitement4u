import React from "react";
import Image from "next/image";

type SolutionHeroProps = {
  imageSrc: string;
  title: string;
  highlightedText: string;
  paragraphs: string[];
};

const SolutionArticale: React.FC<SolutionHeroProps> = ({
  imageSrc,
  title,
  highlightedText,
  paragraphs,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start px-4">
      {/* Image */}
      <div className="md:col-span-4 relative w-full h-[300px] md:h-[600px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Text Content */}
      <div className="md:col-span-8">
        <h1 className="text-3xl md:text-5xl leading-snug text-black font-bold mb-6">
          {title}
        </h1>

        {/* Highlighted text block */}
        <div className="border-l-4 border-primary pl-6 mt-4">
          <p className="text-base md:text-lg font-bold text-black">
            {highlightedText}
          </p>
        </div>

        {/* Dynamic paragraphs */}
        {paragraphs.map((para, idx) => (
          <p
            key={idx}
            className="text-base md:text-lg text-black font-normal mt-6">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SolutionArticale;
