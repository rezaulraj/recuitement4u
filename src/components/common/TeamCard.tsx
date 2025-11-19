import { FC } from "react";

interface TeamCardProps {
  name: string;
  // title: string;
  description?: string;
  btnText?: string;
  bgColor?: string;
  onClick?: () => void;
}

const TeamCard: FC<TeamCardProps> = ({
  name,
  onClick,
  btnText,
  description,
  bgColor = "bg-blue-500",
}) => {
  return (
    <div
      onClick={onClick}
      className={`lg:w-[220px] group duration-300 cursor-pointer lg:h-auto md:w-[220px] md:h-auto sm:w-full sm:min-h-[250px] w-full min-h-[250px] ${bgColor} text-white rounded-[30px] flex flex-col justify-between  p-5`}>
      <div>
        <h3 className="text-xl font-bold leading-tight">{name}</h3>
        {/* <p className="text-md mt-1">({title})</p> */}
      </div>

      {description && (
        <div className="text-sm mt-3">
          {description.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}

      <div className="mt-3 bg-primary-secondary duration-300 group-hover:bg-primary rounded-lg py-2 px-4 text-base font-semibold">
        <a
          onClick={onClick}
          className="inline-flex text-primary duration-300 group-hover:text-white cursor-pointer items-center gap-1 hover:underline">
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
