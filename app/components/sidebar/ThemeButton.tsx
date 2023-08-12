import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {FaAffiliatetheme} from 'react-icons/fa'
import { BsFillSunFill } from "react-icons/bs";



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
    <div className="flex mx-auto ">
      {currentTheme === "light" ? (
        <button
          className=""
          onClick={() => {
            setTheme("dark");
          }}
        >
          <FaAffiliatetheme size={11}/>
        </button>
      ) : (
        <button
          className=""
          onClick={() => {
            setTheme("light");
          }}
        >
          <BsFillSunFill color="lightgray" size={13}/>
        </button>
      )}
    </div>
  );
};

export default ThemeButton;
