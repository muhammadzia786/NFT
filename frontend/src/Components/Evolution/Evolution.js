import React, { useContext, useEffect, useState } from "react";
import "../Evolution/Evolution.css";
import elips from "../../images/elips.png";
import child1 from "../../images/child1.png";
import child2 from "../../images/child2.png";
import child3 from "../../images/child3.png";
import { AdminContext } from "../AdminContext";
import Line from "../../images/Line.png";
import axios from "axios";

export default function Evolution() {
  const adminContext = useContext(AdminContext);
  console.log("Adminnft: ", adminContext);
  const [Data, setAllData] = useState({});

  const getData = async () => {
    try {
      let Data = await axios.get("http://localhost:5000/LandingPage/getData");
      if (Data.status === 200) {
        setAllData(Data.data);
        console.log("Evolutionapidata", Data.data);
      }
    } catch (err) {
      console.log("Evolutiondsd", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="evomain">
        {/* head */}
        {console.log("Evolutionapidata", Data.data)}
        <h1 id="evolution" className="evohead">
          Evolution Madness
        </h1>
        <div className="mainlinecontainer">
          <img src={Line} alt="line" className="line" />
          <img className="a" src={elips} alt="image" />
          <img className="b" src={elips} alt="image" />
          <img className="c" src={elips} alt="image" />
          {/* <img className="d" src={elips} alt="image" /> */}
        </div>
        {/* marker */}
        <div className="markerdiv">
          <div className="marcntdiv">
            {/* <span>
              <img className="elips" src={elips} />
            </span> */}

            <div className="child1">
              <h1 className="evoheadpara">{Data?.data?.Nft?.evoTitle}</h1>
              {/* <h1 className="evoheadpara">jhkjhjkh</h1> */}
              <p className="evopara">{Data?.data?.Nft?.evoText}</p>
            </div>
          </div>
          <div className="childimgdiv">
            <img className="childimg" src={Data?.data?.Nft?.Image1} />
            {/* <img className="childimg" src={child1} /> */}
          </div>
        </div>
        <div className="markerdivtwo">
          <div className="marcntdiv">
            <span className="testclass">
              {/* <img className="elips" src={elips} /> */}
            </span>

            <div className="childimgdivtwo">
              <img className="childimg" src={Data?.data?.Nft?.Image2} />
              {/* <img className="childimg" src={child1} /> */}
            </div>
          </div>
          <div className="childtwo">
            <h1 className="evoheadpara">{Data?.data?.Nft?.evo2Title} </h1>
            {/* <h1 className="evoheadpara">jhkjhjkh</h1> */}

            <p className="evoparatwo"> {Data?.data?.Nft?.evo2Text}</p>
          </div>
        </div>

        {/* 33333333333333 */}
        <div className="markerdivthree">
          <div className="marcntdiv">
            <div className="child1">
              <h1 className="evoheadpara">{Data?.data?.Nft?.evo3Title}</h1>
              {/* <h1 className="evoheadpara">jhkjhjkh</h1> */}

              <p className="evopara"> {Data?.data?.Nft?.evo2Text}</p>
            </div>
          </div>
          <div className="childimgdiv">
            <img className="childimg" src={Data?.data?.Nft?.Image3} />
            {/* <img className="childimg" src={child1} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
