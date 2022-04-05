import { GetData } from "../customHook/CustomHook";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const Stackedareachart = () => {
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
      <AreaChart
        width={400}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="investment"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="sell"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </div>
  );
};

export default Stackedareachart;
