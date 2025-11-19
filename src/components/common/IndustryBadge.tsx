import React from "react";

interface IndustryBadgeProps {
  label: string;
  icon: React.ReactNode;
}

export const IndustryBadge: React.FC<IndustryBadgeProps> = ({
  label,
  icon,
}) => {
  return (
    <div className="flex text-[40px] items-center space-x-2 bg-gray-100 px-10 py-2 rounded-full shadow-sm hover:shadow-md transition">
      <div className="bg-blue-200 p-2 rounded-full text-blue-600">{icon}</div>
      <span className="whitespace-nowrap font-medium">{label}</span>
    </div>
  );
};
