import { useState } from "react";
import Tabs from "./components/Tabs";
import ColorCategory from "./components/ColorCategory";

function App() {
  const [selectedPeriod, setSelectedPeriod] = useState("1M");
  return (
    <div className="container">
      <h2>Expenses</h2>
      <Tabs
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />
      <ColorCategory />
    </div>
  );
}

export default App;
