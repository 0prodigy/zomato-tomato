import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Zoom from "@material-ui/core/Zoom";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import Backdrop from "@material-ui/core/Backdrop";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Divider from "@material-ui/core/Divider";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import clsx from "clsx";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputBox from "./InputBox";

const DefaultButton = styled.button`
  width: 100%;
  margin: 30px 0px 0px 0px;
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

const ResetButton = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  ${(props) =>
    props.disabled === true ? `color: grey` : `color: rgb(237, 90, 107)`}
`;

const OTPTimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  font-size: 32px;
  font-weight: 400;
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
    alignItems: "center",
    fontSize: "28px",
  },
  divider: {
    height: 28,
    margin: "auto",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
  root: {
    background: "rgb(237, 90, 107)",
    width: "100%",
    color: "white",
    margin: "20px 0px",
    padding: "10px 0px",
    borderRadius: "6px",
    fontSize: "16px",
    textTransform: "none",
    "&:hover": {
      background: "#f7394f",
    },
  },
  inputFields: {
    margin: "10px 0px",
  },
  otpDescription: {
    margin: "12px 0px",
    fontSize: "15px",
  },
}));

function LoginPage({
  openLogin,
  handleNavigationClose,
  setOpenLogin,
  setOpenSignup,
}) {
  const [loginWithEmail, setLoginWithEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [timerValue, setTimerValue] = useState(30);
  const [otpVerification, setOtpVerification] = useState(false);
  const classes = useStyles();

  const handleLoginWithEmail = () => {
    if (email === "") {
      setError(true);
      setErrorMessage("Please enter an email");
    } else {
      let atTheRate = email.split("@");
      let dotCom = email.split(".");
      if (
        atTheRate.length !== 2 ||
        dotCom.length !== 2 ||
        dotCom.indexOf("com") === -1
      ) {
        setError(true);
        setErrorMessage("Please enter a valid email");
      } else {
        setError(false);
        setErrorMessage("");
        setOtpVerification(true);
      }
    }
  };

  useEffect(() => {
    let intervalId;

    if (otpVerification === true) {
      intervalId = setInterval(() => {
        if (Number(timerValue) > 0) {
          setTimerValue((timerValue) => Number(timerValue) - 1);
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [otpVerification, timerValue]);

  if (otpVerification) {
    return (
      <Modal
        className={classes.modal}
        open={loginWithEmail}
        onClose={() => {
          setTimerValue(30);
          setOtpVerification(false);
          setLoginWithEmail(false);
          setEmail("");
          handleNavigationClose();
        }}
        closeAfterTransition
      >
        <Zoom in={loginWithEmail}>
          <div className={classes.paper}>
            <div className={classes.navigationLinkTitle}>
              <IconButton
                onClick={() => {
                  setTimerValue(30);
                  setOtpVerification(false);
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <h2>OTP Verification</h2>
              <IconButton
                onClick={() => {
                  setEmail("");
                  setTimerValue(30);
                  setOtpVerification(false);
                  setLoginWithEmail(false);
                  handleNavigationClose();
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>

            <div id="transition-modal-description">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <div className={classes.otpDescription}>
                  One Time Password has been sent to your email, {email}, please
                  enter the same here to login. Valid for 10 minutes.
                </div>
              </div>
              <InputBox length={6} onChange={(val) => setOtpValue(val)} />
              <OTPTimerWrapper>
                00:{timerValue < 10 ? `0${timerValue}` : timerValue}
              </OTPTimerWrapper>
              <div style={{ textAlign: "center", margin: "12px 0px" }}>
                Not received OTP?{" "}
                <ResetButton disabled={timerValue === 0 ? false : true}>
                  Resend Now
                </ResetButton>
              </div>
            </div>
          </div>
        </Zoom>
      </Modal>
    );
  } else if (loginWithEmail) {
    return (
      <Modal
        className={classes.modal}
        open={loginWithEmail}
        onClose={() => {
          setLoginWithEmail(false);
          handleNavigationClose();
        }}
        closeAfterTransition
      >
        <Zoom in={loginWithEmail}>
          <div className={classes.paper}>
            <div className={classes.navigationLinkTitle}>
              <IconButton
                onClick={() => {
                  setLoginWithEmail(false);
                  setError(false);
                  setErrorMessage("");
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <h2>Login</h2>
              <IconButton
                onClick={() => {
                  setLoginWithEmail(false);
                  setError(false);
                  setErrorMessage("");
                  handleNavigationClose();
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>

            <div id="transition-modal-description">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="./Login with Email.webp"
                  alt="Login with email"
                  style={{ height: "150px" }}
                />
              </div>
              <TextField
                label="Email"
                fullWidth
                error={error}
                helperText={errorMessage}
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setError(false);
                  setErrorMessage("");
                  setEmail(e.target.value);
                }}
                className={classes.inputFields}
              />
              <Button className={classes.root} onClick={handleLoginWithEmail}>
                Send One Time Password
              </Button>
            </div>
          </div>
        </Zoom>
      </Modal>
    );
  } else {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        name="login"
        open={openLogin}
        onClose={handleNavigationClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom in={openLogin}>
          <div className={classes.paper}>
            <div className={classes.navigationLinkTitle}>
              <h2>Login</h2>
              <IconButton onClick={handleNavigationClose}>
                <CloseIcon />
              </IconButton>
            </div>

            <div id="transition-modal-description">
              <FormControl
                className={clsx(classes.withoutLabel, classes.textField)}
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange("weight")}
                  type="number"
                  fullWidth
                  startAdornment={
                    <>
                      <InputAdornment position="start">+91</InputAdornment>
                      <Divider
                        orientation="vertical"
                        flexItem
                        className={classes.divider}
                      />
                    </>
                  }
                />
                <Button className={classes.root}>Send One Time Password</Button>
                <DividerWrapper>
                  <Divider />
                  <span>or</span>
                </DividerWrapper>

                <DefaultButton onClick={() => setLoginWithEmail(true)}>
                  <img src="./login with email.png" alt="Login email icon" />
                  Continue with Email
                </DefaultButton>
                <DefaultButton>
                  <img src="./google svg.svg" alt="google icon" />
                  Continue with Google
                </DefaultButton>
                <div style={{ margin: "25px 0px" }}>
                  <Divider />
                </div>
                <LinkWrapper>
                  New to Zomato?
                  <button
                    onClick={() => {
                      setOpenLogin(false);
                      setOpenSignup(true);
                    }}
                  >
                    Create account
                  </button>
                </LinkWrapper>
              </FormControl>
            </div>
          </div>
        </Zoom>
      </Modal>
    );
  }
}

export default LoginPage;
