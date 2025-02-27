import React, { ReactNode, useEffect, useState } from "react";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";


type FooterContent = {
  footerLogo: string;
  footerInfo: string;
  footerInfoDes: string;
  footerBottomHeader: string;
  footerBottomUrl: string;
  footerBottomUrlDes: string;
  rightContent: string;
  policyUrl: string;
  policyContent: string;
  productInfoSectionWidth: string;
  productImageMargin: string;
};

const Footer: React.FC = () => {

  const [footerContent, setFooterContent] = useState<FooterContent>({
    footerLogo: "",
    footerInfo: "",
    footerInfoDes: "",
    footerBottomHeader: "",
    footerBottomUrl: "",
    footerBottomUrlDes: "",
    rightContent: "",
    policyUrl: "",
    policyContent: "",
    productInfoSectionWidth: "",
    productImageMargin: ""
  });

  useEffect(() => {
    fetch("/data/footer.json")
      .then(response => response.json())
      .then(data => setFooterContent(data))
      .catch(error => console.error("Error loading content:", error));
  }, []);

  return (
    <footer className="footer-top">
      <div className="footer-container-top">

        <div className="footer-brand">
          <div className="footer-logo">
            <img src={footerContent.footerLogo} alt="HelixVoice Logo" className="footer-logo-img" />
          </div>
        </div>


        <div className="footer-info" dangerouslySetInnerHTML={{ __html: footerContent.footerInfo }}>
        </div>

        <div className="footer-info" dangerouslySetInnerHTML={{ __html: footerContent.footerInfoDes }}>
        </div>
      </div>

      <div className="footer-container-middle">
        <div className="footer-bottom footer-middle">
          <h1>{footerContent.footerBottomHeader}</h1>
          <a href={footerContent.footerBottomUrl}>{footerContent.footerBottomUrlDes}</a>
        </div>

      </div>

      <div className="footer-bottom footer-social">
        <p className="right-style">{footerContent.rightContent}</p>
        <a className="privacy-p" href={footerContent.policyUrl}>{footerContent.policyContent}</a>
        <a className="social-w" href="#">Follow us on <span>&nbsp;   </span> <span className="social-icon"><FaXTwitter size={20} /></span></a>
      </div>
    </footer>
  );
};

export default Footer;
