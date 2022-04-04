import Barchart from "../charts/BarChart";
import Stackedareachart from "../charts/StackedAreaChart";
import Tinybarchart from "../charts/TinyBarChart";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash-board">
      <Stackedareachart />
      <Tinybarchart />
      <Barchart />
    </div>
  );
};

export default Dashboard;
