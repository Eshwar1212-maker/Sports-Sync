import Link from "next/link";
import clsx from "clsx";
import { IconType } from "react-icons";
import { useTheme } from "next-themes";

interface MobileItemProps {
  href: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({ 
  href, 
  icon: Icon, 
  active,
  onClick
}) => {
  
  const {theme} = useTheme()
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return ( 
    <Link 
      onClick={handleClick} 
      href={href} 
      className={'group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black'}>
      <Icon className="h-6 w-6" />
    </Link>
   );
}
 
export default MobileItem;