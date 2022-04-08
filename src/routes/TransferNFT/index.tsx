import React, { useState } from 'react'
import { Button, Divider, Image, Input, Modal, message } from 'antd'

import './index.less'
import { httpInstance } from '../../utils/http'

type TransferNFTProps = {
  type: 'link' | 'primary'
  inDetail: boolean
  no: string
  name: string
  url: string
  dno: string | undefined
}

const TransferNFT = (props: TransferNFTProps) => {
  const { type, inDetail, no, name, url, dno } = props
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
      .post(`/denoms/${dno}/collections/${no}/apply`, {
        name: name,
        email: address,
        salesTime: '2022-04-08T00:30:04.408Z'
      })
      .then((res) => {
        setLoading(false)
        setIsModalVisible(false)
        message.success('NFT Mint Success!')
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
        Mint NFT
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
            Mint NFT
          </Button>
        }
      >
        {!inDetail && (
          <>
            <div className="info-container">
              <Image width={50} height={50} src={url} />
              <div className="NFT-info">
                <p className="NFT-name">{name}</p>
                <p className="NFT-id">{no}</p>
              </div>
            </div>
            <Divider />
          </>
        )}

        <p>Destination User Account</p>
        <Input
          onChange={checkAndSetWalletAddress}
          placeholder="user email"
          value={address}
        />
      </Modal>
    </>
  )
}

export default TransferNFT
