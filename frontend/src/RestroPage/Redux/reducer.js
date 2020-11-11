import * as constants from "./actionTypes";

const initialState = {
  error: false,
  errorMessage: "",
  isLoading: false,
  restaurant: {},
  cart: [],
  cartValue: 0,
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.RESTAURANT_FETCH_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case constants.RESTAURANT_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        restaurant: action.restaurant,
      };

    case constants.RESTAURANT_FETCH_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        errorMessage: action.message,
      };

    case constants.ADD_ITEMS_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload.dish,
            quantity: action.payload.quantity,
          },
        ],
      };

    case constants.EMPTY_CART_ITEMS:
      return {
        ...state,
        cart: [],
      };

    case constants.CHANGE_ITEM_QUANTITY_IN_CART:
      let newData;
      if (action.payload.quantity === 0) {
        newData = state.cart.filter(
          (item) => item.dish !== action.payload.dishName
        );
      } else {
        newData = state.cart.map((item) => {
          if (item.dish === action.payload.dishName) {
            return {
              ...item,
              quantity: action.payload.quantity,
            };
          }
          return item;
        });
      }
      return {
        ...state,
        cart: newData,
      };

    case constants.SET_TOTAL_CART_VALUE:
      return {
        ...state,
        cartValue: action.payload,
      };

    default:
      return state;
  }
};
