import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Modal from "@material-ui/core/Modal";
import { Wrapper } from "../Style/ProfileBodyStyle";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 600,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 300,
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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

export default function ProfileBody() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <div class="card" style={{ width: "18rem" }}>
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

  const address = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  return (
    <>
      <Wrapper>
        <div className="container mt-5">
          <p className="ml-5">ACTIVITY</p>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="Dineline" {...a11yProps(0)} />
              <Tab label="Photo" {...a11yProps(1)} />
              <Tab label="Followers" {...a11yProps(2)} />
              <Tab label="Bookmarks" {...a11yProps(3)} />
              <Tab label="Reviews" {...a11yProps(4)} />
              <Tab label="Blog Posts" {...a11yProps(5)} />
              <Tab label="Order History" {...a11yProps(6)} />
              <Tab label="My addresses" {...a11yProps(7)} />
              <Tab label="Favorite Orders" {...a11yProps(8)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <h3>Dineline</h3>
              <img
                src="https://i.pinimg.com/originals/ac/03/a3/ac03a320e12ca1517d0543ff11300f6c.png"
                alt="dine"
                style={{
                  height: "150px",
                  display: "block",
                  marginLeft: "200px",
                  marginRight: "200px",
                  marginTop: "90px",
                }}
              />
              <p
                style={{
                  marginLeft: "200px",
                  marginRight: "180px",
                  fontSize: "22px",
                }}
              >
                Nothing here yet
              </p>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <h3>Photos</h3>
              <img
                src="https://b.zmtcdn.com/webFrontend/1a33af2333871e0c1222a3ee21ea697f1581070577.png"
                alt="dine"
                style={{
                  height: "150px",
                  display: "block",
                  marginLeft: "300px",
                  marginRight: "300px",
                  marginTop: "90px",
                }}
              />
              <p
                style={{
                  marginLeft: "300px",
                  marginRight: "300px",
                  fontSize: "22px",
                }}
              >
                Nothing here yet
              </p>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <h3>Followers</h3>
              <div className="d-flex">
                <button type="button" className="btn btn-outline-danger">
                  Following(0)
                </button>
                <button type="button" className="btn btn-danger ml-3">
                  Followers(0)
                </button>
              </div>
              <img
                src="https://b.zmtcdn.com/webFrontend/c33e5cd0b755a03f9b2f374b1b8271a91581004801.png"
                alt="dine"
                style={{
                  height: "150px",
                  display: "block",
                  marginLeft: "300px",
                  marginRight: "300px",
                  marginTop: "90px",
                }}
              />
              <p
                style={{
                  marginLeft: "300px",
                  marginRight: "300px",
                }}
              >
                You are not followed by any users yet.
              </p>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <h3>Bookmarks</h3>

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbLNIqX--pZPiXZVl3WXp7W9AlM2ETiYrclA&usqp=CAU"
                alt="dine"
                style={{
                  height: "150px",
                  display: "block",
                  marginLeft: "200px",
                  marginRight: "200px",
                  marginTop: "90px",
                }}
              />
              <p
                style={{
                  marginLeft: "300px",
                  marginRight: "300px",
                }}
              >
                No Bookmarks yet
              </p>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <h3>Reviews</h3>

              <img
                src="https://b.zmtcdn.com/webFrontend/691ad4ad27a5804a3033977d45390c811584432410.png"
                alt="dine"
                style={{
                  height: "150px",
                  display: "block",
                  marginLeft: "300px",
                  marginRight: "300px",
                  marginTop: "90px",
                }}
              />
              <p
                style={{
                  marginLeft: "300px",
                  marginRight: "300px",
                }}
              >
                Nothing here yet
              </p>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <h3>Blog Posts</h3>

              <img
                src="https://ahrefs.com/blog/wp-content/uploads/2019/03/blog-how-to-write-a-blog-post-400x200.png"
                alt="dine"
                style={{
                  height: "150px",
                  display: "block",
                  marginLeft: "200px",
                  marginRight: "200px",
                  marginTop: "90px",
                }}
              />
              <p
                style={{
                  marginLeft: "280px",
                  marginRight: "280px",
                }}
              >
                Nothing here yet
              </p>
            </TabPanel>
            <TabPanel value={value} index={6}>
              <h3>Order History</h3>
              <div className="d-flex">
                <div className="col-6">
                  <div class="card rounded" style={{ width: "22rem" }}>
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
                              <p
                                className="text-muted"
                                style={{ fontSize: "12px" }}
                              >
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
                        <div>
                          <button
                            type="button"
                            class="btn btn-outline-danger"
                            onClick={handleOpen}
                          >
                            View Details
                          </button>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                          >
                            {body}
                          </Modal>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div class="card rounded" style={{ width: "22rem" }}>
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
                              <p
                                className="text-muted"
                                style={{ fontSize: "12px" }}
                              >
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
                        <div>
                          <button
                            type="button"
                            class="btn btn-outline-danger"
                            onClick={handleOpen}
                          >
                            View Details
                          </button>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                          >
                            {body}
                          </Modal>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={7}>
              <div class="card p-5" style={{ width: "18rem" }}>
                <div class="card-body" type="button" onClick={handleOpen}>
                  <AddCircleOutlineIcon
                    style={{ color: "red", marginLeft: "60px" }}
                  />
                  <h5 style={{ textAlign: "center" }}>Add address</h5>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    {address}
                  </Modal>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={8}>
              <h3>Favorite Orders</h3>

              <img
                src="https://b.zmtcdn.com/webFrontend/96a9a259cfa3dd8e260d65d1f135ab941581004545.png"
                alt="dine"
                style={{
                  height: "150px",
                  display: "block",
                  marginLeft: "300px",
                  marginRight: "300px",
                  marginTop: "90px",
                }}
              />
              <p
                style={{
                  marginLeft: "330px",
                  marginRight: "300px",
                }}
              >
                Nothing here yet
              </p>
            </TabPanel>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
