"use client"
import Image from "next/image";
import { FC } from "react";
import image from "../../../assets/Synced/groupchats.png"
import Footer from "../../components/landing/Footer";

interface WorkSpaceFirstProps {}
const WorkSpaceSecond: FC<WorkSpaceFirstProps> = ({}) => {
  return (
    <div className=" bg-white h-[100vh] lg:h-[760px] lg:py-11">
      <div className="flex flex-col lg:flex-row lg:justify-between sm:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto h-[400px] lg:py-11">
        <div className="mx-auto my-auto max-w-[350px] sm:max-w-[500px] pt-[70px] pb-20 lg:py-[120px] text-2xl lg:text-4xl font-thin">
            Have your calender sync up with a private group chat, stay in communication with events you have planned. <br /><br />You and your team are unstoppable.
        </div>
        <div className="max-w-[350px] sm:max-w-full mx-auto">
            <Image src={image} alt="Workspace mod" width={600} height={500}/>
            <p className="mx-auto text-center text-sm font-semibold">
              Customize your workspace/team.
            </p>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceSecond;
