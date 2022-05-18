import React, { useContext } from "react";
import Mainpage from "../Navbar/Mainpage/Mainpage";
import Navbar from "../Navbar/Navbar";
import Evolution from "../Evolution/Evolution";
import Slider from "../Slider/Slider";
import Moderator from "../Moderator/Slider";
import Footer from "../Footer/Footer";
import { AdminContext } from "../AdminContext";
const LandingPage = () => {
  const adminContext = useContext(AdminContext);

  //   console.log("Adminsss: ", adminContext);
  return (
    <>
      {/* <div>hello </div> */}
      <Navbar />
      <Mainpage />
      <Evolution />
      <Slider />
      <Moderator />
      <Footer />
    </>
  );
};

export default LandingPage;
