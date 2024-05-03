import { PieChart, useDrawingArea } from "@mui/x-charts";
import React from "react";
import { styled } from "@mui/material/styles";
import { data } from "@/constant/chartData";

type Props = {};

const size = {
    width: 280,
    height: 150,
};

const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

const Chart = (props: Props) => {
    return (
        <div className="flex justify-center items-center">
            <PieChart
                series={[{ data, innerRadius: 100 }]}
                {...size}
                slotProps={{
                    legend: { hidden: true },
                }}
                margin={{
                    left: 50,
                    right: 50,
                }}
                colors={[
                    "rgb(255, 205, 86)",
                    "rgb(116, 100, 255)",
                    "rgb(79,210,181)",
                ]}
            >
                <PieCenterLabel>Center label</PieCenterLabel>
            </PieChart>
        </div>
    );
};

export default Chart;
