import React, { Component, useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import "../Slider/Slider.css";
import zzz from "../../images/zz.png";
import Slid from "../Slider/Slid";
import { AdminContext } from "../AdminContext";
import axios from "axios";

// export default class SliderBubble extends Component {
//   static adminContext = AdminContext;

//   render() {
//     // const adminContext = useContext(AdminContext);
//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       arrows: false,
//       slidesToShow: 3,
//       initialSlide: 0,
//       slidesToScroll: 1,
//       centerMode: false,
//       centerMode: true,

//       responsive: [
//         {
//           breakpoint: 1590,
//           settings: {
//             slidesToShow: 2.2,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: false,
//             centerMode: true,
//             // centerPadding: "10%",
//           },
//         },

//         {
//           breakpoint: 1240,
//           settings: {
//             slidesToShow: 2.2,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: false,
//             centerMode: true,
//           },
//         },
//         {
//           breakpoint: 1100,
//           settings: {
//             slidesToShow: 2.2,
//             slidesToScroll: 1,
//             initialSlide: 2,
//             centerMode: false,
//           },
//         },
//         {
//           breakpoint: 690,
//           settings: {
//             slidesToShow: 1,
//             centerMode: true,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 436,
//           settings: {
//             slidesToShow: 1,
//             centerMode: false,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };

//     return (
//       <>
//         {console.log("Dsdsd", this.adminContext)}
//         <div className="ourteam_container">
//           <h1 className="team"> Our Team</h1>
//           {}
//         </div>
//         <div className="mainslider">
//           <Slider {...settings}>
//             <div>
//               <Card>
//                 <Card.Img variant="top" src={zzz} />
//                 <Card.Body className="crdtxt">
//                   <Card.Title className="desig">Designation</Card.Title>
//                   <Card.Text className="lorempara">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
//                     porta consectetur egestas. Etiam volutpat tristique mi, sed
//                     aliquet
//                   </Card.Text>
//                   <h3 variant="primary" className="read">
//                     Read more
//                   </h3>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div>
//               <Card>
//                 <Card.Img variant="top" src={zzz} />
//                 <Card.Body className="crdtxt">
//                   <Card.Title className="desig">Designation</Card.Title>
//                   <Card.Text className="lorempara">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
//                     porta consectetur egestas. Etiam volutpat tristique mi, sed
//                     aliquet
//                   </Card.Text>
//                   <h3 variant="primary" className="read">
//                     Read more
//                   </h3>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div>
//               <Card>
//                 <Card.Img variant="top" src={zzz} />
//                 <Card.Body className="crdtxt">
//                   <Card.Title className="desig">Designation</Card.Title>
//                   <Card.Text className="lorempara">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
//                     porta consectetur egestas. Etiam volutpat tristique mi, sed
//                     aliquet
//                   </Card.Text>
//                   <h3 variant="primary" className="read">
//                     Read more
//                   </h3>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div>
//               <Card>
//                 <Card.Img variant="top" src={zzz} />
//                 <Card.Body className="crdtxt">
//                   <Card.Title className="desig">Designation</Card.Title>
//                   <Card.Text className="lorempara">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
//                     porta consectetur egestas. Etiam volutpat tristique mi, sed
//                     aliquet
//                   </Card.Text>
//                   <h3 variant="primary" className="read">
//                     Read more
//                   </h3>
//                 </Card.Body>
//               </Card>
//             </div>
//           </Slider>
//           <>{/* <Slid /> */}</>
//         </div>
//       </>
//     );
//   }
// }

// import React from "react";
const SliderBubble = () => {
  const adminContext = useContext(AdminContext);
  const [Data, setAllData] = useState({});

  const getData = async () => {
    try {
      let Data = await axios.get("http://localhost:5000/LandingPage/getData");
      if (Data.status === 200) {
        setAllData(Data.data);
        console.log("Teamapidata", Data.data.data.carousel);
      }
    } catch (err) {
      console.log("Evolutiondsd", err);
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
        breakpoint: 570,
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
  console.log("Dsdsd", Data?.data?.carousel);
  return (
    <>
      <div className="ourteam_container">
        <h1 id="ourteam" className="team">
          {" "}
          Our Team
        </h1>
        {}
      </div>
      <div className="mainslider">
        <Slider {...settings}>
          {Data?.data?.carousel.map((item, index) => {
            return (
              <div>
                <Card style={{ height: "400px" }}>
                  <Card.Img
                    style={{ maxHeight: "200px" }}
                    variant="top"
                    src={item?.img}
                  />
                  <Card.Body className="crdtxt">
                    <Card.Title className="desig">{item?.ctitle}</Card.Title>
                    <Card.Text className="lorempara">
                      {item?.cDescription}
                    </Card.Text>
                    {/* <h3 variant="primary" className="read">
                      Read more
                    </h3> */}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
          {/* 
          <div>
            <Card>
              <Card.Img variant="top" src={zzz} />
              <Card.Body className="crdtxt">
                <Card.Title className="desig">Designation</Card.Title>
                <Card.Text className="lorempara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  porta consectetur egestas. Etiam volutpat tristique mi, sed
                  aliquet
                </Card.Text>
                <h3 variant="primary" className="read">
                  Read more
                </h3>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img variant="top" src={zzz} />
              <Card.Body className="crdtxt">
                <Card.Title className="desig">Designation</Card.Title>
                <Card.Text className="lorempara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  porta consectetur egestas. Etiam volutpat tristique mi, sed
                  aliquet
                </Card.Text>
                <h3 variant="primary" className="read">
                  Read more
                </h3>
              </Card.Body>
            </Card>
          </div> */}
        </Slider>
        <>{/* <Slid /> */}</>
      </div>
    </>
  );
};

export default SliderBubble;
