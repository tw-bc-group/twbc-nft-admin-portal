import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.less'
import { Button, Image, message } from 'antd'
import { useParams } from 'react-router-dom'
import placeholderImage from 'src/assets/images/placeholderImage.png'
import dayjs from 'dayjs'
import { NFTItemInDenom } from 'src/routes/Denoms/NFTs/List'
import { useMintNFT } from 'src/hooks/useMintNFT'

import { MobileHeader } from '../share/MobileHeader'
import { denomInfoType } from '../MobileDenomCollections'

interface InfoItemInfo {
  name?: string
  info?: string
}

const InfoItem = ({ name, info }: InfoItemInfo) => {
  return (
    <div className="infoItem">
      <p>{name || '--'}</p>
      <p>{info || '--'}</p>
    </div>
  )
}

let detailInfo: NFTItemInDenom | null = null
let denomInfo: denomInfoType | null = null

const MobileDenomDetails = () => {
  const { denomId, nftId } = useParams()
  const navigate = useNavigate()

  try {
    detailInfo = JSON.parse(sessionStorage.getItem('detailInfo') as string)
    denomInfo = JSON.parse(sessionStorage.getItem('denomInfo') as string)
  } catch (e) {
    console.log(e)
  }

  const handleMintSuccess = () => {
    message.success('NFT Mint Success!')
    navigate('/mobile/nfts')
  }

  const handleMintError = () => {
    message.error('NFT Mint Error!')
  }

  const { runMintNFT, loading } = useMintNFT({
    onSuccess: handleMintSuccess,
    onError: handleMintError,
    denomId: denomId || '',
    nftId: nftId || ''
  })

  const handleMintNFT = () => {
    runMintNFT({
      email: 'adam.wong@thoughtworks.com',
      name: detailInfo?.name || '',
      salesTime: new Date().toISOString()
    })
  }

  return (
    <div className="denomDetailContainer">
      <div className="NFTDetails">
        <MobileHeader
          goBackUrl={`/mobile/denom/${denomId}/collections`}
          className="head"
        />

        <Image
          src={detailInfo?.resource?.url}
          width="100%"
          height={327}
          className="itemImage"
          preview={false}
          placeholder={
            <Image preview={false} src={placeholderImage} width="100%" />
          }
        />
        <div className="info">
          <p className="name">{detailInfo?.name}</p>
          <div className="brand">{denomInfo?.brand}</div>
          <div className="denomDetails">
            <InfoItem name="藏品故事" info={denomInfo?.description} />
            <InfoItem name="品牌方" info={denomInfo?.brand} />
            <InfoItem name="发行方" info={denomInfo?.issuer} />
            <InfoItem
              name="发行时间"
              info={dayjs(detailInfo?.createdAt).format('YYYY-MM-DD')}
            />
          </div>
        </div>
        <div className="footer">
          <Button
            type="primary"
            loading={loading}
            className="mintButton"
            onClick={handleMintNFT}
            disabled={!detailInfo?.issueRemain}
          >
            {detailInfo?.issueRemain ? '立即获取' : '没有剩余'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MobileDenomDetails
