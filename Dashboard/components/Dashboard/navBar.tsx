import React from "react";
import NotificationIcon from "@/public/svg/notificationIcon.svg";
import SearchIcon from "@/public/svg/searchIcon.svg";
import ThreeDot from "@/public/svg/threeDot.svg";

type Props = {};

const NavBar = (props: Props) => {
    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <p className="text-2xl text-black font-sans">Dashboard</p>
                <div className="bg-white rounded-full p-2 shadow-sm">
                    <div className="flex items-center justify-around">
                        <span className="px-2 border-r cursor-pointer">
                            <SearchIcon />
                        </span>
                        <span className="px-2 border-r cursor-pointer">
                            <NotificationIcon />
                        </span>
                        <span className="cursor-pointer px-3 ml-1">
                            <ThreeDot />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
