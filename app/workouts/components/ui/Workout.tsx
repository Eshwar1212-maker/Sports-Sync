import { FC } from "react";
import { toast } from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import { BsTrophyFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface WorkoutProps {
  workouts: Array<any>; // Add this line
}
const Workout: FC<WorkoutProps> = ({ workouts }) => {
  return (
    <div className="text-center flex flex-col justify-between">
      <div className="flex justify-between max-w-[400px] mx-auto space-x-20">
        <button className="">
          <IoIosArrowBack size={25} />
        </button>
        <h1 className="text-3xl font-bold">Today</h1>
        <button className="">
          <IoIosArrowForward size={25} />
        </button>
      </div>

      <div className=" py-9">
        {workouts.map((workout) => (
          <div
            className=" max-w-[500px] mx-auto flex flex-col border-b-4 border-b-gray-300 p-2 border-2 border-slate-200"
            key={workout.exercise}
          >
            <p className="border-b-2 border-b-blue-300 font-bold justify-start flex p-2">
              {workout.exercise}
            </p>
            <div className="flex gap-5 justify-between px-10">
                <div className="py-3">
                  <BsTrophyFill color="lightblue" size={25} />
                </div>
              <div className="py-3">
                225lbs
              </div>
              <div>
                <p>
                  {workout.reps}
                  <span className="text-sm font-light"> reps</span>
                </p>
                <p>
                  {workout.sets}
                  <span className="text-sm font-light"> sets</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p
       onClick={() => toast.success("Added to todays calender!")}
       className="text-sm underline cursor-pointer">
        Lets add todays workout to your calender!?
      </p>
    </div>
  );
};

export default Workout;
 