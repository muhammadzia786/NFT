import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "../pages/css/login.css";
import { Box, Typography } from "@mui/material";
import LoadingProgressBar from "../Components/LoadingProgressBar";
import axios from "axios";
let baseUrl = "http://localhost:6000";
const SignUpFrom = () => {
  const navigate = useNavigate();
  const [sucessSignUp, setSucessSignUp] = useState(false);
  const [loader, setLoader] = useState(false);
  const [DataErrorEmail, setDataErrorEmail] = useState(false);
  const [DataErrorPassword, setDataErrorPassword] = useState(false);
  const [DataErrorConfirmPassword, setDataErrorConfirmPassword] =
    useState(false);
  const [Inputvalue, setInputValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue({ ...Inputvalue, [name]: value });
  };
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.trim());
  }

  const handleChangeClick = async (e) => {
    setLoader(true);
    e.preventDefault();
    if (
      !validateEmail(Inputvalue.email) ||
      Inputvalue.password === "" ||
      Inputvalue.confirmPassword === "" ||
      Inputvalue.confirmPassword !== Inputvalue.password
    ) {
      if (!validateEmail(Inputvalue.email)) {
        setDataErrorEmail(true);
      }
      if (Inputvalue.password === "") {
        setDataErrorPassword(true);
      }
      if (Inputvalue.confirmPassword === "") {
        setDataErrorConfirmPassword(true);
      }
      if (Inputvalue.confirmPassword !== Inputvalue.password) {
        console.log("hajdfiouagsd");
        setDataErrorConfirmPassword(true);
      }
    } else {
      console.log("correct  data is ", Inputvalue);

      axios
        .post(`http://localhost:5000/auth/signup`, {
          email: Inputvalue?.email,
          password: Inputvalue?.password,
        })
        .then((response) => {
          console.log("responseSIgnUp SignUp", response);
          if (response?.data) {
            setSucessSignUp(true);
            setLoader(false);

            const timer = setTimeout(() => {
              setSucessSignUp(false);
              navigate("/auth/login");
            }, 3000);

            return () => clearTimeout(timer);
          }
        });
      const language = "English";
    }

    console.log("dataa is email", Inputvalue.email);

    const timer = setTimeout(() => {
      setDataErrorEmail(false);
      setDataErrorPassword(false);
      setDataErrorConfirmPassword(false);
    }, 5000);

    return () => clearTimeout(timer);
  };

  return (
    <Box className="box_card_signup_login">
      <Box>
        <Box className="box_typo_adminDashboard">
          <Typography className="typo_adminDashboard">Sign Up </Typography>
        </Box>
        <Box>
          <Card
            sx={{ diaplay: "flex", textAlign: "center" }}
            className="card_signup_login"
          >
            {sucessSignUp === true ? (
              <div
                style={{
                  color: "green",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
                className="errormessage"
              >
                Sucessfully SignUp Check Your Mail
              </div>
            ) : (
              ""
            )}
            <form
              autoComplete="off"
              className="fooorm"
              // onSubmit={registerForm}
              action="/action_page.php"
            >
              <input
                style={{ marginBottom: "16px" }}
                className="registerinputFields"
                type="text"
                placeholder="Email Address"
                autoComplete="off"
                name="email"
                value={Inputvalue.email}
                // value={email}
                onChange={handlechange}
              />

              {DataErrorEmail === true ? (
                <div
                  style={{
                    color: "red",
                  }}
                  className="errormessage"
                >
                  Please Enter a valid Email
                </div>
              ) : (
                ""
              )}
              <input
                style={{ marginBottom: "15px" }}
                className="registerinputFields"
                type="password"
                placeholder="Password"
                autoComplete="off"
                name="password"
                value={Inputvalue.password}
                // value={password}

                onChange={handlechange}
              />

              {DataErrorPassword === true ? (
                <div style={{ color: "red" }} className="errormessage">
                  please enter password
                </div>
              ) : (
                ""
              )}
              <input
                className="registerinputFields"
                type="password"
                placeholder="Confirm Your Password"
                autoComplete="off"
                name="confirmPassword"
                // value={confirmPassword}
                value={Inputvalue.confirmPassword}
                onChange={handlechange}
                // onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                // onBlur={handleBlurConfirmPassord}
              />
              {/* {console.log(
            "passwordconfirmationError error value",
            Inputerror.passwordconfirmationError
          )} */}
              {DataErrorConfirmPassword === true ? (
                <div style={{ color: "red" }} className="errormessage">
                  confirm Password not match with password
                </div>
              ) : (
                ""
              )}

              <Box className="forBorder"> </Box>
              <NavLink to="/login">
                <button className=" btn_register" onClick={handleChangeClick}>
                  {/* {t("LoginPage.3")} */}
                  {loader ? <LoadingProgressBar /> : "Sign Up"}
                </button>
              </NavLink>
            </form>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpFrom;
