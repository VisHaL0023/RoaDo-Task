import React from "react";
import ImportantIcon from "@/public/svg/importentIcon.svg";
import LocalShippingIcon from "@/public/svg/localShippingIcon.svg";
import TrailerIcon from "@/public/svg/trailerIcon.svg";
import UserIcon from "@/public/svg/userIcon.svg";

type Props = {};

const QuickAction = (props: Props) => {
    return (
        <div className="mt-5">
            <div className="text-black">
                <p className="font-bold text-xl mb-2">Quick Actions</p>
                <div className="flex items-center justify-around p-5 bg-white rounded-2xl">
                    <div className="flex flex-col gap-1 items-center justify-between text-gray-900">
                        <ImportantIcon />
                        <p>Create Indents</p>
                    </div>
                    <div className="border-l border-0 h-10 border-gray-300" />
                    <div className="flex flex-col gap-1 items-center justify-between text-gray-900">
                        <LocalShippingIcon />
                        <p>Add Vehicle</p>
                    </div>
                    <div className="border-l border-0 h-10 border-gray-300" />
                    <div className="flex flex-col gap-1 items-center justify-between text-gray-900">
                        <TrailerIcon />
                        <p>Add Tralier</p>
                    </div>
                    <div className="border-l border-0 h-10 border-gray-300" />
                    <div className="flex flex-col gap-1 items-center justify-between text-gray-900">
                        <UserIcon />
                        <p>Add Driver</p>
                    </div>
                    <div className="border-l border-0 h-10 border-gray-300" />
                    <div className="flex flex-col gap-1 items-center justify-between text-gray-900">
                        <LocalShippingIcon />
                        <p>Add Indents</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickAction;
