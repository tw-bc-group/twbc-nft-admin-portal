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
    <div>
      <span className= "detail-title">NFT NAME</span>
      <Link to="/transfer"><Button>Transfer</Button></Link>
      <p>ID</p>
      <p>Address</p>
      <p>Created Time</p>
      <p>Created By</p>
    </div>
  </div>
)

export default NFTDetail
