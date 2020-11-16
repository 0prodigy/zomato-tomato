import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { userSignup, userSignupVerify } from "../Redux/action";
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
import Alert from "@material-ui/lab/Alert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import InputBox from "./InputBox";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

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

function LoginPage(props) {
  const classes = useStyles();
  const {
    openSignup,
    handleNavigationClose,
    setOpenSignup,
    setOpenLogin,
    userSignup,
    userSignupVerify,
  } = props;
  const [acceptNotice, setAcceptNotice] = useState(false);
  const [fullname, setFullname] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [fullnameErrorMessage, setFullnameErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [userSignupSuccess, setUserSignupSuccess] = useState(false);
  const [userSignupSuccessMessage, setUserSignupSuccessMessage] = useState("");
  const [userSignupError, setUserSignupError] = useState(false);
  const [userSignupErrorMessage, setUserSignupErrorMessage] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [timerValue, setTimerValue] = useState(30);
  const [otpVerification, setOtpVerification] = useState(false);

  const defaultState = () => {
    setAcceptNotice(false);
    setFullname("");
    setFullnameError(false);
    setFullnameErrorMessage("");
    setEmail("");
    setEmailError(false);
    setEmailErrorMessage("");
  };

  const handleSignup = async (e) => {
    if (fullname === "") {
      setFullnameError(true);
      setFullnameErrorMessage("Please enter a valid name");
    }
    if (email === "") {
      setEmailError(true);
      setEmailErrorMessage("Invalid Email id");
    } else if (fullname !== "" && email !== "") {
      let payload = {
        name: fullname,
        email: email,
      };
      const result = await userSignup(payload);
      if (result.error === false) {
        setUserSignupSuccess(true);
        setUserSignupSuccessMessage(
          `${result.payload.message}, ${result.payload.data.email}`
        );
        setOtpVerification(true);
        setTimeout(() => {
          setUserSignupSuccess(false);
          setUserSignupSuccessMessage("");
        }, 2000);
      } else if (result.error === true) {
        setUserSignupError(true);
        setUserSignupErrorMessage("Was not able to sign you up.");
        setTimeout(() => {
          setUserSignupError(false);
          setUserSignupErrorMessage("");
        }, 2000);
      }
    }
  };

  const verifyOtp = async (val) => {
    setOtpValue(val);
    if (val.length === 5) {
      let payload = { otp: Number(val), email: email };
      let result = await userSignupVerify(payload);
      if (result.error === false) {
        setTimerValue(0);
        handleNavigationClose();
        setOpenLogin(true);
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

  const responseGoogle = (response) => {
    let googleResponse = response.profileObj;
    let payload = {
      name: `${googleResponse.givenName} ${googleResponse.familyName}`,
      image: googleResponse.imageUrl,
      email: googleResponse.email,
      id: googleResponse.googleId,
    };
    axios({
      method: "post",
      url: "https://zomato-tomato.tk/api/api/auth/googleRegister",
      data: payload,
    })
      .then((response) => {
        setUserSignupSuccess(true);
        setUserSignupSuccessMessage(`${response.data.message}`);
        setTimeout(() => {
          setUserSignupSuccess(false);
          setUserSignupSuccessMessage("");
          handleNavigationClose();
        }, 2000);
      })
      .catch((error) => {
        setUserSignupError(true);
        setUserSignupErrorMessage("Was not able to register you");
        setTimeout(() => {
          setUserSignupError(false);
          setUserSignupErrorMessage("");
        }, 2000);
      });
  };

  if (otpVerification) {
    return (
      <Modal
        className={classes.modal}
        open={openSignup}
        onClose={() => {
          setTimerValue(30);
          setOtpVerification(false);
          setEmail("");
          handleNavigationClose();
        }}
        closeAfterTransition
      >
        <Zoom in={openSignup}>
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
              <InputBox length={5} onChange={verifyOtp} />
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
  } else {
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

            {userSignupSuccess && (
              <Alert
                severity="success"
                style={{
                  width: "100%",
                }}
              >
                {userSignupSuccessMessage}
              </Alert>
            )}
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
              <GoogleLogin
                clientId="175559645991-3mrpajh4dnlmn3n0fltr6hasvs8pkcvo.apps.googleusercontent.com"
                render={(renderProps) => (
                  <GoogleButton
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img src="/google svg.svg" alt="google icon" />
                    Continue with Google
                  </GoogleButton>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />

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
}

const mapDispatchToProps = (dispatch) => ({
  userSignup: (payload) => dispatch(userSignup(payload)),
  userSignupVerify: (payload) => dispatch(userSignupVerify(payload)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
