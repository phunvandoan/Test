import { useTranslation } from "react-i18next";
import "./test.css";

const Test = () => {
  const { t } = useTranslation();
  return (
    <div className="test">
      {/* feature */}
      <div className="test-box ">
        <span className="test-text">SPECIAL FEATURE</span>
        <span className="test-text-sologan">Super</span>
        <span className="test-text-ex-sologan">Smart</span>
        <img className="test-image" src="/images/image 215.png" alt="" />
      </div>

      <div className="test-nav ">
        {/* sologan-nav */}
        <div className="sologan-nav">
          We want to share creative inspiration, expression
        </div>
        {/* nav */}
        <div className="test-nav-icons">
          <div className="test-nav-icons-item">
            <img
              style={{ width: "23px", height: "36px" }}
              src="/icons/icon1.svg"
              alt=""
            />
            <span>{t("home.icon1")}</span>
          </div>
          <div className="test-nav-icons-item">
            <img
              style={{ width: "20px", height: "36px" }}
              src="/icons/icon2.svg"
              alt=""
            />
            <span>{t("home.icon2")}</span>
          </div>
          <div className="test-nav-icons-item">
            <img
              style={{ width: "43px", height: "28px" }}
              src="/icons/icon3.svg"
              alt=""
            />
            <span>{t("home.icon3")}</span>
          </div>
        </div>
      </div>
      {/* slice */}
      <div className="test-nav-slice">
        <img src="/images/image2.png" alt="" />
        <button>{t("home.show_all")}</button>
      </div>
    </div>
  );
};

export default Test;
