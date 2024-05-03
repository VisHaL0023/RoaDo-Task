import * as React from "react";
import Chart from "./Chart";
import { titles } from "@/constant/chartData";

export default function Card() {
    return (
        <div className="flex flex-initial w-full flex-wrap gap-2 items-center justify-between">
            {titles.map((title, ind) => (
                <div
                    key={ind}
                    className="p-4 w-[15rem] h-[20rem] flex flex-col gap-2 bg-white rounded-3xl text-black
                            shadow-sm"
                >
                    <div>
                        <p className="text-black font-medium text-base">
                            {title.label}
                        </p>
                        <Chart />
                        <div className="flex flex-col gap-2 mt-2">
                            <div
                                className="flex items-center justify-between px-2 py-[0.1rem]
                                        bg-gradient-to-r from-transparent rounded-md   
                                        to-[rgb(255_205_86)]"
                            >
                                <p>Upcoming</p>
                                <p>30</p>
                            </div>
                            <div
                                className="flex items-center justify-between px-2 py-[0.1rem]
                                        bg-gradient-to-r from-transparent rounded-md   
                                        to-[rgb(116_100_255)]"
                            >
                                <p>Ongoing</p>
                                <p>20</p>
                            </div>
                            <div
                                className="flex items-center justify-between px-2 py-[0.1rem]
                                        bg-gradient-to-r from-transparent rounded-md   
                                        to-[rgb(79_210_181)]"
                            >
                                <p>Completed</p>
                                <p>50</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
