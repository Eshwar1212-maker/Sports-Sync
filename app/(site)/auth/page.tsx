import Image from "next/image";
import { FC } from "react";
import AuthForm from "../components/AuthForm";

interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <>
        <div 
    style={{ backgroundImage: 'url(/auth.jpg)', backgroundPosition: "center 21%" }}
    className="hidden sm:flex h-screen min-h-full flex-col py-[198px] sm:px-6 lg:px-8 bg-gradient-to-t bg-cover bg-no-repeat bg-white">
      {/*Auth Form*/}
      <AuthForm />
      <p className="text-gray-100 m-auto font-semibold max-w-[455px] pl-5 text-lg mb-40 hidden md:block">Passion brings communities together, communities foster growth, growth gets us to the end result.</p>
    </div>
    <div 
    className="flex h-screen min-h-full flex-col py-[131px] sm:px-6 lg:px-8 bg-gradient-to-t bg-cover bg-no-repeat sm:hidden bg-white">
      {/*Auth Form*/}
      <AuthForm />
    </div>
    </>

  );
};

export default page;
