import React from 'react'
import {Breadcrumb, Button} from "antd";
import {Link} from "react-router-dom";
import '../css/transferNFT.css'


const TransferNFT = () => (
  <div className="content">
    <Breadcrumb>
      <Breadcrumb.Item className="breadcrumb">
        <Link to="/">List</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item className="breadcrumb">
        <Link to="/detail">Detail</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item className="breadcrumb">
        <Link to="/transfer">Transfer</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
    <p className="transfer-title">Transfer</p>
    <div className="image-container">
      <div className="image"></div>
      <span className="NFT-name">NFT Name</span>
    </div>
    <p>Address</p>
    <Link className="transfer-button" to="/transfer"><Button>Transfer</Button></Link>
  </div>
)

export default TransferNFT
