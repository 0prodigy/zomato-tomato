import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 200;
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
  .item-img1 {
    width: 575px;
    height: 400px;
    transition: all 0.5s;
  }
  .item-img1:hover {
    transform: scale(1.02);
  }
  .item-img2 {
    width: 190px;
    height: 198px;
    transition: all 0.5s;
  }
  .item-img2:hover {
    transform: scale(1.02);
  }
`;

function ItemImage(props) {
  const { data } = props;
  return (
    <>
      <Wrapper>
        <div className="container mt-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="item">
                  Home
                </Link>
              </li>
              {data.location && (
                <>
                  <li className="breadcrumb-item">
                    <Link
                      to={`/${data.location.city
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                      className="item"
                    >
                      {data.location.city}
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link
                      to={`/${data.location.locality
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                      className="item"
                    >
                      {data.location.locality}
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link
                      to={`/${data.location.address
                        .toLowerCase()
                        .split(",")[0]
                        .split(" ")
                        .join("-")}`}
                      className="item"
                    >
                      {data.location.address.split(",")[0]}
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link
                      to={`/${data.name.toLowerCase().split(" ").join("-")}`}
                      className="item"
                    >
                      {data && data.name}
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {data && data.name}
                  </li>
                </>
              )}
            </ol>
          </nav>
          <div className="row">
            <div className="col-6 m-1">
              <img src={data && data.thumb} alt="img1" className="item-img1" />
            </div>
            <div className="col-2 ml-1">
              <div className="row m-1">
                <img
                  src="https://b.zmtcdn.com/data/pictures/chains/6/5056/660e0712355067055479a8cecc84bcb2.jpg?fit=around|300:273&crop=300:273;*,*"
                  alt="item2"
                  className="item-img2"
                />
              </div>
              <div className="row m-1">
                <img
                  src="https://b.zmtcdn.com/data/pictures/chains/6/5056/83a852c58baf6657e89a0aab5324fec9.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                  alt="item3"
                  className="item-img2"
                />
              </div>
            </div>
            <div className="col-2 ml-1">
              <div className="row m-1">
                <img
                  src="https://b.zmtcdn.com/data/pictures/chains/6/5056/22e5007246552ed8ea05a0a65175ef8a.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                  alt="item4"
                  className="item-img2"
                />
              </div>
              <div className="row m-1">
                <img
                  src="https://b.zmtcdn.com/data/pictures/chains/6/5056/32a39b17171cb0bc74182aa15f0d3676.jpg?fit=around|300:273&crop=300:273;*,*"
                  alt="item5"
                  className="item-img2"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default ItemImage;
