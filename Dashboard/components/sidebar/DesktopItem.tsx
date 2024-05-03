import Image from "next/image";
import Link from "next/link";

interface DesktopItemProps {
    label: string;
    icon: any;
    href: string;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
    label,
    href,
    icon: Icon,
}) => {
    return (
        <li key={label}>
            {/* Checking conditionally for dashboard logo */}
            {label === "DashboardLogo" ? (
                <Link
                    href={href}
                    className="
                        group 
                        flex 
                        gap-x-3 
                        rounded-md 
                        p-4 
                        text-sm  
                        font-semibold 
                        text-gray-500 
                        hover:text-black 
                        hover:bg-gray-100
                      "
                >
                    <Icon className="h-8 w-8 shrink-0" aria-hidden="true" />
                    <span className="sr-only">{label}</span>
                </Link>
            ) : (
                <Link
                    href={href}
                    className="
                      group 
                      flex 
                      gap-x-3 
                      rounded-md 
                      p-2 
                      text-sm 
                      leading-6 
                      font-semibold 
                      text-gray-500 
                      hover:text-black 
                      hover:bg-gray-100
                    "
                >
                    <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    <span className="sr-only">{label}</span>
                </Link>
            )}
        </li>
    );
};

export default DesktopItem;
