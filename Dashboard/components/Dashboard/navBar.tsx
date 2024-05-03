import React from "react";
import NotificationIcon from "@/public/svg/notificationIcon.svg";
import SearchIcon from "@/public/svg/searchIcon.svg";
import ThreeDot from "@/public/svg/threeDot.svg";

type Props = {};

const NavBar = (props: Props) => {
    return (
        <div className="py-4 px-2">
            <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-black font-sans">
                    Dashboard
                </p>
                <div className="bg-white rounded-full px-2 py-3 shadow-sm">
                    <div className="flex items-center gap-2 justify-around">
                        <div className="px-2 cursor-pointer">
                            <SearchIcon />
                        </div>
                        <div className="border-r border-0 h-5 border-gray-300" />
                        <div className="px-2 cursor-pointer">
                            <NotificationIcon />
                        </div>
                        <div className="border-r border-0 h-5 border-gray-300" />
                        <div className="cursor-pointer px-3 ml-1">
                            <ThreeDot />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
