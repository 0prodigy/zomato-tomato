import React, { useState } from "react";
import styled from "styled-components";
import AssistantIcon from "@material-ui/icons/Star";

const Wrapper = styled.div``;

function DishComponent(props) {
  const { dish, cartFunction } = props;

  const [dishCount, setDishCount] = useState(0);
  const [addCount, setAddCount] = useState("");
  const [removeCount, setRemoveCount] = useState("");

  const addItem = (count) => {
    console.log(count);

    setDishCount((prev) => prev + 1);
    cartFunction(dish.dish, dishCount + 1);
  };

  const removeItem = (count) => {
    console.log(count);

    setDishCount((prev) => prev - 1);
    cartFunction(dish.dish, dishCount - 1);
  };

  return (
    <>
      <Wrapper>
        <div class="d-flex bd-highlight mb-3">
          <div class="p-2 bd-highlight">
            <img
              src={dish.image}
              alt={dish.dish}
              style={{
                height: "129px",
                width: "127px",
                borderRadius: "10px",
              }}
            />
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
                <>
                  <div class="d-flex bd-highlight mb-3 bg-light rounded">
                    <div
                      class="p-2 bd-highlight"
                      onClick={() => removeItem(dishCount)}
                    >
                      -
                    </div>
                    <div class="p-2 bd-highlight">{dishCount}</div>
                    <div
                      class="p-2 bd-highlight"
                      onClick={() => addItem(dishCount)}
                    >
                      +
                    </div>
                  </div>
                </>
              </div>
            ) : (
              <button
                type="button"
                class="btn btn-light"
                onClick={() => {
                  setDishCount((prev) => prev + 1);
                  cartFunction(dish.dish, dishCount + 1);
                }}
              >
                ADD +
              </button>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default DishComponent;
