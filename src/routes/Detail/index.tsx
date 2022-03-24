import React from "react";
import { Image } from "antd";
import "./index.less";
import img from "../../assets/images/avatar.png";

const NFTDetail = () => (
  <div className="content">
    <Image width={260} height={260} src={img} />
    <div className="title-container">
      <span className="detail-title">Broad Ape</span>
      <span className="NFT-number">#1</span>
    </div>
    <div>
      <div className="info-name">
        <p>Created By</p>
        <p>Created Time</p>
        <p className="info-border">NFT Address</p>
        <p>Owned by</p>
        <p>Wallet Address</p>
      </div>
      <div className="info">
        <p>Serati Ma</p>
        <p>2022-2-21 16:24</p>
        <p className="info-border">
          0x52B4702909382a229D2CgfA529b098B25513ed03
        </p>
        <p>Serati Ma</p>
        <p>0x52B4702909382a229D2CgfA529b098B25513ed03</p>
      </div>
    </div>
  </div>
);

export default NFTDetail;
