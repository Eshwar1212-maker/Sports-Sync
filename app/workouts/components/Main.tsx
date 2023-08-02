import { FC } from "react";
import { IconContext } from "react-icons";
import { IoAddOutline } from "react-icons/io5";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  return (
    <div className="flex py-[120px] flex-col items-center h-screen">
      <div className="h-1/2">
        <h1 className="">Today</h1>
      </div>
      <div className="h-1/2">
        <p className="text-gray-300">Workout Log Empty</p>
      </div>
      <div className="flex flex-col">
        <button className="mx-auto items-center flex text-blue-300">
          <div>
            <IoAddOutline className="" size={40} />
          </div>
        </button>
        <p className="text-[13px]">Start a new workout</p>
      </div>
    </div>
  );
};

export default Main;
