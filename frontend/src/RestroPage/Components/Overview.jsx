import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowRightIcons from "@material-ui/icons/ArrowRight";

//main-div{position: sticky;
// top: 196px;
// z-index: 2;}
// sec-div{ position: relative;
//     overflow-y: auto;}

const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 200;
  }
  .main-div {
    align-self: flex-start;

    width: 100%;
    padding-right: 1rem;
    background-color: rgb(255, 255, 255);
    transform: translateZ(0px);
    transition: transform 0.2s ease-in-out 0s;
  }
  .sec-div {
    background-color: white;
  }
  .heading-section {
    width: 100%;
    max-width: 110rem;
    overflow: auto hidden;
    min-height: 6.2rem;
    position: relative;
  }
  .main-section {
    min-width: 100%;
    display: flex;
    position: relative;
    -webkit-box-pack: start;
    justify-content: flex-start;
    background-color: transparent;
    overflow-x: auto;
  }
  .main-section:first-child {
    margin-left: 0px;
    padding-left: 0px;
  }
  .main-section:last-child {
    margin-right: 0px;
    padding-right: 0px;
  }
  .single-div {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    max-height: 100%;
    margin-right: 2rem;
    cursor: pointer;
  }
  .text-span {
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 300;
    margin: 0.3rem 1rem;
    border: 1px solid transparent;
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
    white-space: nowrap;
    color: rgb(237, 90, 107);
  }
  .text-active {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;

    color: rgb(237, 90, 107);
  }
  .text {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: Poppins;
    font-weight: 200;
    color: rgb(138, 131, 131);
  }
  .offer-div {
    background: rgb(248, 248, 248);
    border-radius: 0.8rem;
    margin-bottom: 2rem;
    padding: 10px;
  }
  .offer {
    background: rgb(237, 90, 107);
    border-radius: 0.6rem;
    width: max-content;
    padding: 0.1rem 0.5rem;
    font-size: 1rem;
    color: rgb(255, 255, 255);
    margin-bottom: 5px;
  }
  .offer-text {
    margin: 1rem;
    color: rgb(237, 90, 107);
    text-decoration: none;
  }
  .about {
    line-height: 1.2;
    color: rgb(28, 28, 28);
    margin: 0px;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .action-div {
    margin-top: 1.8rem;
    padding-left: 3px;
  }
  .action-sec {
    display: flex;
    width: max-content;
  }
  .action-box1 {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.06) 1px 0px 4px;
    border-radius: 8px;
    padding: 0.1rem 0.1rem;
    cursor: pointer;
    border: 1px solid rgb(232, 232, 232);
    margin-right: 2rem;
  }
  .box1-img {
    border-radius: 50%;
    margin-right: 0.6rem;
    height: 50px;
    width: 50;
  }
  .box1-text-sec {
  }
  .box1-text1 {
    font-size: 0.6rem;
    line-height: 1.5;
    margin: 0px;
    color: rgb(156, 156, 156);
  }
  .box1-text2 {
    font-size: 0.8rem;
    line-height: 1.5;
    margin: 0.2rem 0px 0px;
    color: rgb(28, 28, 28);
  }
  .font-weight {
    font-weight: 500;
  }
  .cuisines {
    box-sizing: inherit;
    margin-right: 5px;
    border: 1px solid rgb(207, 207, 207);
    box-shadow: rgba(54, 54, 54, 0.06) 0px 1px 2px;
    border-radius: 59px;
    padding: 0.2rem;
    display: inline-flex;
    margin: 0px 1rem 1rem 0px;
    cursor: pointer;
    color: rgb(17, 145, 153);
    font-size: 1.2rem;
    line-height: 1.2;
    text-decoration: unset;
  }
`;

function Overview() {
  return (
    <>
      <Wrapper>
        <article className="main-div container">
          <div className="sec-div">
            <section className="heading-section">
              <section className="main-section">
                <div className="single-div">
                  <span className="text-span">
                    <Link className="text-active">Overview</Link>
                  </span>
                </div>
                <div className="single-div">
                  <span className="text-span">
                    <Link className="text">Order Online</Link>
                  </span>
                </div>
                <div className="single-div">
                  <span className="text-span">
                    <Link className="text">Reviews</Link>
                  </span>
                </div>
                <div className="single-div">
                  <span className="text-span">
                    <Link className="text">Menu</Link>
                  </span>
                </div>
                <div className="single-div">
                  <span className="text-span">
                    <Link className="text">Photos</Link>
                  </span>
                </div>
              </section>
              <hr />
            </section>
          </div>
        </article>
        <div className="offer-div container">
          <span className="offer">GET 25% OFF</span>
          <p className="offer-desc">
            Become a Zomato Pro member and enjoy 25% Off every time at Haldi -
            Desi Rasoi Urban Tadka. Know more.
          </p>
          <Link className="offer-text">
            Know more <ArrowRightIcons />
          </Link>
        </div>
        <div className="container">
          <h3 className="about">About This Place</h3>
        </div>
        <section className="action-div container">
          <section className="action-sec">
            <section className="action-box1">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png"
                alt="safety"
                className="box1-img"
              />
              <section className="box1-text-sec">
                <p className="box1-text1">RESTAURANT SAFETY MEASURE</p>
                <p className="box1-text2">Well Sanitized Kitchen</p>
              </section>
            </section>
            <section className="action-box1">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/fa7443fb81df3ff2c54186672599c3db1585754076.png"
                alt="safety"
                className="box1-img"
              />
              <section className="box1-text-sec">
                <p className="box1-text1">RESTAURANT SAFETY MEASURE</p>
                <p className="box1-text2">RIDER HAND WASH</p>
              </section>
            </section>
          </section>
        </section>
        <div className="container p-3 mt-3">
          <h4 className="font-weight">Menu</h4>
          <div>
            <div className="card" style={{ width: "14rem" }}>
              <img
                src="https://b.zmtcdn.com/data/menus/760/18593760/6552e77ddb88d1eb816070151b205489.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                className="card-img-top"
                alt="menu"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <h4 className="font-weight">Food Menu</h4>
          <span
            style={{
              color: "rgb(156, 156, 156)",
              marginTop: "0px",
              fontSize: "15px",
            }}
          >
            2 pages
          </span>
        </div>
        <div className="container">
          <h4 className="font-weight">Cuisines</h4>
          <br />
          <div className="d-flex">
            <div className="cuisines">
              <p>North Indian</p>
            </div>
            <div className="cuisines">
              <p>Rolls</p>
            </div>
            <div className="cuisines">
              <p>Mughlai</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Overview;
