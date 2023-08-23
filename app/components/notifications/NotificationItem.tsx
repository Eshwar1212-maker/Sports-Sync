import clsx from "clsx";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FC } from "react";
import { AiOutlineTrophy } from "react-icons/ai";
interface NotificationItemProps {
  name: string;
  image: string;
  body: string;
  date?: string
}
const NotificationItem: FC<NotificationItemProps> = ({ name, image, body, date }) => {
  function getSubstringWithoutCuttingWords(str: string, length: number) {
    // Start with the initial substring
    let result = str.substring(0, length);

    // Check if the last character is a whitespace or if it's the end of the string
    while (length < str.length && str[length] !== " ") {
      result += str[length];
      length++;
    }

    return result;
  }

  const { theme } = useTheme();
  console.log(date?.split(" ")[1], "/", date?.split(" ")[2]);
  
  return (
    <div
      className={clsx(
        "flex flex-row justify-between gap-10 border-b-[1px] w-full border-slate-500 py-4",
        theme === "light" ? "text-black" : "text-white"
      )}
    >
      <div
        className={clsx(
          "relative inline-block overflow-hidden min-h-9 min-w-9 max-h-9 max-w-9 md:h-11 md:w-11 ml-3 m-auto",
          typeof image === "string" && "rounded-full"
        )}
      >
        {typeof image === "string" && (
          <Image fill src={image} alt="Notification" />
        )}
        <AiOutlineTrophy color="blue" className="m-auto" size={35}/>
        <span className="text-[9px]">{image}lbs</span>
      </div>
      <div className="flex m-auto max-w-[170px]">
        {typeof image === "string" ? (
          <p className="font-light text-[14px]">
            <span className="font-bold text-md">{name} messaged you:</span> "
            {getSubstringWithoutCuttingWords(body, 10)}
            {body.length > 10 && "..."}"
            <span className="cursor-pointer font-bold text-md text-[13px] border-b">
              {" "}
            </span>
          </p>
        )  : (
          <p className="text-[14px]">
            <span className="font-bold text-[14px]">{body}</span> on the {name} for {image}lbs!
          </p>
        )

      }

      </div>
      <div className="m-auto">
        {typeof image !== "string" && date?.split(" ")[1] + " " + date?.split(" ")[2]}
      </div>
    </div>
  );
};

export default NotificationItem;
