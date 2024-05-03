import React from "react";

type Props = {};

const Accounts = (props: Props) => {
    return (
        <div className="flex gap-1 items-center flex-wrap justify-between">
            <div className="border border-gray-300 rounded-md">
                <div className="w-[12rem] flex flex-col px-4 py-2 items-start">
                    <p className="text-gray-600">Income</p>
                    <p className="text-2xl font-semibold text-green-500">
                        100000 CAD
                    </p>
                    <p className="text-gray-600">2 payments received</p>
                </div>
            </div>
            <div className="border border-gray-300 rounded-md">
                <div className="w-[12rem] flex flex-col px-5 py-2 items-start">
                    <p className="text-gray-600">Expenses</p>
                    <p className="text-2xl font-semibold text-red-500">
                        50000 CAD
                    </p>
                    <p className="text-gray-600">5 payments paid</p>
                </div>
            </div>
        </div>
    );
};

export default Accounts;
