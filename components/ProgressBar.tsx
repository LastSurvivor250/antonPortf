import Image from "next/image";
import { StringFieldProps } from "sanity";

const ProgressBar = ({
  title,
  percentage,
  iconPath,
}: {
  title: string;
  percentage: number;
  iconPath: string;
}) => {
  return (
    <div className="mb-10">
      <div
        className=" transform transition-all duration-300 ease-in-out;
  transform: translateY(-0.5rem) flex items-center mb-2 gap-1"
      >
        <div className="font-medium text-[#b63792]">{title}</div>
        <Image
          src={iconPath}
          height={60}
          width={60}
          alt={`{name} icon `}
          className="w-7 h-7"
        />
      </div>

      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-sm font-semibold inline-block  text-gray-200">
              {`${percentage}%`}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full bg-gray-300 rounded-full">
            <div
              className="h-2 rounded-full bg-purple-500"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
