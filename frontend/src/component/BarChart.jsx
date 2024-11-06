import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart({ chartData }) {
    const data = {
        labels: chartData.labels,
        datasets: [
            {
                label: "Dataset",
                data: chartData.values,
                backgroundColor: "rgba(75, 192, 192, 0.5)",
            },
        ],
    };

    return <Bar data={data} />;
}

export default BarChart;
