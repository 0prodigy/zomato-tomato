import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Wrapper = styled.div`
  .payment-success {
    border: 1px solid #e1e1d0;
    position: relative;
    top: 0;
    left: 0;
    height: 260px;
    background-color: #e6f2ff;
    border-radius: 10px;
  }
  .card-top {
    position: absolute;
    top: 170px;
    border-radius: 10px;
    width: 585px;
  }
  .summary {
    letter-spacing: 3px;
  }
  .restro-img {
    height: 50px;
  }
  .veg-border {
    border: 1px solid green;
    height: 12px;
    width: 12px;
    margin-left: 0px;
    padding: 1px;
  }
  .veg-color {
    background-color: green;
    border-radius: 50%;
    height: 8px;
    width: 8px;
  }
  .order-div {
    margin-bottom: 1rem;
  }

  .order-text {
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.15rem;
    margin: 0px;
    font-weight: 500;
    color: rgb(105, 105, 105);
  }
  .order-id {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 500;
    margin: 0px;
    font-size: 0.8rem;
  }
  .btn-view {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    color: red;
  }
`;

function SuccessMessage() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Wrapper>
      <div style={modalStyle} className={classes.paper}>
        <div class="card" style={{ width: "32rem" }}>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="d-flex bd-highlight">
                <div class="p-2 bd-highlight ml-0">
                  <img
                    src="https://www.texcial.com/wp-content/uploads/2019/12/gsjgdjsydyj.jpg"
                    alt="card1"
                    style={{
                      height: "60px",
                      width: "50px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div class="p-2 bd-highlight">
                  <p>
                    Aminia
                    <p className="text-muted" style={{ fontSize: "12px" }}>
                      Kolkata
                    </p>
                  </p>
                </div>
                <div class="ml-auto p-2 bd-highlight">Delivery</div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="order-div">
                <p class="order-text">Order Number</p>
                <p class="order-id">2029441541</p>
              </div>
              <div class="order-div">
                <p class="order-text">TOTAL AMOUNT</p>
                <p class="order-id">₹296.50</p>
              </div>
              <div class="order-div">
                <p class="order-text">ITEMS</p>
                <p class="order-id">1 x Chicken Biryani [1 Piece]</p>
              </div>
              <div class="order-div">
                <p class="order-text">ORDERED ON</p>
                <p class="order-id">February 27, 2020 at 04:05 PM</p>
              </div>
              <hr />
              <h3>Order Details</h3>
              <div class="order-div">
                <p class="order-text">ORDER ID</p>
                <p class="order-id">2029441541</p>
              </div>
              <div class="order-div">
                <p class="order-text">PAYMENT</p>
                <p class="order-id">Cash on Delivery</p>
              </div>
              <div class="order-div">
                <p class="order-text">PHONE NUMBER</p>
                <p class="order-id">7003400548</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );

  return (
    <>
      <Wrapper>
        <div className="container">
          <h2 className="mt-5">Domino's Pizza</h2>
          <div className="d-flex">
            <div className="col-7 mt-3 ">
              <div className="payment-success p-5">
                <img
                  src="https://livemap.info/images/check.svg"
                  alt="successful"
                  style={{ height: "80px", marginLeft: "190px" }}
                />
              </div>
              <div class="card card-top ml-3">
                <div class="card-body d-flex">
                  <div>
                    {" "}
                    <h4>Your order has been accepted</h4>
                  </div>

                  <div style={{ marginLeft: "120px", color: "blue" }}>
                    <ThumbUpIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 mt-3">
              <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <p className="summary">ORDER SUMMARY</p>
                    <div className="d-flex">
                      <img
                        src="https://content3.jdmagicbox.com/comp/ajmer/f9/9999px145.x145.190315205014.w5f9/catalogue/pizza-hutt-ajmer-pizza-outlets-1ijyfzcsjj.jpg"
                        alt="pizza"
                        className="restro-img"
                      />
                      <div className="ml-2">
                        Domino's Pizza
                        <br /> Kolkata
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item d-flex">
                    <p>1 X</p>
                    <div
                      className="veg-border ml-2 mr-2"
                      style={{ marginTop: "5px" }}
                    >
                      <div className="veg-color"></div>
                    </div>
                    <p>Chicken pizza</p>
                  </li>
                  <li
                    class="list-group-item"
                    style={{ fontSize: "15px", color: "red" }}
                  >
                    <button
                      type="button"
                      onClick={handleOpen}
                      className="btn-view"
                    >
                      View Complete Order Details <ArrowRightIcon />
                    </button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                    >
                      {body}
                    </Modal>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default SuccessMessage;
