import React from "react";
import { Link } from "react-router-dom";
import MainFooter from "../../LandingPage/Components/MainFooter";
import { Wrapper } from "../Style/PhotosStyle";

function Photos() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <h4 style={{ fontWeight: "400" }}>OM Sweets & Snacks</h4>
        </div>
        <div className="blog-div container mb-3">
          <section className="blog-sec">
            <button className="rev-btn">
              <span className="add-rev">
                <span className="rev-text">All(10)</span>
              </span>
            </button>
            <div className="btn">
              <span className="add">
                <span style={{ color: "rgb(28, 28, 28)" }}>Food</span>
              </span>
            </div>
            <div className="btn">
              <span className="add">
                <span style={{ color: "rgb(28, 28, 28)" }}>Ambience</span>
              </span>
            </div>
          </section>
        </div>

        <div className="container ">
          <div className="d-flex">
            <img
              alt="menu-item"
              src="https://b.zmtcdn.com/data/reviews_photos/8ad/84f1d0a2eba0752fb82b414362e778ad_1599049410.jpg"
              loading="lazy"
              className="img-item"
            />
            <img
              alt="menu-item"
              src="https://b.zmtcdn.com/data/pictures/chains/6/5056/22e5007246552ed8ea05a0a65175ef8a.jpg?output-format=webp"
              loading="lazy"
              class="img-item"
            />
            <img
              alt="menu-item"
              src="https://b.zmtcdn.com/data/pictures/chains/6/5056/83a852c58baf6657e89a0aab5324fec9.jpg"
              loading="lazy"
              className="img-item"
            />
            <img
              alt="menu-item"
              src="https://b.zmtcdn.com/data/reviews_photos/fa8/e6a66fb82d05f92f7c7b3383df8e3fa8_1594572032.jpg"
              loading="lazy"
              className="img-item"
            />
            <img
              alt="menu-item"
              src="https://b.zmtcdn.com/data/reviews_photos/0d6/76092d9a40f469fe6da05e33ea8db0d6_1578139832.jpg"
              loading="lazy"
              className="img-item"
            />
          </div>
          <div className="d-flex mr-2">
            <img
              alt="menu-item"
              src="https://b.zmtcdn.com/data/reviews_photos/8ad/84f1d0a2eba0752fb82b414362e778ad_1599049410.jpg"
              loading="lazy"
              className="img-item"
            />
            <img
              alt="menu-item"
              src="https://b.zmtcdn.com/data/pictures/chains/6/5056/22e5007246552ed8ea05a0a65175ef8a.jpg?output-format=webp"
              loading="lazy"
              class="img-item"
            />
            <img
              alt="menu-item"
              src="https://b.zmtcdn.com/data/pictures/chains/6/5056/83a852c58baf6657e89a0aab5324fec9.jpg"
              loading="lazy"
              className="img-item"
            />
            <img
              alt="menu-item"
              src="https://b.zmtcdn.com/data/reviews_photos/fa8/e6a66fb82d05f92f7c7b3383df8e3fa8_1594572032.jpg"
              loading="lazy"
              className="img-item"
            />
            <img
              alt="menu-item"
              src="https://b.zmtcdn.com/data/reviews_photos/0d6/76092d9a40f469fe6da05e33ea8db0d6_1578139832.jpg"
              loading="lazy"
              className="img-item"
            />
          </div>
        </div>

        <div className="container">
          <hr />
        </div>
        <div className="container">
          <div className="loc-near">
            <h6 className="loc-near-heading">RESTAURANTS AROUND JAIL ROAD</h6>
            <div className="loc-near-names">
              <Link className="loc-near-link">Tilak Nagar Restaurants, </Link>
              <Link className="loc-near-link">Janakpuri Restaurants, </Link>
              <Link className="loc-near-link">Shubhas Nagar Restaurants, </Link>
              <Link className="loc-near-link">
                Mayapuri Phase Two Restaurants
              </Link>
            </div>
          </div>
        </div>

        <MainFooter />
      </Wrapper>
    </>
  );
}

export default Photos;
