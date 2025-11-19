import React from "react";
import Image from "next/image";
type SolutionDetailsProps = {
  imageSrc: string;
  title: string;
  paragraphs: string;
  onClick?: () => void;
};
const SolutionDetails: React.FC<SolutionDetailsProps> = ({
  imageSrc,
  title,
  paragraphs,
}) => {
  return (
    <div className="grid  px-4 grid-cols-1 md:grid-cols-12 mt-52 max-sm:mt-20 gap-10 items-start">
      {/* Image */}
      <div className="md:col-span-6 relative w-full h-[300px] md:h-[600px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Text Content */}
      <div className="md:col-span-6">
        <h1 className="text-3xl md:text-5xl leading-snug text-black font-bold mb-6">
          {title}
        </h1>
        {/* Highlighted text block */}
        <p className="text-base md:text-lg text-black font-normal mt-6">
          {paragraphs}
        </p>
        {/* <Button onClick={onClick} className="mt-6 text-[18px] font-bold">
          Read More
        </Button> */}
      </div>
    </div>
  );
};

export default SolutionDetails;
