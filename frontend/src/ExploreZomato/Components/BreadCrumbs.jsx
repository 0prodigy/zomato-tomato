import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Wrapper } from "../Styles/BreadCrumbsStyle";

function BreadCrumb() {
  const searchCity = useSelector(
    (state) => state.landingPageReducer.searchCity
  );

  return (
    <>
      <Wrapper>
        <div className="container br-light">
          <div className="crumb-margin bg-light">
            <nav aria-label="breadcrumb bg-light">
              <ol className="breadcrumb bg-light">
                <li className="breadcrumb-item">
                  <Link to="/" className="item">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/india" className="item">
                    India
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link
                    to={{ pathname: `/${searchCity.toLowerCase()}` }}
                    className="item"
                  >
                    {searchCity.toLowerCase()}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/#" className="item">
                    Restaurants
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default BreadCrumb;
