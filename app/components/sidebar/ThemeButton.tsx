import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {FaAffiliatetheme} from 'react-icons/fa'
import {PiSunDimLight} from 'react-icons/pi'
import { BsCloudSun, BsFillCircleFill, BsFillSunFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";


interface ThemButton {
  isSettings: boolean
}


const ThemeButton = ({isSettings}: ThemButton) => {
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
          type="button"
          className=""
          onClick={() => {
            setTheme("dark");
          }}
        >
          <FaAffiliatetheme size={isSettings ? 16 : 10}/>
        </button>
      ) : (
        <button
          type="button"
          className=""
          onClick={() => {
            setTheme("light");
          }}
        >
          { isSettings ?       
           <MdLightMode color="white" size={isSettings ? 16 : 10}/>   
          :
          <FaAffiliatetheme color="white" size={isSettings ? 18 : 10}/>
        }
        </button>
      )}
    </div>
  );
};

export default ThemeButton;
