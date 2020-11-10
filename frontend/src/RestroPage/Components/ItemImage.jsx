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
  .img-sec1 {
    position: relative;
  }
  .img-div1 {
    width: 100%;
    display: flex;
    height: 30rem;
  }
  .img-div2 {
    min-width: 64.4%;
    max-width: 100%;
    width: 62.4%;
    height: 100%;
    position: relative;
    cursor: pointer;
    margin: 0px;
    overflow: hidden;
  }
  
  .img-div4 {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
   
  }
  img-1 {
    width: 100%;
    height: 100%;
    filter: brightness(0.95);
    transition: transform 0.4s ease-in-out 0s, filter 0.4s ease 0s;
  }
  .img-sec2 {
    width: 100%;
    height: 100%;
    margin-left: 0.6rem;
    display: flex;
    flex-direction: column;
  }
  .img-div5 {
    min-width: 62.4%;
    max-width: 100%;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    margin: 0px 0px 0.3rem;
    overflow: hidden;
  }
  .img-div6 {
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .img-div7 {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    background: linear-gradient(
        to right,
        rgb(248, 248, 248) 0%,
        rgb(255, 255, 255) 10%,
        rgb(248, 248, 248) 40%,
        rgb(248, 248, 248) 100%
      )
      no-repeat rgb(248, 248, 248);
    opacity: 0;
    transition: opacity 0.25s ease-out 0s;
    will-change: opacity;
    border-radius: inherit;
    animation: 1.5s linear 0s infinite normal forwards running jCOzbu;
  }
  .img-2 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: none;
    opacity: 1;
    will-change: transform, opacity;
    border-radius: inherit;
    filter: brightness(0.95);
    transition: transform 0.4s ease-in-out 0s, filter 0.4s ease 0s;
  }
  .img-div8{
    min-width: 62.4%;
    max-width: 100%;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    margin: 0.3rem 0px 0px;
    overflow: hidden;
}
  }
  .img-div9{
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .img-div10{
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    background: linear-gradient(to right, rgb(248, 248, 248) 0%, rgb(255, 255, 255) 10%, rgb(248, 248, 248) 40%, rgb(248, 248, 248) 100%) no-repeat rgb(248, 248, 248);
    opacity: 0;
    transition: opacity 0.25s ease-out 0s;
    will-change: opacity;
    border-radius: inherit;
    animation: 1.5s linear 0s infinite normal forwards running jCOzbu;
  }
  .img-3{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: none;
    opacity: 1;
    will-change: transform, opacity;
    border-radius: inherit;
    transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
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
          <section className="img-sec1">
            <div className="img-div1">
              {/* frst-img */}

              <div className="img-div2">
                <div height="100%" width="100%" className="img-div3">
                  <div
                    src=""
                    className="img-div4"
                    style={{
                      backgroundImage: `url(${data && data.thumb})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  {/* <img
                    alt="card4"
                    src={data && data.thumb}
                    loading="lazy"
                    className="img-1"
                  /> */}
                </div>
              </div>

              <section className="img-sec2">
                <div width="100%" className="img-div5">
                  <div height="100%" width="100%" className="img-div6">
                    <div src="" className="img-div7"></div>
                    <img
                      alt="card3"
                      src="https://b.zmtcdn.com/data/pictures/9/19088819/32b0ae465a233bd09cbaaf36ab1b98c7.jpeg?output-format=webp&amp;fit=around|300:273&amp;crop=300:273;*,*"
                      loading="lazy"
                      className="img-2"
                    />
                  </div>
                </div>
                <div width="100%" className="img-div8">
                  <div height="100%" width="100%" className="img-div9">
                    <div src="" className="img-div10"></div>
                    <img
                      alt="card1"
                      src="https://b.zmtcdn.com/data/pictures/9/19088819/b49dde85e8fdc01f268f390f7eebb020.jpeg?output-format=webp&amp;fit=around|300:273&amp;crop=300:273;*,*"
                      loading="lazy"
                      className="img-3"
                    />
                  </div>
                </div>
              </section>
              <section className="img-sec2">
                <div width="100%" className="img-div5">
                  <div height="100%" width="100%" className="img-div6">
                    <div src="" className="img-div7"></div>
                    <img
                      alt="card3"
                      src="https://b.zmtcdn.com/data/pictures/9/19088819/32b0ae465a233bd09cbaaf36ab1b98c7.jpeg?output-format=webp&amp;fit=around|300:273&amp;crop=300:273;*,*"
                      loading="lazy"
                      className="img-2"
                    />
                  </div>
                </div>
                <div width="100%" className="img-div8">
                  <div height="100%" width="100%" className="img-div9">
                    <div src="" className="img-div10"></div>
                    <img
                      alt="card1"
                      src="https://b.zmtcdn.com/data/pictures/9/19088819/b49dde85e8fdc01f268f390f7eebb020.jpeg?output-format=webp&amp;fit=around|300:273&amp;crop=300:273;*,*"
                      loading="lazy"
                      className="img-3"
                    />
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
}

export default ItemImage;
