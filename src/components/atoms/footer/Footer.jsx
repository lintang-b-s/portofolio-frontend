import React from "react";
import "./Footer.scss";
import Icon from "../icon/Icon";
import { socialMediaData } from "../../../utils/tempData";

const Footer = () => {
  function socialMediaButtons() {
    return socialMediaData.map((social) => (
      <a
        href={social.link}
        rel="noreferrer noopener"
        key={social.icon}
        target="_blank"
      >
        <Icon className={social.icon} color="#ffffff" />
      </a>
    ));
  }
  return (
    <footer className="dkFooter bg-dark">
      <section id="socialMediaSection" className="container-fluid py-3">
        <div className="row align-items-center">
          <div className="col-12 col-sm-6 text-light text-sm-start text-center">
            <h5>Get connected with me on social media:</h5>
          </div>
          <div className="col-12 col-sm-6">
            <div className="socialMediaWrapper text-white">
              {socialMediaButtons()}
            </div>
          </div>
        </div>
      </section>
      <section id="linkSections" className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12">
              <h6 className="text-uppercase fw-bold">Landon McKell</h6>
              <hr className="hrStyles mb-3 mt-0 d-inline-block mx-auto" />
              <p>
                Thanks for visiting my portfolio. This is the second iteration
                of this portfolio and I'm constantly trying to improve. If you
                see an bug or an error please reach out to me. Thank you!
              </p>
            </div>
            <div className="col-md-2 col-12">
              <h6 className="text-uppercase fw-bold">Other Links</h6>
              <hr className="hrStyles mb-3 mt-0 d-inline-block mx-auto" />
              <p className="text-muted">Blog (Coming Soon)</p>
              <p className="text-muted">Youtube (Coming Soon)</p>
            </div>
            <div className="col-md-3 col-12">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="hrStyles mb-3 mt-0 d-inline-block mx-auto" />
              <div className="iconText">
                <Icon className="fa-solid fa-flag-usa" />
                <p>Spanish Fork, UT, 84660, USA</p>
              </div>
              <div className="iconText">
                <Icon className="fa-solid fa-envelope" />
                <p>landon.roney7923@gmail.com</p>
              </div>
              <div className="iconText">
                <Icon className="fa-solid fa-phone" />
                <p>801-310-5876</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="bottomBannerSection" className="text-center text-light py-2">
        <p>
          2020 Copyright: <span className="fw-bold">landonmckell.com</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
