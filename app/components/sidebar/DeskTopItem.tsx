import clsx from 'clsx';
import { IconType } from "react-icons";

import Link from "next/link";

interface DesktopItemProps {
    label: string;
    icon: IconType;
    href: string;
    onClick?: () => void;
    active?: boolean;
    notificationNumber?: number,
    labelType?: string
}

const DesktopItem: React.FC<DesktopItemProps> = ({
    label,
    href,
    icon: Icon,
    notificationNumber,
    active,
    onClick
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    };

    return (
        <li id='fucking' onClick={handleClick} key={label}>
            <Link
                href={href}
                className={clsx(`
            group 
            flex 
            flex-col
            gap-x-3 
            rounded-md 
            p-3 
            leading-6 
            font-semibold 
            text-gray-500 
            relative
            hover:text-black 
            hover:bg-gray-100
          `,
                    active && 'bg-gray-100 text-black'
                )}
            >
              
                <Icon size={70} className={label === "Notification" ? "h-6 w-6 shrink-0" 
                : "h-6 w-6 shrink-0"} aria-hidden="true" />
                <span className="sr-only"></span>
            </Link>
        </li>
    );
}

export default DesktopItem;