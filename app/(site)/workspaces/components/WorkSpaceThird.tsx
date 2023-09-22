import Image from "next/image";
import { FC } from "react";
import image from "../../../assets/Synced/workspacesidebar.png";
import Footer from "../../components/landing/Footer";

interface WorkSpaceFirstProps {}
const WorkSpaceThird: FC<WorkSpaceFirstProps> = ({}) => {
  return (
    <div id="first" className=" bg-blue-50 h-[72vh] lg:h-[760px] lg:py-11">
      <div className="flex flex-col lg:flex-row lg:justify-between sm:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto h-[400px] lg:py-11">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="mx-auto my-auto max-w-[350px] sm:max-w-[500px] pt-[70px] pb-10 lg:py-[120px] text-2xl lg:text-4xl"
        >
          We'll prefetch at your convenice. Type in a event, and we will
          prefetch the last events notes with that name, and give you an option
          to copy it.
        </div>
        <div
          className="my-auto max-w-[89%] sm:max-w-[80%] lg:max-w-full mx-auto"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <video
            className=" bg-slate-300"
            width="630" // increased from 850 to 950
            height="700" // increased from 800 to 900
            aria-label="Workout log video"
            autoPlay
            muted
            loop
          >
            <source src="/prefetch.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mx-auto text-center text-sm font-semibold">
            Unlock more features like this with Synced.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceThird;
