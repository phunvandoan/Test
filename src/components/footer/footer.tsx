import "./footer.css";
import Tabs from "../tabs/Tabs";

const bigData = [
  {
    title: "Planing & Design",
    data: [
      {
        key: "Budget planning",
        value:
          "Our team works with you to develop a budget that reflects your vision. From luxury venues to exquisite decor, we help allocate resources efficiently, ensuring your dream wedding is both beautiful and within reach.",
      },
      {
        key: "Bridal Salon Selection",
        value:
          "Choosing the right bridal salon is key to your wedding experience. We assist in finding a place where you can try on stunning gowns, ensuring the perfect fit and style for your special day.",
      },
      {
        key: "Wedding Cake",
        value:
          "Your wedding cake is more than just dessert; it's a centerpiece that reflects your theme. We collaborate with top pastry chefs to create a showstopper that's both visually stunning and absolutely delicious.",
      },
      {
        key: "Bridesmaid Dress Selection",
        value:
          "Bridesmaid dresses should not only complement the bride but also the overall aesthetic of your wedding. We guide you through fabric choices, colors, and styles to create the perfect dresses for your bridal party.",
      },
    ],
  },
  {
    title: "Floral & Decor",
    data: [
      {
        key: "Floral",
        value:
          "Flowers are the heart of wedding decor. We bring together a variety of blooms to design arrangements that match your style, whether it’s romantic roses, vibrant wildflowers, or elegant orchids.",
      },
      {
        key: "Decor Selection",
        value:
          "The right decor sets the mood of your celebration. We offer a wide range of decor options—from luxurious drapery to delicate table settings—to ensure your venue feels magical and cohesive.",
      },
      {
        key: "Hair & Makeup",
        value:
          "Your wedding day is the perfect occasion to shine. Our professional team of stylists ensures you look your best, offering hair and makeup services that bring out your natural beauty and match your wedding theme.",
      },
      {
        key: "Lighting & Sound",
        value:
          "Lighting and sound can transform any venue into an unforgettable space. We offer custom lighting setups and top-tier sound systems that elevate your wedding’s atmosphere, whether it's soft romantic lighting or an exciting dance floor vibe.",
      },
    ],
  },
  {
    title: "Paperie & Branding",
    data: [
      {
        key: "Invitations",
        value:
          "The invitation sets the tone for your entire wedding. We collaborate with talented designers to create invitations that perfectly reflect your wedding's theme and style, from elegant calligraphy to bold modern designs.",
      },
      {
        key: "Venue Selection & Management",
        value:
          "Finding the right venue is crucial for a successful wedding. We assist in choosing a location that suits your style, whether it’s a beachside ceremony, a grand ballroom, or a cozy garden, and ensure every detail is managed seamlessly.",
      },
      {
        key: "Stationery",
        value:
          "Your wedding stationery communicates your personal style and sets expectations for your guests. We offer a variety of options, from save-the-dates to thank-you cards, ensuring that all your paper goods match your wedding’s theme and color scheme.",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className="footer">
      <fieldset>
        <legend style={{ textAlign: "center" }}>
          Here some highlight in package:
        </legend>
        <div className="footer_content">
          {/* left */}
          <div className="footer_content-left">
            <img
              className="footer-image-left-first"
              src="/images/Rectangle67.png"
              alt=""
            />
            <br />
            <img
              className="footer-image-left-second"
              src="/images/Rectangle69.png"
              alt=""
            />
          </div>
          {/* center */}
          <div className="footer_content-center">
            {/* test */}
            {bigData.map((d, index) => (
              <Tabs title={d.title} data={d.data} key={index} />
            ))}
          </div>
          {/* right */}
          <div className="footer_content-right">
            <img
              className="footer-image-right-first"
              src="/images/Rectangle68.png"
              alt=""
            />
            <br />
            <img
              className="footer-image-right-second"
              src="/images/Rectangle70.png"
              alt=""
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}
