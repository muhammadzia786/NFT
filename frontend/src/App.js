import "./App.css";

import LandingPage from "../src/Components/LandingPage/LandingPage";
import Admin from "../src/Components/Admin/Adminpanel";
import Dashboard from "../src/Components/ResponsiveDrawer";
import SignInForm from "./pages/SignInForm";
import SignUpFrom from "./pages/SignUpFrom";

import { AdminContext } from "./Components/AdminContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import axios from "axios";

import React, { useEffect } from "react";
function App() {
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [roadTitle, setRoadTitle] = React.useState("");
  const [roadText, setRoadText] = React.useState("");
  const [nftTitle, setNftTitle] = React.useState("");
  const [nftText, setNftText] = React.useState("");
  const [UserToken, setUserToken] = React.useState("");

  const [carousel, setCarousel] = React.useState([]);
  const [nftData, setNftData] = React.useState();
  const [image, setImage] = React.useState(null);
  const [Data, setAllData] = React.useState({});
  const userToken = localStorage?.getItem("token");
  console.log("userToken", userToken);

  const setToken = (obj) => {
    console.log("token==?", obj);

    setUserToken(obj);
  };
  const ChangeText = (obj) => {
    setTitle(obj.title);
    setText(obj.text);
    setRoadTitle(obj.roadTitle);
    setRoadText(obj.roadText);
    setNftTitle(obj.nftTitle);
    setNftText(obj.nftText);
    setImage(obj.image);
    setCarousel(obj.carousel);
    setNftData(obj.Nft);
  };
  const getData = async () => {
    try {
      let Data = await axios.get("http://localhost:5000/LandingPage/getData");
      if (Data.status === 200) {
        setAllData(Data.data);
        console.log("appjssapidata", Data.data);
      }
    } catch (err) {
      console.log("dsd", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Router>
      <AdminContext.Provider
        value={{
          title,
          text,
          roadTitle,
          roadText,
          nftTitle,
          nftText,
          image,
          carousel,
          nftData,
          UserToken,
          setToken,
          ChangeText,
        }}
      >
        <div className="App"></div>
        <Routes>
          {userToken ? (
            <>
              <Route path="/" exact element={<LandingPage />}></Route>
              <Route path="/Dashboard" exact element={<Dashboard />}></Route>
              <Route path="/auth/login" exact element={<LandingPage />}></Route>
              {/* <Route path="/auth/signup" exact element={<SignUpFrom />}></Route> */}
            </>
          ) : (
            <>
              <Route path="/" exact element={<LandingPage />}></Route>
              <Route path="/Dashboard" exact element={<LandingPage />}></Route>
              <Route path="/auth/login" exact element={<SignInForm />}></Route>
              {/* <Route
                path="/auth/signup"
                exact
                element={<LandingPage />}
              ></Route> */}
            </>
          )}
          {/* <Route path="/admin" exact element={<Admin />}></Route> */}
        </Routes>
      </AdminContext.Provider>
    </Router>
  );
}

export default App;
