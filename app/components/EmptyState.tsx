import { Bonheur_Royale, PT_Sans } from "next/font/google";
import { FC } from "react";

interface EmptyStateProps {
  children?: React.ReactNode;
}
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
const EmptyState: FC<EmptyStateProps> = ({ children }) => {

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center flex-col bg-gray-100">
      <div style={inter.style} className="text-4xl text-gray-800 border-b-[1px] border-b-black">
        Sports Sync Web
      </div>
      <div>{children}</div>
    </div>
  );
};

export default EmptyState;
