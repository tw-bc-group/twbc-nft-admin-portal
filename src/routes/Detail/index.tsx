import React from 'react'
import { Image } from 'antd'
import { useParams } from 'react-router-dom'
import './index.less'

import img from '../../assets/images/avatar.png'
import { useNFTDetail } from '../../utils/http/apis'
import { Denom, NFT } from '../List'

export type DetailType = {
  createdAt: string
  creator: Creator
  denom: Denom
  imgUrl: string
  nft: NFT
}

export type Creator = {
  name: string
  wallet: string
}

const NFTDetail = () => {
  const { id } = useParams()
  const { data: detail } = useNFTDetail(id)
  console.log(detail)

  return (
    <div className="content">
      <Image width={260} height={260} src={img} />
      <div className="title-container">
        <span className="detail-title">{detail?.nft.name}</span>
        <span className="NFT-number">#1</span>
      </div>
      <div>
        <div className="info-name">
          <p>Created By</p>
          <p>Created Time</p>
          <p className="info-border">NFT Address</p>
          <p>Owned by</p>
          <p>Wallet Address</p>
        </div>
        <div className="info">
          <p>{detail?.creator.name}</p>
          {/*<p>{dayjs(detail?.createdAt).format('YYYY-MM-DD HH:mm:ss')}</p>*/}
          <p>{detail?.createdAt}</p>
          <p className="info-border">NFT Address</p>
          <p>Serati Ma</p>
          <p>{detail?.creator.wallet}</p>
        </div>
      </div>
    </div>
  )
}

export default NFTDetail
