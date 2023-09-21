import one from "../../../assets/qq.jpg";
import two from "../../../assets/das.png";
import Image from "next/image";
import { FC } from "react";
import Footer from "./Footer";
import { useRouter } from "next/navigation";

interface SecondProps {}

const Second: FC<SecondProps> = ({}) => {
  const router = useRouter();
  return (
    <div className=" mx-auto items-center bg-white sm:mb-[-37px] pb-11 xl:pr-40">
      <div className="py-20 items-center text-center flex flex-col justify-center mx-auto max-w-[80%] pr-8 md:pr-10 lg:pr-0 md:pl-10  lg:max-w-[900px] xl:pl-20">
        <h3 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl">
          It all starts with tracking
        </h3>
        <p className="text-sm md:text-xl py-4 text-gray-500">
          Visit your dashboard regularly to see how consistent and intense you
          have been working out over the course of months, in order for you to
          judge your progress.
        </p>
        <div className="">
          <Image
            alt="calender tracker image"
            src={two}
            width={900}
            height={900}
            priority={true}
          />
        </div>

        <div className="flex gap-2">
          <button
            aria-label="Get Started, create your account"
            onClick={() => router.push("/auth")}
            className="hover:bg-blue-200 transition ease-in-out duration-200 text-md lg:text-xl p-4 text-black rounded-sm border-[1px] border-black hover:text-whte"
          >
            Learn More
          </button>
          <button
          onClick={() => router.push("/tracking")}
          className="bg-blue-800 hover:bg-blue-600 transition ease-in-out duration-200 text-md lg:text-xl p-4 px-7 lg:px-7 text-white rounded-sm">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second;
