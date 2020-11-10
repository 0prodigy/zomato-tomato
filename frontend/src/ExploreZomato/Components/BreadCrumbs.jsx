import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 200;
  }
  .crumb-margin {
    margin-top: 80px;
    width: 100%;
    height: 28px;
    line-height: 23px;
    overflow: hidden;
  }
  .breadcrumb {
    background-color: white;
    margin-bottom: 0px;
  }
  .item {
    color: rgb(130, 130, 130);
    font-size: 14px;
  }
  .active {
    color: rgb(176, 172, 172);
  }
`;

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
                  <Link to="delhi-ncr" className="item">
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
