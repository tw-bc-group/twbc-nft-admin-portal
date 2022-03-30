import React, { useState } from 'react'
import { Button, Divider, Image, Input, Modal } from 'antd'

import './index.less'
import img from '../../assets/images/woman.png'
import { httpInstance } from '../../utils/http'

type TransferNFTProps = {
  type: 'link' | 'primary'
  inDetail: boolean
}

const TransferNFT = (props: TransferNFTProps) => {
  const { type, inDetail } = props
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [enableTransfer, setEnableTransfer] = useState(true)
  const [address, setAddress] = useState('')
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleTransfer = () => {
    setLoading(true)

    httpInstance
      .post('/nft/transfer', { id: 1, address })
      .then((res) => {
        setLoading(false)
        setIsModalVisible(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const checkAndSetWalletAddress = (event: any) => {
    const inputAddress = event.target.value
    if (inputAddress) {
      setEnableTransfer(false)
    } else {
      setEnableTransfer(true)
    }
    setAddress(inputAddress)
  }

  return (
    <>
      <Button type={type} onClick={showModal}>
        Transfer
      </Button>

      <Modal
        title="Transfer"
        visible={isModalVisible}
        onCancel={handleCancel}
        centered
        footer={
          <Button
            disabled={enableTransfer}
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleTransfer}
          >
            Transfer
          </Button>
        }
      >
        {!inDetail && (
          <>
            <div className="info-container">
              <Image width={50} height={50} src={img} />
              <div className="NFT-info">
                <p className="NFT-name">Crypto Punk</p>
                <p className="NFT-id">#1</p>
              </div>
            </div>
            <Divider />
          </>
        )}

        <p>Destination Wallet Address</p>
        <Input
          onChange={checkAndSetWalletAddress}
          placeholder="e.g 0x1ed3...or destination.eth"
          value={address}
        />
      </Modal>
    </>
  )
}

export default TransferNFT
