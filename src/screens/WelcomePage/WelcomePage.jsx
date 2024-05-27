import React from "react";
import "./welcomePage.scss";
import CheckPoint from "./../../components/CheckPoint/CheckPoint";
import { useScroll } from "./../../routes/ScrollProvider";
import logo from "./../../assets/WelcomePage/logo.svg";
import title from "./../../assets/WelcomePage/title.svg";

const WelcomePage = () => {
  const { aboutRef, roadmapRef, minigamesRef, nftRef, linksRef } = useScroll();

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="welcomePage">
      <div className="welcomePage__container">
        <div className="welcomePage__header">
          <img src={logo} alt="" className="welcomePage__header-logo" />
          <div className="welcomePage__header-buttons">
            <div className="welcomePage__header-btn">
              <p>Telegram</p>
            </div>
            <div className="welcomePage__header-btn">
              <p>Twitter</p>
            </div>
          </div>
        </div>
        <img src={title} alt="" className="welcomePage__title" />
        <div className="welcomePage__checkPoints">
          <div
            className="welcomePage__checkPoint-about"
            onClick={() => scrollTo(aboutRef)}
          >
            <CheckPoint text="About" />
          </div>

          <div
            className="welcomePage__checkPoint-roadmap"
            onClick={() => scrollTo(roadmapRef)}
          >
            <CheckPoint text="Roadmap" />
          </div>
          <div
            className="welcomePage__checkPoint-nft"
            onClick={() => scrollTo(nftRef)}
          >
            <CheckPoint text="NFT" />
          </div>
          <div
            className="welcomePage__checkPoint-minigames"
            onClick={() => scrollTo(minigamesRef)}
          >
            <CheckPoint text="Minigames" />
          </div>
          <div
            className="welcomePage__checkPoint-contacts"
            onClick={() => scrollTo(linksRef)}
          >
            <CheckPoint text="Contacts" />
          </div>
        </div>
      </div>
      <div className="welcomePage__blur"></div>
    </div>
  );
};

export default WelcomePage;
