import { useState } from "react";
import Tabs from "./components/Tabs";

function App() {
  const [selectedPeriod, setSelectedPeriod] = useState("1M");
  return (
    <div className="container">
      <h1>Expenses</h1>
      <Tabs
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />
    </div>
  );
}

export default App;
