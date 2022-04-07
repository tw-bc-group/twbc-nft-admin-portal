import React from 'react'
import { Image } from 'antd'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import './index.less'

import { useNFTDetail } from '../../utils/http/apis'
import { Denom, NFT } from '../List'

export type DetailType = {
  createdAt: string
  creator: Creator
  denom: Denom
  imageUrl: string
  nft: NFT
}

export type Creator = {
  name: string
  wallet: string
}

const NFTDetail = () => {
  const { denomId, id } = useParams()
  const { data: detail } = useNFTDetail(denomId, id)

  return (
    <div className="content">
      <Image width={260} height={260} src={detail?.imageUrl} />
      <div className="title-container">
        <span className="detail-title">{detail?.nft.name}</span>
        <span className="NFT-number">
          {`#${parseInt(detail?.nft.id.slice(-10) as string)}`}
        </span>
      </div>
      <div>
        <div className="info-name">
          <p>Created By</p>
          <p>Created Time</p>
          <p className="info-border">NFT Address</p>
          <p>Wallet Address</p>
        </div>
        <div className="info">
          <p>{detail?.creator.name}</p>
          <p>{dayjs(detail?.createdAt).format('YYYY-MM-DD HH:mm:ss')}</p>
          <p className="info-border">{detail?.nft.id}</p>
          <p>{detail?.creator.wallet}</p>
        </div>
      </div>
    </div>
  )
}

export default NFTDetail
