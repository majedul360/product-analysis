import "./Dashboard.css";
import { GetData } from "../customHook/CustomHook";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Dashboard = () => {
  const data = GetData("data/charts.json");
  return <div></div>;
};

export default Dashboard;
