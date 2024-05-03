import React from "react";
import Accounts from "./Accounts";
import Activities from "./Activities";

type Props = {};

const HighLight = (props: Props) => {
    return (
        <div className="p-4">
            <div className="">
                <p className="font-bold text-xl mb-2">Todays Highlights (14)</p>
                <p className="text-gray-700 text-base mt-[-5px]">3 May 2024</p>
            </div>
            <div className="mt-4">
                <Accounts />
                <Activities title={"Completed"} />
                <Activities title={"Scheduled"} />
            </div>
        </div>
    );
};

export default HighLight;
