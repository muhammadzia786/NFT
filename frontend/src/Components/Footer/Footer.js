import React from "react";
import "../Footer/Footer.css";
import twitter from "../../images/twitter.png";
import fb from "../../images/fb.png";
import vcc from "../../images/vec.png";
import Button from "@mui/material/Button";
export default function Footer() {
  return (
    <div className="forrm">
      {/* header */}
      <h1 id="contact" className="contact">
        Contact us
      </h1>
      <div className="paradiv">
        <p className="ftpara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta
          consectetur egestas. Etiam volutpat tristique mi, sed aliquet metus
          facilisis efficitur. Etiam tristique, metus a varius dignissim,
        </p>
      </div>
      {/* Form */}
      <div className="formme">
        <div className="formic">
          <div className="emailin">
            {/* 1 */}
            <div className="two">
              <h6 className="name">First Name *</h6>
              <input className="form-control forms" />
            </div>
            {/* 2 */}
            <div className=" two">
              <h6 className="name">Last Name *</h6>
              <input className="form-control forms" />
            </div>
          </div>
          {/* 3 */}
          <div className="emailin">
            <div>
              <h6 className="name">Email *</h6>
              <input className="form-control forms" />
            </div>
            {/* 4 */}
            <div>
              <h6 className="name">Your Business *</h6>
              <input className="form-control forms" />
            </div>
          </div>

          {/* 5 */}
          <div className="msgdiv">
            <div className="msgdd">
              <h6 className="name">Message *</h6>
            </div>
            <div className="test1">
              <div className="innertest1">
                <input className="form-control formtext" />
              </div>
              <div className="innertest2">
                <Button className="btn_Submit" variant="contained">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="vectdiv">
        {/* <img  src={vector} /> */}
        <div className="vector">
          <div>
            <h1 className="teamall"> Team Bubbles </h1>
          </div>
          {/* icons */}
          <div className="icondiv">
            <img className="icon" src={vcc} />
            <img className="icon" src={twitter} />
            <img className="icon" src={fb} />
          </div>
        </div>
      </div>
    </div>
  );
}
