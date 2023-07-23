import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {FaAffiliatetheme} from 'react-icons/fa'
import { BsFillSunFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";

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
          <MdOutlineLightMode size={15}/>
        </button>
      )}
    </div>
  );
};

export default ThemeButton;
