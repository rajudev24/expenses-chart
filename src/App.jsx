import { useState } from "react";
import Tabs from "./components/Tabs";
import ColorCategory from "./components/ColorCategory";
import DoughnutChart from "./components/DoughnutChart";
import { chartData, colors } from "./utils";

function App() {
  const [selectedPeriod, setSelectedPeriod] = useState("1M");
  return (
    <div className="expenses-section ">
      <div>
        <h1 className="title">Expenses Chart</h1>
        <div className="container">
          <h2>Expenses</h2>
          <Tabs
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
          />
          <div className="chart">
            <DoughnutChart
              data={chartData}
              selectedPeriod={selectedPeriod}
              size={250}
              colors={colors}
            />
          </div>
          <ColorCategory />
        </div>
      </div>
    </div>
  );
}

export default App;
