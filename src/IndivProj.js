import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import WidthContainer from "./components/WidthContainer";

export const IndivProj = () => {
  const stats = [
    {
      name: "Save the forests",
      description:
        "This project seeks to raise awareness for the deforestation and the earth is at risk of global warming.",
      clicks: 5,
      likes: 10,
      price: "0.0001 eth",
    },
    {
      name: "Help these children",
      description:
        "This project hopes to raise awareness for children in Kenya and the proceeds will help provide them with meals.",
      clicks: 21,
      likes: 3,
      price: "0.0023 eth",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [currStat, setCurrStat] = useState(null);

  const changeModalState = (name, clicks, likes, price) => {
    if (!showModal) {
      setCurrStat([name, clicks, likes, price]);
      setShowModal(true);
    }
  };

  useEffect(() => {}, []);

  return (
    <div
      style={{
        backgroundColor: "#282c34",
        height: "2500px",
        color: "white",
        paddingTop: "1px",
        paddingBottom: "100px",
      }}
    >
      <WidthContainer>
        <br></br>
        <h1>SAVE THE FORESTS</h1>
        <br></br>
        <img className="photo" src={require("./images/forest.jpg")} />
        <div style={{ height: "20px" }}></div>
        <hr></hr>
        <h2 style={{ color: "#ffc107" }}>Project Summary:</h2>
        <br></br>
        <h2>
          This project seeks to raise awareness for the deforestation and
          protect forests.
        </h2>
        <br></br>
        <hr></hr>
        <h2 style={{ color: "#ffc107" }}>Project Description</h2>
        <h3 style={{ padding: "40px" }}>
          Forests can thus help in reducing the risks of flooding because it
          lessens the speed of water flow from the hills and mountains into
          streams and rivers. It also helps the earth to absorb the water and
          release it steadily. Therefore, stopping deforestation will result in
          decreased vulnerabilities to flooding. Tropical forests help regulate
          regional rainfall and prevent both floods and droughts. Reducing
          deforestation is not only a beneficial action against global warming,
          it also can make important contributions to saving biodiversity and
          supporting sustainable development. A tonne of CO₂ has the same impact
          on the climate whether it comes from fossil fuels or forest loss, so
          halting deforestation is a necessary part of tackling climate change.
          ... The amount of warming is tightly linked to the amount of CO₂ in
          the atmosphere.
        </h3>
        <br></br>
        <hr></hr>
        <br></br>
        <h2 style={{ color: "#ffc107" }}>Goal: 15,000 USD</h2>
        <br></br>
        <hr></hr>
        <h2 style={{ color: "#ffc107" }}>NFTs available</h2>
        <div style={{ height: "300px" }}>
          <Image src={require("./images/RainforestNFTs.png")}></Image>
          <h4>Get an NFT if you donate at least 10 USD</h4>
        </div>
        <hr></hr>
        <br></br>
        <Button className="mx-1 py-3 px-3" variant="primary" size="lg">
          Donate now
        </Button>
      </WidthContainer>
    </div>
  );
};

export default IndivProj;
