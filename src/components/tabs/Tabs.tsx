import "./Tabs.css";
import { useEffect, useState } from "react";

type data = {
  key: string;
  value: string;
};

type bigData = {
  title: string;
  data: data[];
};

function Tabs({ title, data }: bigData) {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (activeTab === "") {
      setActiveTab(data[0].key);
    }
  }, [activeTab, data]);

  const openCity = (cityName: string) => {
    setActiveTab(cityName);
  };

  return (
    <div>
      <span className="footer_content-center-title">{title}</span>
      <div className="footer_content-center-tab" style={{ marginTop: "12px" }}>
        {data.map((d, index) => (
          <button
            key={index}
            className={`tablinks ${activeTab === d.key ? "active" : ""}`}
            onClick={() => openCity(d.key)}
          >
            {d.key}
          </button>
        ))}
      </div>
      {data.map(
        (d, index) =>
          activeTab === d.key && (
            <div
              id={d.key}
              key={index}
              className="footer_content-center-tabcontent"
            >
              <p>{d.value}</p>
            </div>
          )
      )}
      <hr
        style={{
          width: "160px",
          margin: "56px auto",
          opacity: 0.1,
        }}
      />
    </div>
  );
}

export default Tabs;
