import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemImage from "./Components/ItemImage";
import ItemName from "./Components/ItemName";
import OrderOnline from "./Components/OrderOnline";
import Overview from "./Components/Overview";
import RestroNavbar from "./Components/RestroNavbar";
import Review from "./Components/Review";
import Menu from "./Components/Menu";
import Photos from "./Components/Photos";
import { useLocation } from "react-router-dom";
import { getRestaurant } from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 300;
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
    button {
      border: none;
      background-color: inherit;
    }
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
`;

function RestroPage() {
  const [overviewPage, setOverviewPage] = useState(true);
  const [orderOnlinePage, setOrderOnlinePage] = useState(false);
  const [reviewPage, setReviewPage] = useState(false);
  const [menuPage, setMenuPage] = useState(false);
  const [photosPage, setPhotosPage] = useState(false);
  const { restaurant: data } = useSelector((state) => state.restaurantReducer);
  const location = useLocation();
  const dispatch = useDispatch();

  const changeActivePage = (e) => {
    switch (e.target.name) {
      case "order":
        setOrderOnlinePage(true);
        setOverviewPage(false);
        setReviewPage(false);
        setMenuPage(false);
        setPhotosPage(false);
        break;
      case "reviews":
        setOrderOnlinePage(false);
        setOverviewPage(false);
        setReviewPage(true);
        setMenuPage(false);
        setPhotosPage(false);
        break;
      case "menu":
        setOrderOnlinePage(false);
        setOverviewPage(false);
        setReviewPage(false);
        setMenuPage(true);
        setPhotosPage(false);
        break;
      case "photos":
        setOrderOnlinePage(false);
        setOverviewPage(false);
        setReviewPage(false);
        setMenuPage(false);
        setPhotosPage(true);
        break;
      default:
        setOrderOnlinePage(false);
        setOverviewPage(true);
        setReviewPage(false);
        setMenuPage(false);
        setPhotosPage(false);
    }
  };

  useEffect(() => {
    dispatch(getRestaurant(location.state.res_id));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div>
      {data && (
        <>
          <RestroNavbar />
          <ItemImage data={data} />
          <div style={{ position: "sticky", top: "0px", zIndex: "9" }}>
            <ItemName data={data} />
          </div>

          <Wrapper style={{ position: "sticky", top: "180px", zIndex: "10" }}>
            <article className="main-div container">
              <div className="sec-div">
                <section className="heading-section">
                  <section className="main-section">
                    <div className="single-div">
                      <span className="text-span">
                        <button
                          className={overviewPage ? "text-active" : "text"}
                          onClick={changeActivePage}
                          name="overview"
                        >
                          Overview
                        </button>
                      </span>
                    </div>
                    <div className="single-div">
                      <span className="text-span">
                        <button
                          className={orderOnlinePage ? "text-active" : "text"}
                          onClick={changeActivePage}
                          name="order"
                        >
                          Order Online
                        </button>
                      </span>
                    </div>
                    <div className="single-div">
                      <span className="text-span">
                        <button
                          className={reviewPage ? "text-active" : "text"}
                          onClick={changeActivePage}
                          name="reviews"
                        >
                          Reviews
                        </button>
                      </span>
                    </div>
                    <div className="single-div">
                      <span className="text-span">
                        <button
                          className={menuPage ? "text-active" : "text"}
                          onClick={changeActivePage}
                          name="menu"
                        >
                          Menu
                        </button>
                      </span>
                    </div>
                    <div className="single-div">
                      <span className="text-span">
                        <button
                          className={photosPage ? "text-active" : "text"}
                          onClick={changeActivePage}
                          name="photos"
                        >
                          Photos
                        </button>
                      </span>
                    </div>
                  </section>
                  <hr />
                </section>
              </div>
            </article>
          </Wrapper>
          {overviewPage ? (
            <Overview data={data} />
          ) : orderOnlinePage ? (
            <OrderOnline data={data} />
          ) : reviewPage ? (
            <Review />
          ) : menuPage ? (
            <Menu />
          ) : (
            <Photos />
          )}
        </>
      )}
    </div>
  );
}

export default RestroPage;
