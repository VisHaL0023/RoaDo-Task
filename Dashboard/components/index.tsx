import React from "react";
import Dashboard from "@/components/Dashboard/dashboard";
import HighLight from "@/components/Highlight";
import SideBar from "@/components/sidebar/sideBar";

type Props = {};

const Main = (props: Props) => {
    return (
        <div className="text-black bg-blue-50 inset-y-0">
            <SideBar />
            <div className="flex flex-col gap-4 ml-20 md:flex-row md:gap-3">
                <div className="w-auto md:min-w-[70%]">
                    <Dashboard />
                </div>
                <div className="md:min-w-[28%] bg-white rounded-md">
                    <HighLight />
                </div>
            </div>
        </div>
    );
};

export default Main;
