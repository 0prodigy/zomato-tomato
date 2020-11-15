import React from "react";
import { Link } from "react-router-dom";
import MainFooter from "./MainFooter";
import { Wrapper } from "../Style/LandingFooterStyle";

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
        <MainFooter />
      </Wrapper>
    </>
  );
}

export default LandingFooter;
