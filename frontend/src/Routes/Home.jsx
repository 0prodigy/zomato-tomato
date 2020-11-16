import React, { useEffect } from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "../LandingPage/LandingPage";
import { getCityId, getCityCollection } from "../LandingPage/Redux/action";
import RestroPage from "../RestroPage/RestroPage";
import CollectionsPage from "../CollectionsPage/CollectionsPage";
import ExploreZomato from "../ExploreZomato/ExploreZomato";
import Checkout from "../Checkout/Checkout";
import ProfilePage from "../ProfilePage/ProfilePage";
import PaymentSuccessPage from "../PaymentSuccessPage/PaymentSuccessPage";

function Home(props) {
  const { getCityId, searchCity, getCityCollection } = props;
  const initialData = async () => {
    let initialPayload = {
      long: 88.363895,
      lat: 22.572646,
    };
    let result = await getCityId(initialPayload);
    getCityCollection(result.cityId);
  };
  useEffect(() => {
    initialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ErrorPage = (
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <h2>Oops! We couldn't find the page for you</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="
https://b.zmtcdn.com/web_assets/b69badeeb9ef00f59428b4c09ef4c1901575873261.png"
          alt="Oops, Page not found"
        />
      </div>
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Go to Home
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            searchCity && (
              <Redirect to={{ pathname: `/${searchCity.toLowerCase()}` }} />
            )
          }
        />
        <Route exact path="/:city">
          <LandingPage />
        </Route>
        <Route
          exact
          path="/:city/restaurants/:restaurant"
          render={() => <RestroPage />}
        />
        <Route
          path="/:city/restaurants/:restaurant/order"
          render={() => <Checkout />}
        />
        <Route
          path="/:city/collections/:collections"
          render={() => <CollectionsPage />}
        />
        <Route path="/:city/explore" render={() => <ExploreZomato />} />
        <Route path="/users/:username" render={() => <ProfilePage />} />
        <Route path="/:city/payment" render={() => <PaymentSuccessPage />} />
        <Route render={() => ErrorPage} />
      </Switch>
    </div>
  );
}
const mapStateToProps = (state) => ({
  searchCity: state.landingPageReducer.searchCity,
});
const mapDispatchToProps = (dispatch) => ({
  getCityId: (payload) => dispatch(getCityId(payload)),
  getCityCollection: (cityId) => dispatch(getCityCollection(cityId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
