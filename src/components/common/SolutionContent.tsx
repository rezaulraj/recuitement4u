import React from "react";

type SolutionContentProps = {
  title: string;
  paragraphs: string;
};
const SolutionContent: React.FC<SolutionContentProps> = ({
  title,
  paragraphs,
}) => {
  return (
    <div className="flex mt-20 flex-col items-center justify-center text-center gap-4 max-w-72 border-r-2 border-gray-200 pr-6">
      <h3 className="text-2xl text-black font-bold">{title}</h3>
      <p className="text-[18px] font-normal text-black">{paragraphs}</p>
    </div>
  );
};

export default SolutionContent;
