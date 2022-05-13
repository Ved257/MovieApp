import React from "react";
import FeatherIcons from "feather-icons-react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p style={{fontSize:"25px"}}>Contact us: 8971754974</p>
        <div className="footer-content-right">
          <FeatherIcons icon="github" size="24" style={{ padding: "5px" }} />
          <FeatherIcons icon="twitter" size="24" style={{ padding: "5px" }} />
          <FeatherIcons icon="instagram" size="24" style={{ padding: "5px" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
