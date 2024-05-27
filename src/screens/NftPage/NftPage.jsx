import React from "react";
import "./nftPage.scss";

import man from "../../assets/NftPage/man.png";
import icon1 from "../../assets/NftPage/icon1.png";
import icon2 from "../../assets/NftPage/icon2.png";
import icon3 from "../../assets/NftPage/icon3.png";
import icon4 from "../../assets/NftPage/icon4.png";
import { useScroll } from "./../../routes/ScrollProvider";
const NftPage = () => {
  const { nftRef } = useScroll();
  return (
    <div className="nftPage" ref={nftRef}>
      <div className="nftPage__container">
        <h1 className="nftPage__title">NFT</h1>

        <div className="nftPage__imagesBlock">
          <img src={man} alt="" className="nftPage__imagesBlock-man" />
          <img src={icon1} alt="" className="nftPage__imagesBlock-icon1" />
          <img src={icon2} alt="" className="nftPage__imagesBlock-icon2" />
          <img src={icon3} alt="" className="nftPage__imagesBlock-icon3" />
          <img src={icon4} alt="" className="nftPage__imagesBlock-icon4" />
        </div>
      </div>
    </div>
  );
};

export default NftPage;
