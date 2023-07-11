import clsx from 'clsx';
import Link from "next/link";

interface DesktopItemProps {
    label: string;
    icon: any;
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
        <li onClick={handleClick} key={label}>
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
                <span className={label === "Notification" && notificationNumber ? "text-[10px] mt-1 mx-auto my-[-23px] text-red-900" :
                 "text-[11px] mx-auto"}>
                    {label === "Notification" && notificationNumber}
                </span>
                <Icon size={40} className={label === "Notification" ? "h-6 w-6 shrink-0" 
                : "h-6 w-6 shrink-0"} aria-hidden="true" />
                <span className="sr-only"></span>
            </Link>
        </li>
    );
}

export default DesktopItem;