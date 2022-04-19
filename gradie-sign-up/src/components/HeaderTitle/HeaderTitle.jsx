import "./styles.css"


import iphoneMockup from "../../assets/iphone-mockup.png";

export const HeaderTitle = () => {
  return (
    <>
      <div className="header-title">
        <div className="text-container">
          <h4>Gradie</h4>
          <p>Beautiful gradients in seconds </p>
        </div>
        <img src={iphoneMockup} alt="iPhone Mockup" className="sub-img" />
      </div>
    </>
  );
};
