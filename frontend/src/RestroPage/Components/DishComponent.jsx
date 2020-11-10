import React, { useState } from "react";
import styled from "styled-components";
import AssistantIcon from "@material-ui/icons/Star";

const Wrapper = styled.div`
  .addButton {
    padding: 4px;
    width: 80px;
    border: 1px solid grey;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    background: rgb(255, 255, 255);
  }

  .customizeButton {
    border: 1px solid grey;
    display: flex;
    border-radius: 6px;
    cursor: pointer;
    justify-content: center;
    align-content: center;
    width: 80px;

    div {
      padding: 2px 0px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div:nth-last-child(2) {
      background-color: rgb(247, 235, 236);
      :hover {
        background-color: #f7d7da;
      }
    }
  }
`;

function DishComponent(props) {
  const {
    dish,
    cartFunction,
    setTotalValue,
    addItem,
    removeItem,
    cart,
  } = props;

  const [dishCount, setDishCount] = useState(0);

  React.useEffect(() => {
    let newCount = cart.filter((item) => item.dish === dish.dish);
    if (newCount[0] !== undefined) {
      setDishCount(newCount[0].quantity);
    } else {
      setDishCount(0);
    }
  }, [cart, dish]);

  return (
    <>
      <Wrapper>
        <div class="d-flex bd-highlight mb-3">
          <div class="p-2 bd-highlight" style={{ position: "relative" }}>
            <img
              src={dish.image}
              alt={dish.dish}
              style={{
                height: "129px",
                width: "127px",
                borderRadius: "10px",
              }}
            />
            <div style={{ position: "absolute", top: "10px", right: "10px" }}>
              {dish.veg === false ? (
                <img
                  src="/non-veg.png"
                  style={{ width: "14px", backgroundColor: "white" }}
                  alt="Non-Veg Dish"
                />
              ) : (
                <img src="/veg.png" style={{ width: "15px" }} alt="Veg Dish" />
              )}
            </div>
          </div>
          <div class="p-2 bd-highlight">
            <div>
              <h5>{dish.dish}</h5>
              <div className="d-flex">
                {new Array(Math.floor(parseInt(dish.ratings)))
                  .fill(0)
                  .map(
                    (_, i) =>
                      i < 5 && (
                        <AssistantIcon
                          style={{ color: "rgb(255,216,0)" }}
                          key={i}
                        />
                      )
                  )}
                {/* <AssistantIcon
                                    style={{ color: "rgb(255,216,0)" }}
                                  />{" "} */}
                <p>{dish && dish.votes} Votes</p>
              </div>
              <p>₹{dish && dish.cost}</p>
            </div>
          </div>
          <div class="ml-auto p-2 bd-highlight">
            {dishCount >= 1 ? (
              <div>
                <div class="bd-highlight mb-3 customizeButton">
                  <div
                    style={{ color: "red" }}
                    class="bd-highlight"
                    onClick={() => {
                      removeItem(dish.dish, dish, dishCount);
                    }}
                  >
                    -
                  </div>
                  <div class="bd-highlight">{dishCount}</div>
                  <div
                    style={{ color: "red" }}
                    class="bd-highlight"
                    onClick={() => {
                      addItem(dish.dish, dish, dishCount);
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
            ) : (
              <button
                type="button"
                class="btn btn-light addButton"
                onClick={() => {
                  setDishCount((prev) => prev + 1);
                  setTotalValue((prev) => prev + Number(dish.cost));
                  cartFunction(dish.dish, dish, dishCount + 1);
                }}
              >
                Add <span style={{ color: "red", fontWeight: "500" }}>+</span>
              </button>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default DishComponent;
