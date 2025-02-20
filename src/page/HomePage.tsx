// import { changeLanguage } from "i18next";
import Contruction from "../components/contruction/Contruction";
import Footer from "../components/footer/footer";
import Introduction from "../components/introduction/Introduction";
import Test from "../components/test/test";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      {/* <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={() => changeLanguage("vi_VN")}
          style={{
            background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
            border: "none",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "4px",
            textAlign: "center",
            marginRight: "10px",
          }}
        >
          vi_VN
        </button>
        <button
          onClick={() => changeLanguage("en_US")}
          style={{
            background: "linear-gradient(90deg, #56ccf2, #6e7dff)",
            border: "none",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          en_US
        </button>
      </div> */}

      <Introduction />
      <Contruction />
      <Footer />
    </>
  );
};

export default HomePage;
