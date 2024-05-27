import React from "react";
import "./aboutPage.scss";
import man from "../../assets/AboutPage/man.png";
import like from "../../assets/AboutPage/like.svg";
import fire from "../../assets/AboutPage/fire.svg";
import pepe from "../../assets/AboutPage/pepe.png";
import { useScroll } from "./../../routes/ScrollProvider";
const AboutPage = () => {
  const { aboutRef } = useScroll();
  return (
    <div className="aboutPage" ref={aboutRef}>
      <div className="aboutPage__container">
        <h1 className="aboutPage__title">About</h1>
        <div className="aboutPage__textBlock">
          <p className="aboutPage__textBlock-text">
            Balloons Land is a city where balloons live and every corner of this
            metropolis is important in its own way. The new Mayor of the city
            has come to develop it and he started with the local currency
            $BALLOON, which will be used throughout the ecosystem of this
            colorful place. New and old residents of Balloons Land will be able
            to use $BALLOON in mini-games where the player can win more $BALLOON
            tokens, $TON, NFT and more. Also in the metropolis is developing and
            technical department, where each user will be able to use high
            quality technology to trade tokens on $TON, as well as for holding a
            certain amount of $BALLOON analysts of our city will guide you. This
            is just a small part of what the new Mayor is going to realize. Be
            the first to be a part of Balloons Land!
            <img src={man} alt="" className="aboutPage__textBlock-img" />
          </p>
        </div>
        <img src={like} alt="" className="aboutPage__like" />
        <img src={fire} alt="" className="aboutPage__fire" />
        <img src={pepe} alt="" className="aboutPage__pepe" />
      </div>
    </div>
  );
};

export default AboutPage;
