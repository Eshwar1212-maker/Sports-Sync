"use client";

import Button from "@/app/components/Button";
import { FC, useState } from "react";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward, IoMdAdd } from "react-icons/io";
import { LiaCalendarDaySolid } from "react-icons/lia";
import AddWorkoutModal from "./AddWorkoutModal";
interface HeaderProps {}
const Header: FC<HeaderProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* DESKTOP MENU */}
      <div className="hidden md:block">
      <div className="flex justify-between py-10 w-[500px] lg:w-[700px] max-w-[900px] mx-auto px-20 md:px-0">
        <AddWorkoutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <div>
          <button>
            <LiaCalendarDaySolid size={50} />
          </button>
        </div>
        <div className='text-md md:text-md lg:text-lg' onClick={() => setIsOpen(true)}>
         <Button>
            Add Workout
         </Button>
      </div>

      </div>
      <div className='flex justify-between mx-auto space-x-20 max-w-[500px] pl-20 sm:pl-0'>
        <button className=''>
        <IoIosArrowBack size={25}/>
        </button>
      <h1 className='text-xl md:text-2xl font-bold'>
        Today
      </h1> 
      <button className=''>
        <IoIosArrowForward size={25}/>
      </button>
      </div>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
      <div className="flex justify-between py-1 w-[100%] mx-auto px-7 md:px-0 md:hidden bg-gray-900">
      <AddWorkoutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div>
          <button>
            <LiaCalendarDaySolid color="white" size={30} />
          </button>
        </div>
        <div>
        <div className="text-md md:text-lg" onClick={() => setIsOpen(true)}>
          <button onClick={() => setIsOpen(true)}>
            <IoMdAdd color="white" size={31}/>
          </button>
        </div>
        </div>
        </div>
        <div className='flex justify-between mx-auto space-x-20 sm:pl-0 bg-black text-white w-[100%] p-2'>
        <button className=''>
        <IoIosArrowBack color="lightblue" size={22}/>
        </button>
      <h1 className='text-[19px] md:text-2xl font-bold'>
        Today
      </h1> 
      <button className=''>
        <IoIosArrowForward color="lightblue" size={22}/>
      </button>
      </div>
      <div className="border-s border-blue-300 border-2" />
      </div>
    </>
  );
};

export default Header;
