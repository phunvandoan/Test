import { useTranslation } from "react-i18next";
import "./Introduction.css";
const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* introduction */}
      <div className="introduction">
        {/* feature */}
        <div className="introduction-box ">
          <span className="introducion-text">SPECIAL FEATURE</span>
          <span className="introducion-text-sologan">Super</span>
          <span className="introducion-text-ex-sologan">Smart</span>
          <img
            className="introduction-image"
            src="/images/image 215.png"
            alt=""
          />
        </div>
        {/* menu */}
        <div className="introduction-navbar">
          {/* nav */}
          <div className="introduction-nav ">
            {/* sologan-nav */}
            <div className="sologan-nav">
              We want to share creative inspiration, expression
            </div>
            {/* nav */}
            <div className="introduction-nav-icons">
              <div className="introduction-nav-icons-item">
                <img
                  style={{ width: "23px", height: "36px" }}
                  src="/icons/icon1.svg"
                  alt=""
                />
                <span>{t("home.icon1")}</span>
              </div>
              <div className="introduction-nav-icons-item">
                <img
                  style={{ width: "23px", height: "36px" }}
                  src="/icons/icon2.svg"
                  alt=""
                />
                <span>{t("home.icon2")}</span>
              </div>
              <div className="introduction-nav-icons-item">
                <img
                  style={{ width: "23px", height: "36px" }}
                  src="/icons/icon3.svg"
                  alt=""
                />
                <span>{t("home.icon3")}</span>
              </div>
            </div>
          </div>
          {/* slice */}
          <div className="introduction-nav-slice">
            <img src="/images/image2.png" alt="" />
            <button>{t("home.show_all")}</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Introduction;
