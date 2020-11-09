import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "../LandingPage/LandingPage";
import { getCityId, getCityCollection } from "../LandingPage/Redux/action";
import RestroPage from "../RestroPage/RestroPage";
import CollectionsPage from "../CollectionsPage/CollectionsPage";

const data = [
  {
    establishment: ["Microbrewery"],
    highlights: [
      "Lunch",
      "Debit Card",
      "Cash",
      "Credit Card",
      "Takeaway Available",
      "Dinner",
      "Delivery",
      "Table booking recommended",
      "DJ",
      "Fullbar",
      "Air Conditioned",
      "Outdoor Seating",
      "Wifi",
      "Valet Parking Available",
      "Indoor Seating",
      "Live Sports Screening",
    ],
    photos: [
      "https://b.zmtcdn.com/data/pictures/3/19122613/3b085caa3ce1213e999abbcf19653e9c.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/19122613/8a4a6fcee8b1275d16b3624f9636a7e0.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/19122613/27f1446738505a721e5e88b648ce0800.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/19122613/010f07e69373c17ee5437fc0f05e55aa.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/19122613/7156315edef8773befa1a8bfbf7e66fd.jpg",
    ],
    all_reviews: [
      {
        reviews: [
          {
            review: [],
          },
          {
            review: [],
          },
          {
            review: [],
          },
          {
            review: [],
          },
          {
            review: [],
          },
        ],
      },
    ],
    menu: [
      {
        dish: "Sun-Kissed",
        cost: "475",
        image:
          "https://b.zmtcdn.com/data/dish_photos/1f3/d3a72c0e0bdffc3fa92a210fb5f0e1f3.jpg",
        description:
          "Traditional Sun-dried tomato pizza green bell pepper, onion, mushroom, cherry tomato, baby spinach and ricotta cheese.",
        veg: true,
        votes: 0,
        ratings: 0,
      },
      {
        dish: "Marco Pollo",
        cost: "525",
        image:
          "https://b.zmtcdn.com/data/dish_photos/f7c/3c2f72209d0aac3693c859e381002f7c.jpg",
        description:
          "Traditional Pollo Basilica pizza made with basil pesto marinated chicken, sun-dried tomatoes & parmesan shaves",
        veg: false,
        votes: 0,
        ratings: 0,
      },
      {
        dish: "Prawns Ghee Roast",
        cost: "495",
        image:
          "https://b.zmtcdn.com/data/dish_photos/f8a/9c55802ea09bc4f5ff737754d8371f8a.jpg",
        description:
          "Prawns cooked with ghee roasted byadgi chilli, coriander seed & curry leaves paste.",
        veg: false,
        votes: 0,
        ratings: 0,
      },
      {
        dish: "Sausage Party",
        cost: "525",
        image:
          "https://b.zmtcdn.com/data/dish_photos/e3e/5b68169e16a28a0970a9c7be64cf4e3e.jpg",
        description:
          "Traditional Calabrese pizza made with spicy Calabrese chicken sausage, shredded mozzarella, bell peppers, onions & red chili",
        veg: false,
        votes: 0,
        ratings: 0,
      },
      {
        dish: "Lord Of the BBQ",
        cost: "525",
        image:
          "https://b.zmtcdn.com/data/dish_photos/59d/d5eefba49563a8bb3a36fc22eb4e959d.jpg",
        description:
          "Chef’s special pizza made with grilled barbeque chicken, pineapple, mushroom, spinach, mustard, jalapeños & parmesan shave",
        veg: false,
        votes: 0,
        ratings: 0,
      },
    ],
    collection_id: [99, 9, 75, 438],
    _id: "5fa5247cce1e431da012d548",
    id: "19122613",
    name: "URU Brewpark",
    location: {
      address: "Near Maratt Estate, 4th Phase, JP Nagar, Bangalore",
      locality: "JP Nagar",
      city: "Bangalore",
      city_id: 4,
      cords: {
        type: "Point",
        coordinates: [77.601274, 12.905891],
      },
      zipcode: "",
      country_id: 1,
      locality_verbose: "JP Nagar, Bangalore",
    },
    cuisines:
      "Italian, North Indian, Continental, Chinese, Asian, Desserts, Beverages",
    timings: "12noon – 11:30pm (Mon-Sun)",
    average_cost_for_two: 1500,
    price_range: "3",
    currency: "Rs.",
    thumb:
      "https://b.zmtcdn.com/data/pictures/3/19122613/3b085caa3ce1213e999abbcf19653e9c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    user_rating: {
      aggregate_rating: "4.0",
      rating_text: "Very Good",
      rating_color: "5BA829",
      rating_obj: {
        title: {
          text: "4.0",
        },
        bg_color: {
          type: "lime",
          tint: "600",
        },
      },
      votes: 2191,
    },
    all_reviews_count: 1515,
    photo_count: 937,
    featured_image:
      "https://b.zmtcdn.com/data/pictures/3/19122613/3b085caa3ce1213e999abbcf19653e9c.jpg?output-format=webp",
    has_online_delivery: 1,
    is_delivering_now: 0,
    has_table_booking: 1,
    phone_numbers: "080 40511500",
    __v: 2,
    score: 0.75,
  },
];

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
  }, []);
  console.log("The search city is", searchCity);
  return (
    <div>
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
        path="/:city/restaurants/:restaurant"
        render={() => <RestroPage data={data} />}
      />
      <Route
        path="/:city/collections/:collections"
        render={() => <CollectionsPage />}
      />
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
