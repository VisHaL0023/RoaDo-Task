import * as React from "react";
import Chart from "./Chart";
import { titles } from "@/constant/chartData";

export default function Card() {
    return (
        <div className="flex w-full gap-2 items-center justify-between">
            {titles.map((title, ind) => (
                <div
                    key={ind}
                    className="p-4 w-16 h-20 flex flex-col gap-2 bg-white rounded-3xl text-black
                            shadow-sm text-xs"
                >
                    <div>
                        <p className="text-black">{title.label}</p>
                        <Chart />
                        <div className="flex flex-col gap-2 mt-2">
                            <div
                                className="flex items-center justify-between px-2 py-[0.1rem]
                                        bg-gradient-to-r from-transparent rounded-md   
                                        to-[rgb(255_205_86)]"
                            >
                                <p>Upcomming</p>
                                <p>50</p>
                            </div>
                            <div
                                className="flex items-center justify-between px-2 py-[0.1rem]
                                        bg-gradient-to-r from-transparent rounded-md   
                                        to-[rgb(116_100_255)]"
                            >
                                <p>Upcomming</p>
                                <p>50</p>
                            </div>
                            <div
                                className="flex items-center justify-between px-2 py-[0.1rem]
                                        bg-gradient-to-r from-transparent rounded-md   
                                        to-[rgb(79_210_181)]"
                            >
                                <p>Upcomming</p>
                                <p>50</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
