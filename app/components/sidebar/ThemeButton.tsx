import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {FaAffiliatetheme, FaRegMoon} from 'react-icons/fa'
import { BsFillSunFill, BsMoonStars } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { HiOutlineMoon } from "react-icons/hi";
import { LiaAffiliatetheme, LiaMoon } from "react-icons/lia";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme()


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme


  return (
    <div className="mb-3 flex mx-auto ">
      {currentTheme === "light" ? (
        <button
          className=""
          onClick={() => {
            setTheme("dark");
          }}
        >
          <FaAffiliatetheme size={15}/>
        </button>
      ) : (
        <button
          className=""
          onClick={() => {
            setTheme("light");
          }}
        >
          <LiaAffiliatetheme size={16}/>
        </button>
      )}
    </div>
  );
};

export default ThemeButton;
