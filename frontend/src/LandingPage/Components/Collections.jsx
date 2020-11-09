import React from "react";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const Wrapper = styled.div`
  .heading-div {
    font-size: 1.6rem;
  }
  .collection {
    font-weight: 400;
    font-size: 2.2rem;
    line-height: 1.2;
    color: rgb(28, 28, 28);
    margin-top: 15px;
  }
  .text-div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.4rem;
    font-size: 1rem;
  }
  .text {
    line-height: 1.4;
    font-weight: 300;
    color: rgb(54, 54, 54);
    font-size: 1.1rem;
    margin: 0px;
  }
  .link {
    text-decoration: none;
    display: block;
    background-color: transparent;
    font-weight: 300;
    color: rgb(245, 112, 130);
  }
  .link-text {
    color: rgb(236, 70, 84);
    display: inline-flex;
    padding: 0.3rem;
    background-color: transparent;
    cursor: pointer;
    border: 0.1rem solid transparent;
    border-radius: 0.4rem;
    line-height: 1;
    font-size: 1.2rem;
  }
  .bottom-right {
    position: absolute;
    bottom: 8px;
    left: 16px;
    color: white;
    font-size: 20px;
    font-weight: 400;
  }
`;

const CollectionCard = styled.div`
  width: 100%;
  background-image: ${(props) => {
    return `url(${props.backgroundImage})`;
  }};
  background-size: cover;
`;

function Collections(props) {
  const { cityCollections, searchCity } = props;
  const match = useRouteMatch();
  console.log("The city collections are", cityCollections);
  console.log("The match are", match);
  return (
    <>
      <Wrapper>
        <div className="heading-div container mt-4 p-3">
          <h2 className="collection">Collections</h2>
          <div className="text-div">
            <h6 className="text">
              Explore curated lists of top restaurants, cafes, pubs, and bars in{" "}
              {searchCity}, based on trends
            </h6>
            <Link className="link" to="/#">
              <span className="link-text">
                All collection in {searchCity}
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
          <div className="d-flex" style={{ height: "340px" }}>
            {cityCollections.collections !== undefined &&
              cityCollections.collections.map((collection, index) => {
                console.log("Collection is", collection);
                if (index < 4) {
                  return (
                    <CollectionCard
                      key={index}
                      className="card rounded m-2"
                      backgroundImage={collection.collection.image_url}
                    >
                      <Link
                        to={{
                          pathname: `${
                            match.url
                          }/collections/${collection.collection.title
                            .toLowerCase()
                            .split(" ")
                            .join("-")}`,
                          state: {
                            collectionId: collection.collection.collection_id,
                          },
                        }}
                      >
                        <div className="bottom-right">
                          {collection.collection.title}
                          {collection.collection.res_count}
                        </div>
                      </Link>
                    </CollectionCard>
                  );
                }
                return "";
              })}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  searchCity: state.landingPageReducer.searchCity,
  cityCollections: state.landingPageReducer.cityCollections,
});

export default connect(mapStateToProps)(Collections);
