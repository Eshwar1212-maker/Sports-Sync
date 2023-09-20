import one from "../../../assets/qq.jpg";
import two from "../../../assets/das.png";
import Image from "next/image";
import { FC } from "react";
import Footer from "./Footer";
import { useRouter } from "next/navigation";

interface SecondProps {}

const Second: FC<SecondProps> = ({}) => {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center mx-auto items-center lg:flex-row bg-white sm:mb-[-37px] pb-11 xl:pr-40">
            <div className="flex flex-col lg:py-10 w-full md:w-1/2 lg:w-2/5 xl:w-1/2 items-center px-2">
        <div className="max-w-[450px]">
          <Image
            width={750}
            height={300} 
            src={one}
            alt="tracker image"
            priority={true}

          />
        </div>
      </div>
      <div className="w-[80%] lg:w-[600px] py-20 items-center text-center">
        <h3 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl">
          It all starts with tracking
        </h3>
        <p className="text-sm md:text-xl py-4 text-gray-500">
         Visit your dashboard regularly to see how consistent and intense 
         you have been working out over the course of months, in order 
         for you to judge your progress. 
        </p>
        <div className="bg-black hidden lg:block">
            <Image
              alt="calender tracker image"
              src={two}
              width={700}
              height={400}
              priority={true}
              />
            </div>
            <button
              aria-label="Get Started, create your account"
              onClick={() => router.push("/auth")}
              className="bg-blue-700 hover:bg-blue-600 transition ease-in-out duration-200 text-sm md:text-md lg:text-xl p-3 md:p-5 text-white rounded-sm"
            >
              Start dominating

            </button>
      </div>
    </div>


  );
};

export default Second;
