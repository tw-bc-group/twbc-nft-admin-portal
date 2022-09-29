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

        <p>Destination User Account:</p>
        <p>请注意：</p>
        <p>
          1.当前产品为试用阶段，未开放账号注册。试用Mint功能请用"adam.wong@thoughtworks.com"。Mint完成后，可以在mobile页面查看已Mint的NFT。
        </p>
        <p>
          2.完成Mint后，可以在
          <a target="_blank" href="https://explorer.testnet.bianjie.ai">
            https://explorer.testnet.bianjie.ai
          </a>
          测试网的浏览器里就可以看到这个交易。上链操作一般需要5秒左右。
        </p>

        <Input
          onChange={checkAndSetWalletAddress}
          placeholder="Email address, eg: adam.wong@thoughtworks.com"
          value={address}
        />
      </Modal>
    </>
  )
}

export default TransferNFT
