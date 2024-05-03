import React from "react";
import NavBar from "./navBar";
import Card from "../card";
import QuickAction from "./QuickAction";
import Alerts from "./Alerts";

type Props = {};

const Dashboard = (props: Props) => {
    return (
        <div className="bg-blue-50 flex flex-col gap-2 w-full h-full">
            <NavBar />
            <Card />
            <QuickAction />
            <Alerts />
        </div>
    );
};

export default Dashboard;
