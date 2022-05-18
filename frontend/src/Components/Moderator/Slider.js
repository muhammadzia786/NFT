import React, { Component, useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import "../Slider/Slider.css";
import zzz from "../../images/zz.png";
import Slid from "../Slider/Slid";
import { AdminContext } from "../AdminContext";
import axios from "axios";
import twitter from "../../images/twitter.png";

const SliderBubble = () => {
  const adminContext = useContext(AdminContext);
  const [Dataa, setAllData] = useState([]);

  const getData = async () => {
    try {
      let Data = await axios.get("http://localhost:5000/LandingPage/getData");
      if (Data.status === 200) {
        setAllData(Data?.data?.data?.moderatorData);
        console.log("Moderatordata", Data);
      }
    } catch (err) {
      console.log("ModeratorDaata", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    initialSlide: 0,
    slidesToScroll: 1,
    centerMode: false,
    // centerMode: true,

    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true,

          centerMode: false,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1.5,
          centerMode: true,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 436,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,

          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log("DataaDsdsd", Dataa);
  return (
    <>
      <div className="ourteam_container">
        <h1 id="moderator" className="team">
          {" "}
          Our Moderator
        </h1>
        {}
      </div>
      <div className="mainslider">
        <Slider {...settings}>
          {Dataa?.map((item, index) => {
            return (
              <div>
                <Card style={{ height: "400px" }}>
                  <Card.Img
                    style={{ minHeight: "200px" }}
                    variant="top"
                    src={item?.img}
                  />
                  <Card.Body className="crdtxt">
                    <Card.Title className="desig">{item?.mtitle}</Card.Title>
                    <Card.Text className="lorempara">
                      {item?.mDescription}
                    </Card.Text>
                    {/* <h3 variant="primary" className="read"> 
                      Read more
                    </h3> */}
                  </Card.Body>
                  <div className="icondiv">
                    <img
                      style={{ width: "30px", height: "30px" }}
                      className="icon"
                      src={twitter}
                    />
                  </div>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default SliderBubble;
