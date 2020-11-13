import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../Style/ItemImageStyle";

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
                  {/* <div
                    src=""
                    className="img-div4"
                    style={{
                      backgroundImage: `url(${data && data.photos[0]})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div> */}
                  <img
                    alt="card4"
                    src={data && data.photos && data.photos[0]}
                    loading="lazy"
                    className="img-1"
                  />
                </div>
              </div>
              <section className="img-sec2">
                <div width="100%" className="img-div5">
                  <div height="100%" width="100%" className="img-div6">
                    <div src="" className="img-div7"></div>
                    <img
                      alt="card3"
                      // src="https://b.zmtcdn.com/data/pictures/9/19088819/32b0ae465a233bd09cbaaf36ab1b98c7.jpeg?output-format=webp&amp;fit=around|300:273&amp;crop=300:273;*,*"
                      src={data && data.photos && data.photos[1]}
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
                      // src="https://b.zmtcdn.com/data/pictures/9/19088819/b49dde85e8fdc01f268f390f7eebb020.jpeg?output-format=webp&amp;fit=around|300:273&amp;crop=300:273;*,*"
                      src={data && data.photos && data.photos[2]}
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
                      // src="https://b.zmtcdn.com/data/pictures/9/19088819/32b0ae465a233bd09cbaaf36ab1b98c7.jpeg?output-format=webp&amp;fit=around|300:273&amp;crop=300:273;*,*"
                      src={data && data.photos && data.photos[3]}
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
                      // src="https://b.zmtcdn.com/data/pictures/9/19088819/b49dde85e8fdc01f268f390f7eebb020.jpeg?output-format=webp&amp;fit=around|300:273&amp;crop=300:273;*,*"
                      src={data && data.photos && data.photos[4]}
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
