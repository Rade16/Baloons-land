import React from "react";
import "./linksPage.scss";
import { useScroll } from "./../../routes/ScrollProvider";
const LinksPage = () => {
  const { linksRef } = useScroll();
  return (
    <div className="linksPage" ref={linksRef}>
      <div className="linksPage__container">
        <h1 className="linksPage__title">
          Join our
          <br />
          community
        </h1>

        <div className="linksPage__links">
          <div className="linksPage__links-btn">
            <p>Telegram</p>
          </div>

          <div className="linksPage__links-btn">
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
