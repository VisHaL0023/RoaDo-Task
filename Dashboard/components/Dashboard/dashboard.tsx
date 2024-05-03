import React from "react";
import NavBar from "./navBar";
import Card from "../Card";
import QuickAction from "./QuickAction";
import Alerts from "./Alerts";

type Props = {};

const Dashboard = (props: Props) => {
    return (
        <div className="bg-blue-50 flex flex-col gap-2 w-full h-full">
            {/* Dashboard navbar */}
            <NavBar />

            {/* card component for chart */}
            <Card />

            {/* Quick action component */}
            <QuickAction />

            {/* Alerts component */}
            <Alerts />
        </div>
    );
};

export default Dashboard;
