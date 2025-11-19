import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex hover:shadow-md p-5 flex-col items-start space-y-4">
      <div className="bg-gray-200 p-3 rounded-full text-black">{icon}</div>
      <h3 className="text-[22px] font-semibold text-black">{title}</h3>
      <p className="text-[18px] text-black">{description}</p>
    </div>
  );
};

export default FeatureCard;
