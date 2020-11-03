import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Zoom from "@material-ui/core/Zoom";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";

const ButtonWrapper = styled.button`
  width: 100%;
  margin: 20px 0px;
  padding: 10px 0px;
  border-radius: 6px;
  ${(props) =>
    props.disabled === true
      ? `background-color: rgb(156,156,156); opacity: 0.5;  border: rgb(156,156,156);`
      : `background-color: rgb(237, 90, 107); border: rgb(237, 90, 107);`}
  color: white;
`;

const GoogleButton = styled.button`
  width: 100%;
  margin: 30px 0px 10px 0px;
  padding: 10px 0px;
  background-color: white;
  color: rgb(156, 156, 156);
  border: 0.5px solid rgb(156, 156, 156);
  border-radius: 6px;
  img {
    width: 24px;
    margin: 0px 5px;
  }
`;

const DividerWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  hr {
    width: 100%;
  }
  span {
    position: absolute;
    font-size: 20px;
    top: -17px;
    left: 50%;
    color: rgb(105, 105, 105);
    background: white;
    transform: translateX(-50%);
  }
`;

const LinkWrapper = styled.div`
  padding-top: 12px;
  button {
    border: none;
    background-color: inherit;
    color: rgb(237, 90, 107);
    margin: 0px 5px;
  }
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    width: "450px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 3),
    position: "absolute",
    top: "20%",
    "@media only screen and (max-width: 420px)": {
      width: "100%",
    },
  },
  navigationLinkTitle: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Poppins",
    fontSize: "28px",
    marginBottom: "18px",
  },
  inputFields: {
    margin: "10px 0px",
  },
  signupNotice: {
    display: "flex",
    alignItems: "start",
    "& div": {
      padding: "5px 0px 0px 0px",
      fontSize: "14px",
      "& span": {
        color: "rgb(237, 90, 107)",
        fontWeight: "500",
      },
    },
  },
}));

function LoginPage({
  openSignup,
  handleNavigationClose,
  setOpenLogin,
  setOpenSignup,
}) {
  const classes = useStyles();
  const [acceptNotice, setAcceptNotice] = useState(false);
  const [fullname, setFullname] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [fullnameErrorMessage, setFullnameErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const defaultState = () => {
    setAcceptNotice(false);
    setFullname("");
    setFullnameError(false);
    setFullnameErrorMessage("");
    setEmail("");
    setEmailError(false);
    setEmailErrorMessage("");
  };

  const handleSignup = (e) => {
    console.log("The values are ", fullname, email);
    if (fullname === "") {
      setFullnameError(true);
      setFullnameErrorMessage("Please enter a valid name");
    }
    if (email === "") {
      setEmailError(true);
      setEmailErrorMessage("Invalid Email id");
    } else if (fullname !== "" && email !== "") {
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      name="signup"
      open={openSignup}
      onClose={handleNavigationClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Zoom in={openSignup}>
        <div className={classes.paper}>
          <div className={classes.navigationLinkTitle}>
            <h2>Signup</h2>
            <IconButton
              onClick={() => {
                defaultState();
                handleNavigationClose();
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div id="transition-modal-description">
            <TextField
              label="Full Name"
              fullWidth
              required
              value={fullname}
              error={fullnameError}
              helperText={fullnameErrorMessage}
              onChange={(e) => {
                setFullnameError(false);
                setFullnameErrorMessage("");
                setFullname(e.target.value);
              }}
              variant="outlined"
              className={classes.inputFields}
            />
            <TextField
              label="Email"
              required
              error={emailError}
              helperText={emailErrorMessage}
              fullWidth
              value={email}
              onChange={(e) => {
                setEmailError(false);
                setEmailErrorMessage("");
                setEmail(e.target.value);
              }}
              variant="outlined"
              className={classes.inputFields}
            />
            <div className={classes.signupNotice}>
              <Checkbox onChange={(e) => setAcceptNotice(e.target.checked)} />
              <div>
                I agree to Zomato's <span>Terms of Service</span>,
                <span>Privacy Policy</span> and <span>Content Policies</span>
              </div>
            </div>
            <ButtonWrapper
              disabled={acceptNotice === false ? true : false}
              onClick={handleSignup}
            >
              Create account
            </ButtonWrapper>
            <DividerWrapper>
              <Divider />
              <span>or</span>
            </DividerWrapper>
            <GoogleButton>
              <img src="./google svg.svg" alt="google icon" />
              Continue with Google
            </GoogleButton>
            <Divider />
            <LinkWrapper>
              Already have an account?{" "}
              <button
                onClick={() => {
                  defaultState();
                  setOpenSignup(false);
                  setOpenLogin(true);
                }}
              >
                Login
              </button>
            </LinkWrapper>
          </div>
        </div>
      </Zoom>
    </Modal>
  );
}

export default LoginPage;
