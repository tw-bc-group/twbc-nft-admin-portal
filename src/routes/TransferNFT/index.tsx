import React, { useState } from 'react'
import { Button, Divider, Image, Input, Modal, message } from 'antd'
import './index.less'
import { useMintNFT } from 'src/hooks/useMintNFT'

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
  const [enableTransfer, setEnableTransfer] = useState(true)
  const [address, setAddress] = useState('')

  const handleMintSuccess = () => {
    setIsModalVisible(false)
    message.success('NFT Mint Success!')
  }

  const handleMintError = () => {
    message.error('NFT Mint Error!')
  }

  const { runMintNFT, loading } = useMintNFT({
    onSuccess: handleMintSuccess,
    onError: handleMintError,
    denomId: dno || '',
    nftId: no
  })

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleTransfer = () => {
    runMintNFT({
      name: name,
      email: 'adam.wong@thoughtworks.com',
      salesTime: new Date().toISOString()
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
