import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ chartData }) {
    const data = {
        labels: chartData.labels,
        datasets: [
            {
                label: "Dataset",
                data: chartData.values,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                ],
            },
        ],
    };

    return <Pie data={data} />;
}

export default PieChart;
