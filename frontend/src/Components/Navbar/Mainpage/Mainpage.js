import React, { useContext, useEffect, useState } from "react";
import main from "../../../images/nmbr1.png";
import child from "../../../images/child.png";
import "../Mainpage/Main.css";
import { AdminContext } from "../../AdminContext";
import axios from "axios";

const Mainpage = () => {
  const [Data, setAllData] = useState({});

  const getData = async () => {
    try {
      let Data = await axios.get("http://localhost:5000/LandingPage/getData");
      if (Data.status === 200) {
        setAllData(Data.data);
        console.log("apidata", Data.data);
      }
    } catch (err) {
      console.log("dsd", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const adminContext = useContext(AdminContext);
  console.log("Admin: ", adminContext);

  return (
    <div id="mainPage">
      {/* img */}
      {console.log("hgh", Data.data)}
      <div>
        <img className="mainimg" src={Data?.data?.image} />
        {/* <img className="mainimg" src={main} /> */}
      </div>
      {/* Heading */}
      <div className="conten">
        <h1 className="whowe"> {Data.data?.title}</h1>
        {/* para */}
        <p className="para">{Data.data?.text}</p>
        {/* head 2 */}
        <h1 id="Roadmap" className="whowe">
          {Data.data?.roadTitle}
        </h1>
        {/* para */}
        <p className="para">{Data.data?.roadText}</p>
        {/* img2  */}
        <div>
          <img className="child" src={child} />
        </div>
      </div>
      {/* 2nd part */}
      <div className="nftdiv">
        <h1 className="nfthead">{Data.data?.nftTitle}</h1>
        <p className="paratwo">
          {Data.data?.nftText}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta
          consectetur egestas. Etiam volutpat tristique mi, sed aliquet metus
          facilisis efficitur. Etiam tristique, metus a varius dignissim,Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nam porta
          consectetur egestas. Etiam volutpat tristique mi, sed aliquet metus
          facilisis efficitur. Etiam tristique, metus a varius dignissim, */}
        </p>
      </div>
    </div>
  );
};
export default Mainpage;
