import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import LanguageIcon from "@material-ui/icons/Language";
import { Wrapper } from "../Style/MainFooterStyle";

function MainFooter() {
  return (
    <>
      <Wrapper>
        <footer className="main-footer bg-light">
          <section className="logo-section d-flex container bd-highlight mb-3">
            <img
              className="footer-logo mr-auto bd-highlight mb-3"
              src="/tomato_black_final_logo.png"
              alt="logo"
            />
            {["top"].map((placement) => (
              <OverlayTrigger
                trigger={["hover", "focus"]}
                key={placement}
                placement={placement}
                className="bd-highlight m-2"
                overlay={
                  <Popover style={{ height: "250px", width: "600px" }}>
                    <Popover.Content>
                      <div className="d-flex justify-content-between">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFzU8TKOS6eY_EeQCIdIxomj3JGsMuSWAcJw&usqp=CAU"
                          style={{
                            height: "20px",
                            width: "30px",

                            margin: "6px",
                          }}
                          alt="India"
                        />

                        <img
                          src="https://cdn.webshopapp.com/shops/94414/files/53448720/australia-flag-image-free-download.jpg"
                          style={{
                            height: "20px",
                            width: "30px",

                            margin: "5px",
                          }}
                          alt="Australia"
                        />

                        <img
                          src="https://img.favpng.com/21/9/20/brazil-flag-png-favpng-C5VcMRQAy9Gg1fdUY6L0RWhZj.jpg"
                          style={{
                            height: "20px",
                            width: "30px",

                            margin: "5px",
                          }}
                          alt="Brazil"
                        />
                      </div>

                      <div className="d-flex justify-content-between">
                        <img
                          src="https://www.clipartmax.com/png/middle/168-1683365_image-gallery-of-canadian-flag-png-canada-flag-and-symbols.png"
                          alt="Canada"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px",
                          }}
                        />

                        <img
                          src="https://freepngimg.com/thumb/chile/1-2-chile-flag-png-file.png"
                          style={{
                            height: "20px",
                            width: "30px",

                            margin: "5px",
                          }}
                          alt="Chille"
                        />

                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTntkwPlV4MD84xJJ4z7C9UaGYIvlPMowfSNA&usqp=CAU"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px",
                          }}
                          alt="Indonesia"
                        />
                      </div>

                      <div className="d-flex justify-content-between">
                        <img
                          src="https://w7.pngwing.com/pngs/98/218/png-transparent-flag-of-ireland-irish-free-state-great-famine-irish-miscellaneous-angle-flag.png"
                          alt="Ireland"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px",
                          }}
                        />

                        <img
                          src="https://cdn.countryflags.com/thumbs/italy/flag-400.png"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px",
                          }}
                          alt="Italy"
                        />

                        <img
                          src="https://cdn.webshopapp.com/shops/94414/files/54364360/lebanon-image-free-download.jpg"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px",
                          }}
                          alt="Lebanon"
                        />
                      </div>

                      <div className="d-flex justify-content-between">
                        <img
                          src="https://cdn.countryflags.com/thumbs/malaysia/flag-3d-250.png"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "6px",
                          }}
                          alt="Malaysia"
                        />

                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/320px-Flag_of_New_Zealand.svg.png"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px",
                          }}
                          alt="New Zealand"
                        />

                        <img
                          src="https://cdn.webshopapp.com/shops/94414/files/54939992/the-philippines-flag-image-free-download.jpg"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px",
                          }}
                          alt="Philippines"
                        />
                      </div>

                      <div className="d-flex justify-content-between">
                        <img
                          src="https://cdn.webshopapp.com/shops/94414/files/54940026/poland-flag-icon-free-download.jpg"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "6px",
                          }}
                          alt="Poland"
                        />
                        <img
                          src="data:image/png;base64,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"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px",
                          }}
                          alt="Portugal"
                        />
                        <img
                          src="https://cdn.iconscout.com/icon/free/png-512/qatar-flag-country-nation-union-empire-33060.png"
                          style={{
                            height: "20px",
                            width: "30px",

                            margin: "5px",
                          }}
                          alt="Qatar"
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        <img
                          src="https://cdn.webshopapp.com/shops/94414/files/54943038/singapore-flag-image-free-download.jpg"
                          alt="Singapore"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px",
                          }}
                        />

                        <img
                          src="https://cdn.webshopapp.com/shops/94414/files/54943274/slovakia-flag-icon-free-download.jpg"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px",
                          }}
                          alt="Slovakia"
                        />

                        <img
                          src="data:image/png;base64,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"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px",
                          }}
                          alt="South Africa"
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        <img
                          src="data:image/png;base64,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"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "6px",
                          }}
                          alt="Turkey"
                        />

                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAKlBMVEUAAAD/AAD///8Acy8AcSn8//78/PylAAAAdjD/paWlSx+jSRoAdCv9o6PiyikgAAABXElEQVR4nO3QSQHDMBAAMfdI05M/3YIY/1aCoHXZ6/28TbL0FfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfcnuvs/3Psnuvtcxyva+6yj6En2JvkRfoi/Rl+hL9CX6En2JvkRfoi/Rl+hL9CX6En2JvkRfoi/Rl+hL9CX6En2JvkRfoi/Rl+hL9CX6En2JvkRfoi/Rl+hL9CX6En2JvkRfoi/Rl+hL9CX6En3J7r7f8Zhkd9+5ZtGX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfqKP7tJNWHaZ7e0AAAAAElFTkSuQmCC"
                          style={{
                            height: "20px",
                            width: "30px",

                            margin: "5px",
                          }}
                          alt="UAE"
                        />

                        <img
                          src="data:image/png;base64,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"
                          alt="USA"
                          style={{
                            height: "20px",
                            width: "30px",
                            margin: "5px",
                          }}
                        />
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
                    margin: "18px",
                  }}
                >
                  <img
                    className="m-1"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFzU8TKOS6eY_EeQCIdIxomj3JGsMuSWAcJw&usqp=CAU"
                    alt="india"
                    style={{ height: "20px", width: "30px" }}
                  />
                  India
                </div>
              </OverlayTrigger>
            ))}
            {["top"].map((placement) => (
              <OverlayTrigger
                trigger={["hover", "focus"]}
                key={placement}
                placement={placement}
                className="p-2 bd-highlight m-2"
                overlay={
                  <Popover style={{ height: "300px", width: "160px" }}>
                    <Popover.Content>
                      <div style={{ fontSize: "18px" }}>
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
                  }}
                >
                  <LanguageIcon style={{ margin: "1px" }} />
                  English
                </div>
              </OverlayTrigger>
            ))}
          </section>
          <div></div>
          <div className="d-flex flex-wrap justify-content-between container mt-3">
            <div className="footer-div">
              <h6
                className="footer-heading"
                style={{
                  fontWeight: "400",
                  letterSpacing: "0.2rem",
                }}
              >
                COMPANY
              </h6>
              <nav className="footer-name">
                <Link to={`/Who-We-Are`}>
                  <p className="footer-Link">Who We Are</p>
                </Link>
                <Link to={"/Blog"}>
                  <p className="footer-Link">Blog</p>
                </Link>
                <Link to={"/Careers"}>
                  <p className="footer-Link">Careers</p>
                </Link>
                <Link to={"/Report-Fraud"}>
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
                style={{ fontWeight: "400", letterSpacing: "0.2rem" }}
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
                style={{ fontWeight: "400", letterSpacing: "0.2rem" }}
              >
                FOR RESTAURANTS
              </h6>
              <nav className="footer-name">
                <Link to={"/Add Restaurents"}>
                  <p className="footer-Link">Add Restaurant</p>
                </Link>
                <Link to={"/Claim-Your-Listing"}>
                  <p className="footer-Link">Claim Your Listing</p>
                </Link>
                <Link to={"/Bussiness-App"}>
                  <p className="footer-Link">Bussiness App</p>
                </Link>
                <Link to={"/Restaurents-Widgets"}>
                  <p className="footer-Link">Restaurant Widgets</p>
                </Link>
                <Link to={"/Products-for-Bussiness"}>
                  <p className="footer-Link">Products for Businesses</p>
                </Link>
              </nav>
            </div>
            <div className="footer-div">
              <h6
                className="footer-heading"
                style={{ fontWeight: "400", letterSpacing: "0.2rem" }}
              >
                FOR YOU
              </h6>
              <nav className="footer-name">
                <Link to={"/Privacy"}>
                  <p className="footer-Link">Privacy</p>
                </Link>
                <Link to={"/Terms"}>
                  <p className="footer-Link">Terms</p>
                </Link>
                <Link to={"/Security"}>
                  <p className="footer-Link">Security</p>
                </Link>
                <Link to={`/Sitemap`}>
                  <p className="footer-Link">Sitemap</p>
                </Link>
              </nav>
            </div>
            <div className="footer-div">
              <h6
                className="footer-heading"
                style={{ fontWeight: "400", letterSpacing: "0.2rem" }}
              >
                SOCIAL LINKS
              </h6>
              <div className="social-links d-flex justify-content-start">
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
              <br />

              <div>
                <img
                  src="https://www.kindpng.com/picc/m/114-1144091_download-google-play-png-apple-app-store-icon.png"
                  className="app-store"
                  alt="app-store"
                />
              </div>
              <div>
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  className="app-store"
                  alt="google-play"
                />
              </div>
            </div>
          </div>
          <hr className="container" />
          <p className="policy container" style={{ marginBottom: "0px" }}>
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
