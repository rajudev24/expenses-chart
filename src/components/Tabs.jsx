/* eslint-disable react/prop-types */

export default function Tabs({ selectedPeriod, setSelectedPeriod }) {
  const handleTabClick = (period) => {
    setSelectedPeriod(period);
  };
  return (
    <div className="tab-section">
      <div className="tabs">
        {["1M", "6M", "1Y", "ALL TIME"].map((period) => (
          <button
            key={period}
            onClick={() => handleTabClick(period)}
            className="tab-button"
            style={{
              backgroundColor: selectedPeriod === period ? "white" : "",
            }}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
}
