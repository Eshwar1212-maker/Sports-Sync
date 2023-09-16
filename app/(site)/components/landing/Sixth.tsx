"use client"

import { FC, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Bonheur_Royale, PT_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";



interface SixthProps {}
const inter = PT_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: "400",
});
const bon = Bonheur_Royale({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: "400",
});
const Sixth: FC<SixthProps> = ({}) => {
  const router = useRouter()
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/workouts");
    }
  }, [session?.status, router]);
  const handleGoogleSignIn = async () => {
    const result = await signIn("google", { redirect: false });
    if (result?.error) {
        toast.error("Error logging in with Google.");
    } else {
        router.push("/workouts");
    }
};

  return (
    <div
      className="relative bg-cover bg-center bg-white h-[800px]"
      style={{ backgroundImage: "url(/back.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full max-w-[60%] max-h-[60%] py-60 lg:py-0 mx-auto">
        <div className="space-y-8">
          <div>
            <p
              style={inter.style}
              className="text-white mx-auto text-center text-3xl"
            >
              Join Synced for free
            </p>
          </div>
          <div>
            <button 
            onClick={handleGoogleSignIn}
            className="px-8 py-3 bg-white text-black rounded-full font-bold flex gap-4">
              <FcGoogle
                className="my-auto"
                size={20}
                aria-label="Google login button"
              />
              <p className="text-[12px] md:text-lg font-light">
                Sign up with google
              </p>
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <p className="text-2xl text-white">Your goals are waiting</p>
          <p onClick={() => {
            router.push("/auth")}
          }
           className="text-lg text-white opacity-70 underline cursor-pointer">
            Start your journey today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
