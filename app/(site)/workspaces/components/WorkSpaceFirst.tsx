import Image from "next/image";
import { FC } from "react";
import image from "../../../assets/Synced/workspacesidebar.png"

interface WorkSpaceFirstProps {}
const WorkSpaceFirst: FC<WorkSpaceFirstProps> = ({}) => {
  return (
    <div id="third" className=" bg-blue-50 h-[72vh] lg:h-[760px] lg:py-11">
      <div className="flex flex-col lg:flex-row lg:justify-between sm:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto h-[400px] lg:py-11">
        <div className="mx-auto my-auto max-w-[350px] sm:max-w-[500px] pt-[70px] pb-10 lg:py-[120px] text-2xl lg:text-4xl">
            Fully customizable workspaces for individuals and teams. <br />
            Every user will get notified when a new event is added. Coaches, trainers, can choose to be mods, 
            the rest can follow.
        </div>
        <div className="max-w-[350px] sm:max-w-full mx-auto">
            <Image src={image} alt="Workspace mod" width={550} height={500}/>
            <p className="hidden lg:block mx-auto text-center text-sm font-semibold">
              Customize your workspace/team.
            </p>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceFirst;
