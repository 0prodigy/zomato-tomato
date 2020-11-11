import React from "react";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import styled from "styled-components";
import { Wrapper } from "../Style/CollectionStyle";

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
