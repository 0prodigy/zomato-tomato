import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Wrapper = styled.div`
  * {
    font-family: Okra, Helvetica, sans-serif;
  }
  .bg-color {
    background: rgb(252, 252, 252);
  }
  .landingFooter-heading {
    margin: 0px 0px 3rem;
    color: rgb(54, 54, 54);
    font-size: 2.4rem;
    line-height: 4rem;
    font-weight: 500;
  }
  .landingFooter-tag {
    margin: 0px 0px 1.6rem;
    color: rgb(54, 54, 54);
    font-size: 1.7rem;
    line-height: 3.2rem;
    font-weight: 500;
  }
  .cuisines-Link {
    text-decoration: none;
    color: rgb(130, 130, 130);
    font-size: 1rem;
    line-height: 1.8;
    margin-right: 1rem;
  }
  .cuisines-bullet {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: rgb(130, 130, 130);
    border-radius: 50%;
    margin-right: 0.6rem;
    margin-left: 0.6rem;
    margin-bottom: 0.22rem;
  }
  .restro-marginTop {
    margin-top: 25px;
  }
  .topRestroChain-Link {
    display: inline-block;
    text-align: left;
    text-decoration: none;
    color: rgb(130, 130, 130);
    margin-bottom: 1.2rem;
    width: 20%;
    font-size: 1.2rem;
    line-height: 1.8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
  }
  .main-footer {
    margin-top: 0px;
    width: 100%;
  }
  .logo-section {
    align-items: center;
    width: 100%;

    margin-bottom: 4rem;
  }
  .footer-div {
    max-width: 110rem;
    width: 110rem;
    padding: 2px;
    position: relative;
  }
  .footer-logo {
    margin-top: 50px;
    height: 28px;
  }

  .footer-div {
    position: relative;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    max-width: 19.3333%;
    padding: 0px;
  }
  .footer-heading: {
    font-size: 1.4rem;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0px 0px 1.2rem;
  }
  .footer-Link {
    text-decoration: none;
    color: rgb(130, 130, 130);
    font-size: 0.97rem;
    margin: 3.5px;
  }
  .social-link {
    margin-left: 0.6rem;
  }
  .icon-tag {
    text-decoration: none;
    margin-right: 0.8rem;
    color: white;
    height: 10px;
  }
  .social-icons {
    align-item: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
  }
  .icon {
    height: 15px;
    border-radius: 50%;
  }
  .app-store {
    height: 50px;
    width: 150px;
  }
  .policy {
    font-size: 0.85rem;
    color: rgb(130, 130, 130);
    line-height: 1.7rem;
    margin-top: 2.3rem;
  }
`;

function LandingFooter() {
  return (
    <>
      <Wrapper>
        <div className="bg-color">
          <div className="container">
            <div>
              <p className="landingFooter-heading">
                {" "}
                Explore other options for you here
              </p>
            </div>
            <div>
              <div>
                <p className="landingFooter-tag">Popular cuisines near me</p>
              </div>
              <div>
                <Link to={"/Bakery-food-near-me"} className="cuisines-Link">
                  Bakery food near me
                </Link>
                <span className="cuisines-bullet"></span>

                {[
                  " Beverages food near me",
                  "Biriyani food near me",
                  "Burger food near me",
                  "Burger food near me",
                  "Chinese food near me",
                  "Continenal food near me",
                  "Desserts food near me",
                  "Healthy food near me",
                  "Ice Cream food near me",
                  "Italian food near me",
                  "Mithai food near me",
                  "Momos food near me",
                  "Mughlai food near me",
                  "North Indian food near me",
                  "Pizza food near me",
                  "Rolls food near me",
                  "Rolls food near me",
                  "Sandwich food near me",
                  "South Indian food near me",
                ].map((item) => (
                  <Link to={`/${item}`} key={item} className="cuisines-Link">
                    {item}
                    <span className="cuisines-bullet"></span>
                  </Link>
                ))}

                <Link
                  to={`/Street-Food-food-near-me`}
                  className="cuisines-Link"
                >
                  Street Food food near me
                </Link>
              </div>
            </div>
            <div className="restro-marginTop">
              <div>
                <p className="landingFooter-tag">Popular restaurants near me</p>
              </div>
              <div>
                <Link to={`/Bakeries-near-me`} className="cuisines-Link">
                  Bakeries near me
                </Link>
                <span className="cuisines-bullet"></span>

                {[
                  "Bars near me",
                  "Beverages near me",
                  "Bhojanalya near me",
                  "Cafes near me",
                  "Casual Dining near me",
                  "Clubs near me",
                  "Cocktail Bars near me",
                  "Confectioneries near me",
                  "Desert Palors near me",
                  "Dhabas near me",
                  "Fine Dining near me",
                  "Food Courts near me",
                  "Food Trucks near me",
                  "Kiosks near me",
                  "Lounges near me",
                  "Meat Shops near me",
                  "Microbreweries near me",
                  "Paan Shop near me",
                  "Pubs near me",
                  "Quick Bites near me",
                ].map((item) => (
                  <Link to={`/${item}`} key={item} className="cuisines-Link">
                    {item}
                    <span className="cuisines-bullet"></span>
                  </Link>
                ))}

                <Link to={"/Sweet-Shop-near-me"} className="cuisines-Link">
                  Sweet Shop near me
                </Link>
              </div>
            </div>
            <div className="restro-marginTop">
              <div>
                <p className="landingFooter-tag">Top Restaurant Chains</p>
              </div>
              <div>
                {[
                  "Bikarervala",
                  "Briyani Blues",
                  "BTW",
                  "Burger King",
                  "Burger Singh",
                  "Dominos",
                  "Dunkin Donuts",
                  "Faasos",
                  " Haldiram",
                  "KFC",
                  "Krispy Kreme",
                  "McDonalds",
                  "Moti Mahal Delux",
                  "Om Sweet & Snacks",
                  "Paradise Biriyani",
                  "Pizza Hut",
                  "Sagar Ratna",
                  "Subway",
                  "WOW! Momo",
                ].map((item) => (
                  <Link
                    to={`/${item}`}
                    key={item}
                    className="topRestroChain-Link"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div>
                <p className="landingFooter-tag">Cities We Deliver To</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="main-footer bg-light">
          <section className="logo-section d-flex container  d-flex justify-content-between">
            <img
              className="footer-logo"
              src="https://b.zmtcdn.com//data/bdddded729eec1881d992117920afa5f1553759845.png"
              alt="logo"
            />
          </section>
          <div className="d-flex flex-wrap justify-content-between container ">
            <div className="footer-div">
              <h6 className="footer-heading">COMPANY</h6>
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
              <h6 className="footer-heading">FOR FOODIES</h6>
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
              <h6 className="footer-heading">FOR RESTAURENTS</h6>
              <nav className="footer-name">
                <Link to={"/Add Restaurents"}>
                  <p className="footer-Link">Add Restaurents</p>
                </Link>
                <Link to={"/Claim-Your-Listing"}>
                  <p className="footer-Link">Claim Your Listing</p>
                </Link>
                <Link to={"/Bussiness-App"}>
                  <p className="footer-Link">Bussiness App</p>
                </Link>
                <Link to={"/Restaurents-Widgets"}>
                  <p className="footer-Link">Restaurents Widgets</p>
                </Link>
                <Link to={"/Products-for-Bussiness"}>
                  <p className="footer-Link">Products for Bussiness</p>
                </Link>
              </nav>
            </div>
            <div className="footer-div">
              <h6 className="footer-heading">FOR YOU</h6>
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
              <h6 className="footer-heading">SOCIAL LINKS</h6>
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

export default LandingFooter;
