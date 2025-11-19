type CardProps = {
  title: string;
  description: string;

  onClick?: () => void;
  bgColor?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  bgColor,
  description,
  onClick,
}) => {
  return (
    <div
      className={`text-white p-10 rounded-[2rem] w-full h-[380px] max-w-sm ${bgColor} shadow-lg`}>
      <div className="flex flex-col  justify-between h-full">
        <div>
          <h2 className="text-[28px] font-bold mb-2">{title}</h2>
          <p className="text-[18px] font-semibold text-white mt-6">
            {description}
          </p>
        </div>
        <div className="flex items-center  justify-between">
          <div className="flex -space-x-3"></div>
          <button
            onClick={onClick}
            className="w-14 h-14 bg-white text-[#071A42] rounded-full flex items-center justify-center shadow-lg">
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

export default Card;
