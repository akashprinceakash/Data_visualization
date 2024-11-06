import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "./component/BarChart";
import PieChart from "./component/PieChart";
import LineChart from "./component/LineChart";

function App() {
    const [chartData, setChartData] = useState({ labels: [], values: [] });

    useEffect(() => {
        axios.get("http://localhost:5000/data")
            .then(response => {
                const labels = response.data.map(item => item.label);
                const values = response.data.map(item => item.value);
                setChartData({ labels, values });
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="App">
            <h1>Chart Dashboard</h1>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center" , height:'40vh'}}>
                <BarChart chartData={chartData} />
                <PieChart chartData={chartData} />
                <LineChart chartData={chartData} />
            </div>
        </div>
    );
}

export default App;
