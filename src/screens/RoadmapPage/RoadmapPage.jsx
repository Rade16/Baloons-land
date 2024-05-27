import React from "react";
import "./roadmapPage.scss";

import note1 from "../../assets/RoadmapPage/note1.png";
import note2 from "../../assets/RoadmapPage/note2.png";

import whale from "../../assets/RoadmapPage/whale.svg";
import star from "../../assets/RoadmapPage/star.svg";
import apple from "../../assets/RoadmapPage/apple.svg";

import Note from "../../components/Note/Note";
import { useScroll } from "./../../routes/ScrollProvider";
const RoadmapPage = () => {
  const { roadmapRef } = useScroll();
  return (
    <div className="roadmapPage" ref={roadmapRef}>
      <div className="roadmapPage__container">
        <h1 className="roadmapPage__title">Roadmap</h1>

        <div className="roadmapPage__notes">
          <div className="roadmapPage__note">
            <div className="roadmapPage__note-list">
              <Note text="1. Marketing Campaign" />
              <Note text="2. PresalE" />
              <Note text="3. Launch Token" />
              <Note text="4. Mini Games in Webapp TelEgram" />
            </div>
          </div>
          <div className="roadmapPage__note">
            <div className="roadmapPage__note-list">
              <Note text="5. NFT ColLection " />
              <Note text="6. Sniper Bot on Ton Network" />

              <Note text="7. BalLoons Land Labs " />
            </div>
          </div>
        </div>
        <img src={apple} alt="" className="roadmapPage__apple" />
        <img src={whale} alt="" className="roadmapPage__whale" />
        <img src={star} alt="" className="roadmapPage__star" />
      </div>
    </div>
  );
};

export default RoadmapPage;
