import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  imageSrc: string;
  onClick?: () => void;
};

const CardArticale: React.FC<CardProps> = ({ title, onClick, imageSrc }) => {
  return (
    <div onClick={onClick} className="max-w-96 mx-auto cursor-pointer rounded-2xl shadow-md bg-white overflow-hidden group transition">
      {/* Full-width responsive image */}
      <div className="relative w-full h-60">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Title and button section */}
      <div className="flex items-center justify-between p-5 py-6">
        <div className="flex flex-col">
          <h4 className="text-black group-hover:text-primary-secondary text-[22px] font-bold transition-colors duration-200">
            {title}
          </h4>
          <button
            onClick={onClick}
            className="w-14 h-14 bg-white text-[#071A42] rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-5.197-3.03A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardArticale;
