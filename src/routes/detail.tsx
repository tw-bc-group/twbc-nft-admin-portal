import React from 'react'
import {Breadcrumb, Button} from "antd";
import {Link} from "react-router-dom";
import '../css/detail.css'

const NFTDetail = () => (
  <div className="content">
    <Breadcrumb>
      <Breadcrumb.Item className="breadcrumb">
        <Link to="/">List</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item className="breadcrumb">
        <Link to="/transfer">Detail</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
    <div className="NFTimage"></div>
    <div className="title-container">
      <p className="detail-title">NFT NAME</p>
      <Link className="transfer-button" to="/transfer"><Button>Transfer</Button></Link>
    </div>
    <div>
      <div className="info-name">
        <p>ID</p>
        <p>Address</p>
        <p>Created Time</p>
        <p>Created By</p>
      </div>
      <div className="info">
        <p>12345678</p>
        <p>0xs21awwer214mfd093141</p>
        <p>2022-2-20</p>
        <p>Admin username</p>
      </div>
    </div>
  </div>
)

export default NFTDetail
