import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../Styles/BreadCrumbsStyle";

function BreadCrumb() {
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
                  <Link to="/delhi-ncr" className="item">
                    Delhi Ncr
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/gurgaon" className="item">
                    Central delhi
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/sector-7" className="item">
                    Jai Singh Road Restaurents
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
