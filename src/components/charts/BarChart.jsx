import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { GetData } from "../customHook/CustomHook";

const Barchart = () => {
  const data = GetData("data/charts.json");
  return (
    <div>
      <h3
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "2rem",
        }}
      >
        investment vs revenue
      </h3>
      <BarChart
        width={400}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="sell" fill="#82ca9d" />
        <Bar dataKey="revenue" fill="#15023a" />
      </BarChart>
    </div>
  );
};

export default Barchart;
