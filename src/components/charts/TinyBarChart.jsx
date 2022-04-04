import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { GetData } from "../customHook/CustomHook";

const Tinybarchart = () => {
  const data = GetData("data/charts.json");
  return (
    <LineChart
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
      <Line
        type="monotone"
        dataKey="investment"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
      <Line type="monotone" dataKey="revenue" stroke="#15023a" />
    </LineChart>
  );
};

export default Tinybarchart;
