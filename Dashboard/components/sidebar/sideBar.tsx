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
                    fixed 
                    inset-y-0 
                    left-0 
                    z-40 
                    w-16 
                    px-6
                    bg-white
                    pb-4
                    flex
                    flex-col
                    justify-between
                    rounded-e-xl
                    shadow-md
                    overflow-x-hidden
                    overflow-y-hidden"
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
