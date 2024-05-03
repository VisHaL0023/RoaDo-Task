import React from "react";
import UserBGIcon from "@/public/svg/userBgIcon.svg";
import Button from "@mui/material/Button";
import ArrowIcon from "@/public/svg/arrowIcon.svg";
import TempIcon from "@/public/svg/tempIcon.svg";

type Props = {};

const Alerts = (props: Props) => {
    return (
        <div>
            <div className="text-black">
                <div className="flex items-center justify-between w-full px-2">
                    <p className="font-bold text-xl mb-3 mt-5">
                        High Priority alerts(14)
                    </p>
                    <div className="flex items-center gap-1 text-blue-600 cursor-pointer">
                        <p>View All</p>
                        <ArrowIcon />
                    </div>
                </div>
                <div className="flex gap-3 items-center justify-between">
                    <div className="bg-white shadow-sm rounded-xl w-[30rem] px-3 py-5">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <UserBGIcon />
                                <div>
                                    <p className="font-semibold">
                                        Driver Raised Concern
                                    </p>
                                    <p className="text-xs">
                                        Load No: 1234, Bill To: RoaDo demo
                                        Banglore
                                    </p>
                                </div>
                            </div>
                            <p className="text-base mt-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consectetur nihil aliquam amet
                                culpa numquam accusamus ratione, possimus odio{" "}
                            </p>
                        </div>
                        <div className="flex justify-end items-center mt-3 gap-4">
                            <Button variant="text" className="underline">
                                Ignore
                            </Button>
                            <Button
                                variant="contained"
                                className="bg-[#1A3875]"
                            >
                                Resolve
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white shadow-sm rounded-xl w-[30rem] px-3 py-5">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <TempIcon />
                                <div>
                                    <p className="font-semibold">
                                        Reefer Temp. out of range
                                    </p>
                                    <p className="text-xs">
                                        Load No: 1234, Bill To: RoaDo demo
                                        Banglore
                                    </p>
                                </div>
                            </div>
                            <p className="text-base mt-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consectetur nihil aliquam amet
                                culpa numquam accusamus ratione, possimus odio{" "}
                            </p>
                        </div>
                        <div className="flex justify-end items-center mt-3 gap-4">
                            <Button variant="text" className="underline">
                                Ignore
                            </Button>
                            <Button
                                variant="contained"
                                className="bg-[#1A3875]"
                            >
                                Resolve
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alerts;
