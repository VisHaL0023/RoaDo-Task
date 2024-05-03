import React from "react";
import ArrowIcon from "@/public/svg/arrowIcon.svg";

type Props = {
    title: string;
};

const Activities = (props: Props) => {
    return (
        <div className="mt-5">
            <div className="flex items-center justify-between w-full mb-5">
                <p className="text-lg font-bold">
                    {props.title} Activities (14)
                </p>
                <div className="flex items-center gap-1 text-blue-600 cursor-pointer">
                    <p>View All</p>
                    <ArrowIcon />
                </div>
            </div>
            <div className="border border-gray-300 rounded-lg">
                <p className="p-3">
                    <span className="text-blue-500 cursor-pointer">
                        Gurpreet Singh
                    </span>{" "}
                    (Dispatch team) has created Load No. I-I-AAA-1325
                </p>
                <div className="border-b w-full border-gray-300" />
                <p className="p-3">
                    <span className="text-blue-500 cursor-pointer">Aman</span>{" "}
                    (Driver) Picked Up goods at Location_Name for Load No.
                    I-I-AAA-1325
                </p>
                <div className="border-b w-full border-gray-300" />
                <p className="p-3">
                    <span className="text-blue-500 cursor-pointer">
                        Gurpreet Singh
                    </span>{" "}
                    (Dispatch team) has created Load No. I-I-AAA-1325
                </p>
                <div className="border-b w-full border-gray-300" />
                <p className="p-3">
                    Load No. I-I-AAA-1325 will start added by{" "}
                    <span className="text-blue-500 cursor-pointer">
                        Gurpreet Singh
                    </span>{" "}
                </p>
            </div>
        </div>
    );
};

export default Activities;
