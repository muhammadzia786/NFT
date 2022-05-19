import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../AdminContext";

import "./addProductPage.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { Button, Input } from "@mui/material";
import upload from "./upload.png";
import SendIcon from "@mui/icons-material/Send";
// const Input = styled("input")({
//   display: "none",
// });
const Adminpanel = () => {
  // sherry
  const [cData, setCData] = useState({});
  const [carouselData, setCarouselData] = useState([]);
  // sherry
  // Moderator
  const [mData, setMData] = useState({});

  const [moderatorData, setModeratorData] = useState([]);
  // Moderator
  console.log("cData", cData);
  const [nftData, setNftData] = useState({});
  console.log("nftData", nftData);

  const [images, setImages] = useState([]);
  const [desc, setDesc] = useState([]);
  const [frontImage, setFrontImage] = useState();
  const navigate = useNavigate();
  const adminContext = useContext(AdminContext);
  //   const [title, setTitle] = useState("");

  useEffect(() => {}, [carouselData, moderatorData, frontImage]);
  console.log("images>>>>>>>>>>>>>>", images);
  const removeImage = (id, index) => {
    // console.log("imagessss", carouselData);
    // console.log("willdeletes", id, index);
    var temp = carouselData.splice(index, 1);
    // console.log("willdeleted", carouselData);
    // const temp = images.filter((data) => data.id !== id);
    setImages(temp);
  };
  const MremoveImage = (id, index) => {
    // console.log("imagessss", carouselData);
    // console.log("willdeletes", id, index);
    var temp = moderatorData.splice(index, 1);
    // console.log("willdeleted", carouselData);
    // const temp = images.filter((data) => data.id !== id);
    setImages(temp);
  };

  const handleSubmit = async (e) => {
    // navigate("/");

    console.log("images??: ", frontImage);
    e.preventDefault();
    let a = e.target.title.value;
    let b = e.target.text.value;
    let c = e.target.roadTitle.value;
    let d = e.target.roadText.value;
    let g = e.target.nftTitle.value;
    let f = e.target.nftText.value;
    let url = frontImage;
    // create image url onSubmit
    // let imageFile = e.target.Image.files[0];
    // console.log("imageFile???", imageFile);

    let obj = {
      // userid: "62820ff8576a0146834ec60c",
      title: a,
      text: b,
      roadTitle: c,
      roadText: d,
      nftTitle: g,
      nftText: f,
      image: url,
      carousel: carouselData,
      moderatorData: moderatorData,
      Nft: nftData,
    };
    await axios
      .patch("http://localhost:5000/LandingPage/updateData", obj)
      .then((res) => {
        console.log("updateData dataaa", res.data);
      })
      .catch((err) => console.log("update LandingPage data Error", err));
    console.log("imagesjkhjkh??: ", obj);

    adminContext.ChangeText(obj);

    navigate("/");
    // console.log("vvdgdfgd", a, b);
    // console.log("values: ", adminContext);
    // AdminContext.Title(a, b);
  };
  const handleDesc = (e) => {
    // let a = e.target.ctitle.value;
    console.log("values: ", e.target.value);
    let x = [];
    x.push(e.target.value);
    setDesc(x);
    console.log("valuesss: ", x);
  };

  // sherry
  const handleInput = (e) => {
    console.log("vajjjlues: ", e.target.value, e.target.name);
    setCData({ ...cData, [e.target.name]: e.target.value });
  };
  // moderator
  const handleMInput = (e) => {
    console.log("vajjjlues: ", e.target.value, e.target.name);
    setMData({ ...mData, [e.target.name]: e.target.value });
  };

  const handleImages = (e) => {
    // cloudiniary
    console.log("imagecloud", e);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "mukxnp4h");
    console.log("uploadimagecloud", formData);

    axios
      .post(
        "https://api.cloudinary.com/v1_1/comsat-lahore/image/upload",
        formData
      )
      .then((res) => {
        console.log("response==", res.data.secure_url);
        setCData({
          ...cData,

          img: res.data.secure_url,
        });
        console.log("clouddasd", res);
      });

    // cloudiniary
    // setCData({
    //   ...cData,
    //   file: e.target.files[0],
    //   img: URL.createObjectURL(e.target.files[0]),
    // });
  };
  const handleMimages = (e) => {
    console.log("imagecloud", e);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "mukxnp4h");
    console.log("uploadimagecloud", formData);

    axios
      .post(
        "https://api.cloudinary.com/v1_1/comsat-lahore/image/upload",
        formData
      )
      .then((res) => {
        setMData({
          ...mData,

          img: res.data.secure_url,
        });
        console.log("Moderatorclouddasd", res);
      });
    // setMData({
    //   ...mData,
    //   file: e.target.files[0],
    //   img: URL.createObjectURL(e.target.files[0]),
    // });
  };
  const handleFrontimage = (e) => {
    console.log("Frontimagecloud", e);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "mukxnp4h");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/comsat-lahore/image/upload",
        formData
      )
      .then((res) => {
        setFrontImage(res.data.secure_url);
        console.log("Moderatorclouddasd", res.data.secure_url);
      });
  };

  const AddDataCarousel = (e) => {
    e.preventDefault();
    console.log("cDataaa", cData);
    setCarouselData([...carouselData, cData]);
    setCData({});
  };
  // moderator
  const AddModeratorCarousel = (e) => {
    e.preventDefault();
    // console.log("cDataaa", cData);
    setModeratorData([...moderatorData, mData]);
    setMData({});
  };
  // moderator end
  console.log("carouselData", carouselData);
  // sherry
  const handleEvolution = (e) => {
    console.log("nftj: ", e.target.value, e.target.name);

    setNftData({ ...nftData, [e.target.name]: e.target.value });
  };
  const handleEvolutionimage = (e) => {
    console.log("ziaa", e.target.files[0]);
    let imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "mukxnp4h");
    console.log("SDasd", formData);

    axios
      .post(
        "https://api.cloudinary.com/v1_1/comsat-lahore/image/upload",
        formData
      )
      .then((res) => {
        console.log("handleEvolutionimage: ", res.data.secure_url);

        setNftData({
          ...nftData,

          [e.target.name]: res.data.secure_url,
        });
      })
      .catch((err) => console.log("errorhandleEvolutionimage: ", err));
    // console.log("handleEvolutionimage: ", e.target.files[0]);

    // setNftData({
    //   ...nftData,
    //   // file: e.target.files[0],
    //   // img: URL.createObjectURL(e.target.files[0]),
    //   [e.target.name]: URL.createObjectURL(e.target.files[0]),
    // });
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <div>{/* <h1> Admin Dashboard</h1> */}</div>
        <div>
          <h2 className="whowe common_whowe">Main Image</h2>

          <input
            accept="image/*"
            type="file"
            id="file-input"
            name="Image"
            onChange={handleFrontimage}
          />
        </div>
        {frontImage != null ? (
          <>
            <div className="show_coin_div shadow">
              <div className="coin_show_close" onClick={() => setFrontImage()}>
                <AiFillCloseCircle />
              </div>
              <img
                style={{
                  height: "150px",
                  width: "150px",
                  objectFit: "contain",
                }}
                src={frontImage}
              />
            </div>
          </>
        ) : (
          ""
        )}
        <br />
        <div>
          <h2 className="whowe common_whowe"> Who we Are</h2>
          <h4 className="common_whowe"> Title</h4>
        </div>

        <input
          className="nftTextinput"
          type="text"
          name="title"
          placeholder={adminContext.title}
        />

        <p>
          {" "}
          <h4 className="common_whowe"> Text</h4> <br />{" "}
          <textarea className="nftTextinputArea" type="text" name="text" />
        </p>
        <br />
        <div>
          <div>
            <h2 className="whowe common_whowe"> The Roadmap</h2>
            <h4 className="common_whowe"> Title</h4>
          </div>

          <input
            className="nftTextinput"
            type="text"
            name="roadTitle"
            placeholder={adminContext.roadTitle}
          />

          <p>
            {" "}
            <h4 className="common_whowe"> Text</h4> <br />{" "}
            <textarea
              className="nftTextinputArea"
              type="text"
              name="roadText"
            />
          </p>
        </div>
        <br />
        <div>
          <div>
            <h2 className="whowe common_whowe"> An NFT with a purpose</h2>
            <h4 className="common_whowe"> Title</h4>
          </div>

          <input
            className="nftTextinput"
            type="text"
            name="nftTitle"
            placeholder={adminContext.nftTitle}
          />

          <p>
            {" "}
            <h4 className="common_whowe"> Text</h4> <br />{" "}
            <textarea className="nftTextinputArea" type="text" name="nftText" />
          </p>
        </div>
        <br />
        <div>
          <h2 className="whowe common_whowe"> Evolution Madness</h2>
          <div>
            <div>
              {" "}
              <h4 className="common_whowe"> Title1</h4>
            </div>
            <input
              className="nftTextinput"
              type="text"
              name="evoTitle"
              placeholder={adminContext.roadTitle}
              onChange={handleEvolution}
            />
            <p>
              {" "}
              <h4 className="common_whowe"> Text1</h4> <br />{" "}
              <textarea
                className="nftTextinputArea"
                type="text"
                name="evoText"
                onChange={handleEvolution}
              />
            </p>
            <input
              className="evoImageButton"
              accept="image/*"
              type="file"
              id="file-input"
              name="Image1"
              onChange={handleEvolutionimage}
            />
          </div>
          <br />
          <div>
            <div>
              {" "}
              <h4 className="common_whowe"> Title2</h4>
            </div>
            <input
              className="nftTextinput"
              type="text"
              name="evo2Title"
              placeholder={adminContext.roadTitle}
              onChange={handleEvolution}
            />
            <p>
              <h4 className="common_whowe"> Text2</h4> <br />{" "}
              <textarea
                className="nftTextinputArea"
                type="text"
                name="evo2Text"
                onChange={handleEvolution}
              />
            </p>
            <input
              accept="image/*"
              type="file"
              id="file-input"
              name="Image2"
              onChange={handleEvolutionimage}
            />{" "}
          </div>
          <br />
          <div>
            <div>
              {" "}
              <h4 className="common_whowe"> Title3</h4>
            </div>
            <input
              className="nftTextinput"
              type="text"
              name="evo3Title"
              placeholder={adminContext.roadTitle}
              onChange={handleEvolution}
            />
            <p>
              {" "}
              <h4 className="common_whowe"> Text3</h4> <br />{" "}
              <textarea
                className="nftTextinputArea"
                type="text"
                name="nft3Text"
                onChange={handleEvolution}
              />
            </p>
            <input
              accept="image/*"
              type="file"
              id="file-input"
              name="Image3"
              onChange={handleEvolutionimage}
            />
            {/* <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                name="Image3"
                onChange={handleEvolutionimage}
              />
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label> */}
          </div>
        </div>
        <br />

        <div className="image-fields-wrap">
          <h2 className="whowe common_whowe">
            {" "}
            <h4 className="common_whowe"> Our Teams' Data</h4>
          </h2>
          {/* <button onClick={AddDataCarousel}> Add</button> */}
          <Button onClick={AddDataCarousel} variant="outlined">
            Add
          </Button>

          <div className="image-wrap">
            <div className="choose-image">
              <div>
                <div className="button-upload">
                  <br />
                  <div>
                    <h4 className="common_whowe"> Enter Designation</h4>
                  </div>
                  <input
                    className="nftTextinput"
                    type="text"
                    name="ctitle"
                    value={cData?.ctitle ?? ""}
                    onChange={handleInput}
                  />
                  <br />
                  <div>
                    <h4 className="common_whowe"> Description</h4>
                  </div>
                  <textarea
                    className="nftTextinputArea"
                    type="text"
                    name="cDescription"
                    value={cData?.cDescription ?? ""}
                    onChange={handleInput}
                  />
                  <br />
                  <input type="file" name="file" onChange={handleImages} />
                </div>
              </div>
            </div>
            {console.log("carouselData===", carouselData)}
            <div className="show-image coins_adds_preview">
              {carouselData.map((data, index) => {
                return (
                  <>
                    <div className="show_coin_div shadow">
                      {console.log("remove img", data, index)}
                      <div
                        className="coin_show_close"
                        onClick={() => removeImage(data.img, index)}
                      >
                        <AiFillCloseCircle />
                      </div>
                      <img
                        style={{
                          height: "150px",
                          width: "150px",
                          objectFit: "contain",
                        }}
                        src={data?.img}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <br />
        {/* {carouselData.map((data, i) => (
          <div key={i} style={{ paddingTop: "50px" }}>
            <p>{data?.ctitle}</p>
            <p>{data?.cDescription}</p>
            <img src={data?.img} alt="" width={100} height={100} />
          </div>
        ))} */}

        {/* moderator */}
        <div className="image-fields-wrap">
          <h2 className="whowe common_whowe">
            <h4 className="common_whowe"> Upload Moderators' Data</h4>
          </h2>
          {/* <button onClick={AddModeratorCarousel}> Add</button> */}
          <Button onClick={AddModeratorCarousel} variant="outlined">
            Add
          </Button>

          <div className="image-wrap">
            <div className="choose-image">
              <div>
                <div className="button-upload">
                  <br />
                  <div>
                    {" "}
                    <h4 className="common_whowe"> Enter Designation</h4>
                  </div>
                  <input
                    className="nftTextinput"
                    type="text"
                    name="mtitle"
                    value={mData?.mtitle ?? ""}
                    onChange={handleMInput}
                  />
                  <br />
                  <div>
                    {" "}
                    <h4 className="common_whowe"> Description</h4>
                  </div>
                  <textarea
                    className="nftTextinputArea"
                    type="text"
                    name="mDescription"
                    value={mData?.mDescription ?? ""}
                    onChange={handleMInput}
                  />
                  <br />
                  <input type="file" name="file" onChange={handleMimages} />
                </div>
              </div>
            </div>

            <div className="show-image coins_adds_preview">
              {console.log("asdsdsaddasd", moderatorData)}

              {moderatorData.map((data, index) => {
                return (
                  <>
                    <div className="show_coin_div shadow">
                      {console.log("remove img", data, index)}
                      <div
                        className="coin_show_close"
                        onClick={() => MremoveImage(data.img, index)}
                      >
                        <AiFillCloseCircle />
                      </div>
                      <img
                        style={{
                          height: "150px",
                          width: "150px",
                          objectFit: "contain",
                        }}
                        src={data?.img}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <br />

        <br />
        {/* <button type="submit"> Submit</button> */}
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default Adminpanel;
