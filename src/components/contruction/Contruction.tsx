import { useState } from "react";
import "./Contruction.css";

const data = [
  {
    key: "Cushion",
    value:
      "The Thayer's seat cushion features a core of high-resiliency foam wrapped with a layer of microfiber for a structured, supportive sit.",
  },
  {
    key: "Frame",
    value:
      "The Thayer's seat cushion features a core of high-resiliency foam wrapped with a layer of microfiber for a structured, supportive sit.",
  },
  {
    key: "Upholstery",
    value:
      "The Thayer's seat cushion features a core of high-resiliency foam wrapped with a layer of microfiber for a structured, supportive sit.",
  },
  {
    key: "Finish",
    value: "data of value",
  },
];

export default function Contruction() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Hàm toggle panel khi nhấn vào accordion
  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="contruction">
      {/* left */}
      <div className="contruction-left">
        <span className="contruction-sologan__small">Contruction</span> <br />
        <div className="contruction-sologan__lagre">
          The perfect accent chair for any room
        </div>
        {/* test */}
        <div className="contruction__accordion-container">
          {data.map((d, index) => (
            <div key={index}>
              <button
                className={`accordion ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{d.key}</span>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
              </button>
              <div
                className="panel"
                style={{
                  display: activeIndex === index ? "block" : "none",
                  fontSize: "16px",
                  fontFamily: "Inter",
                }}
              >
                <span style={{ opacity: "0.8" }}>{d.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* right */}
      <div className="contruction-right">
        {/* left */}
        <img src="/images/Rectangle3005.jpg" alt="" className="left_image" />
        <img src="/images/Rectangle3004.jpg" alt="" className="right_image" />
      </div>
    </div>
  );
}
