"use client";

import useRoutes from "@/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./DesktopItem";

const DesktopSidebar = () => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="
                    hidden 
                    md:fixed 
                    md:inset-y-0 
                    md:left-0 
                    md:z-40 
                    md:w-16 
                    xl:px-6
                    md:overflow-y-auto 
                    md:bg-white 
                    md:border-r-[1px]
                    md:pb-4
                    md:flex
                    md:flex-col
                    justify-between"
            >
                <nav className="mt-4 flex flex-col justify-between">
                    <ul
                        role="list"
                        className="flex flex-col items-center space-y-1"
                    >
                        {routes.map((item) => (
                            <DesktopItem
                                key={item.label}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default DesktopSidebar;
