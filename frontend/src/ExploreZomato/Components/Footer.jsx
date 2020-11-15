import React from "react";

import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Wrapper } from "../Styles/Footer";

function MainFooter() {
  return (
    <>
      <Wrapper>
        <footer className="main-footer">
          <section className="logo-section d-flex container bd-highlight mb-3">
            <img
              className="footer-logo mr-auto bd-highlight mb-3 rounded"
              src="https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg"
              alt="logo"
            />

            {["bottom"].map((placement) => (
              <OverlayTrigger
                trigger={["hover", "focus"]}
                key={placement}
                placement={placement}
                className="p-2 bd-highlight m-2"
                overlay={
                  <Popover
                    style={{
                      height: "300px",
                      width: "160px",
                      backgroundColor: "#333333",
                    }}
                  >
                    <Popover.Content>
                      <div style={{ fontSize: "18px", color: "#adb0b6" }}>
                        English
                        <br />
                        Turkce
                        <br />
                        हिंदी
                        <br />
                        Portugues
                        <br /> Espanol
                        <br /> Cestina
                        <br /> Slovencina
                        <br /> Polish
                        <br />
                        Italian
                        <br />
                        Vietnamese
                      </div>
                    </Popover.Content>
                  </Popover>
                }
              >
                <div
                  variant="secondary"
                  style={{
                    height: "40px",
                    width: "95px",
                    border: "1px solid rgb(108,108,108)",
                    borderRadius: "10px",
                    padding: "4px",
                    color: "#adb0b6",
                  }}
                >
                  <LanguageIcon style={{ margin: "1px" }} />
                  English
                </div>
              </OverlayTrigger>
            ))}
          </section>
          <div
            className="container mt-3"
            style={{ borderTop: "0.1px solid #3c3f46" }}
          ></div>
          <div className="d-flex flex-wrap justify-content-between container mt-3">
            <div className="footer-div">
              <h6
                className="footer-heading"
                style={{
                  fontWeight: "600",

                  color: "#adb0b6",
                }}
              >
                About Zomato
              </h6>
              <nav className="footer-name">
                <Link to={`/Who-We-Are`}>
                  <p className="footer-Link">About us</p>
                </Link>
                <Link to={"/Blog"}>
                  <p className="footer-Link">Culture</p>
                </Link>
                <Link to={"/Careers"}>
                  <p className="footer-Link">Blog</p>
                </Link>
                <Link to={"/Report-Fraud"}>
                  <p className="footer-Link">Careers</p>
                </Link>
                <Link to={"/Contact"}>
                  <p className="footer-Link">Report Fraud</p>
                </Link>
                <Link to={"/Contact"}>
                  <p className="footer-Link">Contact</p>
                </Link>
              </nav>
            </div>
            <div className="footer-div">
              <h6
                className="footer-heading"
                style={{
                  fontWeight: "600",

                  color: "#adb0b6",
                }}
              >
                FOR FOODIES
              </h6>
              <nav className="footer-name">
                <Link to={"/Code-of-Conduct"}>
                  <p className="footer-Link">Code of Conduct</p>
                </Link>
                <Link to={"/Community"}>
                  <p className="footer-Link">Community</p>
                </Link>
                <Link to={"/Community"}>
                  <p className="footer-Link">Verified Users</p>
                </Link>
                <Link to={"/Blogger-Help"}>
                  <p className="footer-Link">Blogger Help</p>
                </Link>
                <Link to={"/Developers"}>
                  <p className="footer-Link">Developers</p>
                </Link>
                <Link to={"/Mobile-Apps"}>
                  <p className="footer-Link">Mobile Apps</p>
                </Link>
              </nav>
            </div>
            <div className="footer-div">
              <h6
                className="footer-heading"
                style={{
                  fontWeight: "600",

                  color: "#adb0b6",
                }}
              >
                FOR RESTAURENTS
              </h6>
              <nav className="footer-name">
                <Link to={"/Add Restaurents"}>
                  <p className="footer-Link">Add a Restaurents</p>
                </Link>
                <Link to={"/Claim-Your-Listing"}>
                  <p className="footer-Link">Claim Your Listing</p>
                </Link>
                <Link to={"/Bussiness-App"}>
                  <p className="footer-Link">Bussiness App</p>
                </Link>
                <Link to={"/Restaurents-Widgets"}>
                  <p className="footer-Link">Bussiness Owner Guidliness</p>
                </Link>
                <Link to={"/Products-for-Bussiness"}>
                  <p className="footer-Link">Business Blog</p>
                </Link>
                <Link to={"/Products-for-Bussiness"}>
                  <p className="footer-Link">Restaurant Blog</p>
                </Link>
                <Link to={"/Products-for-Bussiness"}>
                  <p className="footer-Link">Products for Businesses</p>
                </Link>
              </nav>
            </div>
            <div className="footer-div mt-3">
              <nav className="footer-name">
                <Link to={"/Privacy"}>
                  <p className="footer-Link">Advertise</p>
                </Link>
                <Link to={"/Terms"}>
                  <p className="footer-Link">Order</p>
                </Link>
                <Link to={"/Security"}>
                  <p className="footer-Link">Book</p>
                </Link>
                <Link to={`/Sitemap`}>
                  <p className="footer-Link">Trace</p>
                </Link>
                <Link to={`/Sitemap`}>
                  <p className="footer-Link">Hyperpure</p>
                </Link>
              </nav>
            </div>
          </div>
          <div
            className="container mt-3"
            style={{ borderTop: "0.1px solid #3c3f46" }}
          ></div>

          <div className="d-flex flex-wrap justify-content-between container mt-3">
            <div className="footer-div">
              <h6
                className="footer-heading"
                style={{
                  fontWeight: "600",

                  color: "#adb0b6",
                }}
              >
                Countries
              </h6>
              <nav className="footer-name">
                <Link to={`/Who-We-Are`}>
                  <p className="footer-Link">Australia</p>
                </Link>
                <Link to={"/Blog"}>
                  <p className="footer-Link">Brazil</p>
                </Link>
                <Link to={"/Careers"}>
                  <p className="footer-Link">Canada</p>
                </Link>
                <Link to={"/Report-Fraud"}>
                  <p className="footer-Link">India</p>
                </Link>
                <Link to={"/Contact"}>
                  <p className="footer-Link">Italy</p>
                </Link>
                <Link to={"/Contact"}>
                  <p className="footer-Link">Lebanon</p>
                </Link>
              </nav>
            </div>

            <div className="footer-div mt-4">
              <nav className="footer-name">
                <Link to={"/Community"}>
                  <p className="footer-Link">Malaysia</p>
                </Link>
                <Link to={"/Community"}>
                  <p className="footer-Link">New Zealand</p>
                </Link>
                <Link to={"/Blogger-Help"}>
                  <p className="footer-Link">Philippines</p>
                </Link>
                <Link to={"/Developers"}>
                  <p className="footer-Link">Poland</p>
                </Link>
                <Link to={"/Mobile-Apps"}>
                  <p className="footer-Link">Portugal</p>
                </Link>
              </nav>
            </div>
            <div className="footer-div mt-4">
              <nav className="footer-name">
                <Link to={"/Bussiness-App"}>
                  <p className="footer-Link">Qata</p>
                </Link>
                <Link to={"/Restaurents-Widgets"}>
                  <p className="footer-Link">Singapore</p>
                </Link>
                <Link to={"/Products-for-Bussiness"}>
                  <p className="footer-Link">Slovakia</p>
                </Link>
                <Link to={"/Products-for-Bussiness"}>
                  <p className="footer-Link">South Africa</p>
                </Link>
                <Link to={"/Products-for-Bussiness"}>
                  <p className="footer-Link">Sri Lanka</p>
                </Link>
              </nav>
            </div>
            <div className="footer-div mt-4">
              <nav className="footer-name">
                <Link to={"/Terms"}>
                  <p className="footer-Link">Turkey</p>
                </Link>
                <Link to={"/Security"}>
                  <p className="footer-Link">UAE</p>
                </Link>
                <Link to={`/Sitemap`}>
                  <p className="footer-Link">United Kingdom</p>
                </Link>
                <Link to={`/Sitemap`}>
                  <p className="footer-Link">United States</p>
                </Link>
              </nav>
            </div>
          </div>
          <div
            className="container mt-3"
            style={{ borderTop: "0.1px solid  #3c3f46" }}
          ></div>
          <div className="d-flex bd-highlight mb-3 container">
            <div
              className="p-2 bd-highlight terms-link"
              style={{ color: "#adb0b6" }}
            >
              Privay
            </div>

            <div
              className="p-2 bd-highlight terms-link"
              style={{ color: "#adb0b6" }}
            >
              Terms
            </div>
            <div
              className="p-2 bd-highlight terms-link"
              style={{ color: "#adb0b6" }}
            >
              Api Policy
            </div>
            <div
              className="p-2 bd-highlight terms-link"
              style={{ color: "#adb0b6" }}
            >
              CSR
            </div>

            <div
              className="p-2 bd-highlight terms-link"
              style={{ color: "#adb0b6" }}
            >
              Security
            </div>
            <div
              className="p-2 bd-highlight terms-link"
              style={{ color: "#adb0b6" }}
            >
              Sitemap
            </div>
            <div className="ml-auto p-2 bd-highlight">
              <div className="d-flex">
                <Link to={"/facebook"} className="icon-tag">
                  <div className="social-icons">
                    <FacebookIcon className="icon" />
                  </div>
                </Link>
                <Link to={"/twitter"} className="icon-tag">
                  <div className="social-icons">
                    <TwitterIcon className="icon" />
                  </div>
                </Link>
                <Link to={"/instagram"} className="icon-tag">
                  <div className="social-icons">
                    <InstagramIcon className="icon" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="container mt-3"
            style={{ borderTop: "0.1px solid #3c3f46" }}
          ></div>
          <p className="policy container">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2020 © Zomato™ Pvt
            Ltd. All rights reserved.
          </p>
        </footer>
      </Wrapper>
    </>
  );
}

export default MainFooter;
