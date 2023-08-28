import Image from "next/image";
import { FC } from "react";
import AuthForm from "../components/AuthForm";

interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <>
        <div 
    style={{ backgroundImage: 'url(/auth.jpg)', backgroundPosition: "center 28%" }}
    className="hidden sm:flex h-screen min-h-full flex-col py-[131px] sm:px-6 lg:px-8 bg-gradient-to-t bg-cover bg-no-repeat">
      {/*Auth Form*/}
      <AuthForm />
      <p className="text-gray-100 m-auto font-semibold max-w-[455px] pb-[110px] pl-5">Passion brings communities together, communities foster growth, growth gets us to the end result.</p>
    </div>
    <div 
    className="flex h-screen min-h-full flex-col py-[131px] sm:px-6 lg:px-8 bg-gradient-to-t bg-cover bg-no-repeat sm:hidden">
      {/*Auth Form*/}
      <AuthForm />
    </div>
    </>

  );
};

export default page;
