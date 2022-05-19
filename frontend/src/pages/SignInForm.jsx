import React, { useEffect, useState, useContext } from "react";
import Card from "@mui/material/Card";
import { NavLink, useNavigate } from "react-router-dom";
import "../pages/css/login.css";
import axios from "axios";
import LoadingProgressBar from "../Components/LoadingProgressBar";
import { AdminContext } from "../Components/AdminContext";
import { Box, Typography } from "@mui/material";
const SignInForm = () => {
  const navigate = useNavigate();
  const adminContext = useContext(AdminContext);
  const [DataErrorEmail, setDataErrorEmail] = useState(false);
  const [DataErrorPassword, setDataErrorPassword] = useState(false);
  const [ErrorNotUser, setErrorNotUser] = useState(false);
  const [ErrorInvalidCredential, setErrorInvalidCredential] = useState(false);
  const [loginSucess, setLoginSucess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [DataErrorConfirmPassword, setDataErrorConfirmPassword] =
    useState(false);
  const [Inputvalue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const token = localStorage.getItem("token");
  console.log("token", token);

  const renderDashboard = () => {
    if (token !== null) {
      navigate("/Dashboard");
      adminContext.setToken(token);
      console.log("token in singinin fomr token==?", token);
    }
  };

  useEffect(() => {
    renderDashboard();
  }, [token]);

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
    console.log("input caluesd", Inputvalue);
    if (
      !validateEmail(Inputvalue.email) ||
      Inputvalue.password === "" ||
      Inputvalue.confirmPassword === ""
    ) {
      if (!validateEmail(Inputvalue.email)) {
        setDataErrorEmail(true);
      }
      if (Inputvalue.password === "") {
        setDataErrorPassword(true);
        //   setErrorMessage("Please enter Password");
      }
    } else {
      const language = "English";
      console.log("correct  data is ", Inputvalue);

      axios
        .post(`http://localhost:5000/auth/login`, {
          email: Inputvalue?.email,
          password: Inputvalue?.password,
        })
        .then((response) => {
          console.log("responseSignin login", response);
          if (response?.data?.message === "Successfull Login") {
            setLoginSucess(true);
            localStorage.setItem("token", response?.data?.token);
            if (response?.data?.token) {
              renderDashboard();
            }

            const timer = setTimeout(() => {
              setLoginSucess(false);
              setLoader(false);
            }, 2000);

            return () => clearTimeout(timer);
          }
        })
        .catch((error) => {
          console.log("responselogin error", error);
          if (error?.response?.data === "User does not exist") {
            setErrorNotUser(true);
            setLoader(false);
          } else {
            setErrorInvalidCredential(true);
            setLoader(false);
          }
        });
    }

    console.log("dataa is email", Inputvalue.email);

    const timer = setTimeout(() => {
      // setDataError(false);
      //   setErrorRole(false);
      setDataErrorEmail(false);
      setDataErrorPassword(false);
      setDataErrorConfirmPassword(false);
      setErrorNotUser(false);
      setErrorInvalidCredential(false);
      // setLoginSucess(false);
    }, 5000);

    return () => clearTimeout(timer);
  };

  return (
    <Box className="box_card_signup_login">
      <Box>
        <Box className="box_typo_adminDashboard">
          <Typography className="typo_adminDashboard">
            {" "}
            Admin DashBoard
          </Typography>
          <Typography className="typo_adminDashboard"> Login</Typography>
        </Box>
        <Box>
          <Card
            sx={{ diaplay: "flex", textAlign: "center" }}
            className="card_signup_login"
          >
            {ErrorNotUser === true ? (
              <div
                style={{
                  color: "red",
                  marginBottom: "10px",
                }}
                className="errormessage"
              >
                User does not exist
              </div>
            ) : ErrorInvalidCredential === true ? (
              <div
                style={{
                  color: "red",
                  marginBottom: "10px",
                }}
                className="errormessage"
              >
                Invalid Credentials
              </div>
            ) : (
              ""
            )}
            {loginSucess ? (
              <div
                style={{
                  color: "green",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
                className="errormessage"
              >
                login Sucessfully
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

              {/* <NavLink to="/login"> */}
              <button className=" btn_register" onClick={handleChangeClick}>
                {/* {t("LoginPage.3")} */}
                {loader ? <LoadingProgressBar /> : "Login"}
              </button>
              {/* </NavLink> */}
            </form>
            {/* 
            <Typography>
              Don't have an account?{" "}
              <NavLink to="/auth/signup">Sign up</NavLink>
            </Typography> */}
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default SignInForm;
