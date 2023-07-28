import clsx from "clsx";
import { IconType } from "react-icons";

import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: IconType;
  href: string;
  onClick?: () => void;
  active?: boolean;
  notificationNumber?: number;
  labelType?: string;
  route?: string;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  href,
  icon: Icon,
  notificationNumber,
  active,
  route,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link href={href}>
    <div
      className={clsx(`
          group 
          flex 
          flex-col
          items-center 
          gap-x-3 
          rounded-md 
          p-3 
          leading-6 
          font-semibold 
          text-gray-500 
          relative
      `)}
    >
      <div>
        <Icon size={70} className={label === "Notification" ? "h-6 w-6 shrink-0" 
          : "h-6 w-6 shrink-0"} aria-hidden="true" />
      </div>
  
      <span className="sr-only"></span>
  
      <div>
        <p className='text-[11px]'>{route}</p>
      </div>
    </div>
  </Link>
  
  );
};

export default DesktopItem;
