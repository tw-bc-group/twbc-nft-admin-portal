import React, {useState} from 'react'
import {Button, Divider, Image, Input, Modal} from "antd";
import '../css/transferNFT.css'
import img from "../images/Rectangle2.png";


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
             centered
             footer={
               <Button disabled key="submit" type="primary" loading={loading}
                       onClick={handleTransfer}>
                 Transfer
               </Button>}
      >
        <div className="info-container">
          <Image
            width={50}
            height={50}
            src={img}
          />
          <div className="NFT-info">
            <p className="NFT-name">Crypto Punk</p>
            <p className="NFT-id">#1</p>
          </div>
        </div>
        <Divider/>
        <p>Destination Wallet Address</p>
        <Input placeholder="e.g 0x1ed3...or destination.eth"/>
      </Modal>

    </>
  )
}

export default TransferNFT
