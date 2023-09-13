import Image from "next/image";
import { FC } from "react";
import image from "../../../assets/Synced/workspacesidebar.png"

interface WorkSpaceFirstProps {}
const WorkSpaceFirst: FC<WorkSpaceFirstProps> = ({}) => {
  return (
    <div className="w-screen bg-blue-50 ">
      <div className="flex justify-between xl:max-w-[800px] 2xl:max-w-[1300px] mx-auto h-[400px] py-11 max-w-[300px]">
        <div className="my-auto max-w-[400px]">
            Every user will get notified when a new event is added. Coaches, trainers, can choose to be mods, 
            the rest can follow.
        </div>
        <div className="">
            <Image src={image} alt="Workspace mod" width={700} height={700}/>
            <p className="mx-auto text-center text-sm font-semibold">
              Customize your workspace/team.
            </p>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceFirst;
