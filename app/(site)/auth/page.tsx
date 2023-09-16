import Image from "next/image";
import { FC } from "react";
import AuthForm from "../components/AuthForm";
import Navbar from "../components/navbar/Navbar";

interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <>
        <div 
    style={{ backgroundImage: 'url(/auth.jpg)', backgroundPosition: "center 21%" }}
    className="hidden sm:flex h-screen min-h-full flex-col py-[140px] sm:px-6 lg:px-8 bg-gradient-to-t bg-cover bg-no-repeat bg-white">
      {/*Auth Form*/}
      <AuthForm />
    </div>
    <div 
    className="flex h-screen min-h-full flex-col py-[131px] sm:px-6 lg:px-8 bg-gradient-to-t bg-cover bg-no-repeat sm:hidden bg-black">
      {/*Auth Form*/}
      <AuthForm />
    </div>
    </>

  );
};

export default page;
