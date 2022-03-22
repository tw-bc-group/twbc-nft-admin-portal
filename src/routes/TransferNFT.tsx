import React, {useState} from 'react'
import {Button, Modal} from "antd";
import '../css/transferNFT.css'


const TransferNFT = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleTransfer = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
      setIsModalVisible(false)
    }, 3000);
  };

  const handleCancel = () => {
    setIsModalVisible(false)
  }


  return (
    <>
      <Button type="link" onClick={showModal} >
        Transfer
      </Button>
      <Modal title="Transfer"
             visible={isModalVisible}
             onCancel={handleCancel}
             footer={
               <Button key="submit" type="primary" loading={loading}
                       onClick={handleTransfer}>
                 Transfer
               </Button>}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      {/*<Breadcrumb>*/}
      {/*  <Breadcrumb.Item className="breadcrumb">*/}
      {/*    <Link to="/">List</Link>*/}
      {/*  </Breadcrumb.Item>*/}
      {/*  <Breadcrumb.Item className="breadcrumb">*/}
      {/*    <Link to="/detail">Detail</Link>*/}
      {/*  </Breadcrumb.Item>*/}
      {/*  <Breadcrumb.Item className="breadcrumb">*/}
      {/*    <Link to="/transfer">Transfer</Link>*/}
      {/*  </Breadcrumb.Item>*/}
      {/*</Breadcrumb>*/}
      {/*<p className="transfer-title">Transfer</p>*/}
      {/*<div className="image-container">*/}
      {/*  <div className="image"></div>*/}
      {/*  <span className="NFT-name">NFT Name</span>*/}
      {/*</div>*/}
      {/*<p>Address</p>*/}
      {/*<Link className="transfer-button" to="/transfer"><Button>Transfer</Button></Link>*/}
    </>
  )
}

export default TransferNFT
