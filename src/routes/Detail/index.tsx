import React from 'react'
import { Image } from 'antd'
import dayjs from 'dayjs'
import './index.less'
import img from '../../assets/images/avatar.png'
import { useParams } from 'react-router-dom'
import { useNFTDetail } from '../../utils/http/apis'

export type DetailType = {
  id: number,
  nid: number,
  name: string,
  count: number,
  imageUrl: string,
  address: string,
  createdAt: number,
  createdBy: string
}

const NFTDetail = () => {
  const { id } = useParams()
  const { data: detail, loading, error } = useNFTDetail('2')

  return (
    <div className="content">
      <Image width={260} height={260} src={img}/>
      <div className="title-container">
        <span className="detail-title">{detail?.data.name}</span>
        <span className="NFT-number">{detail?.data.id}</span>
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
          <p>{detail?.data.createdBy}</p>
          <p>{dayjs(detail?.data.createdAt).format('YYYY-MM-DD HH:mm:ss')}</p>
          <p className="info-border">
            {detail?.data.address}
          </p>
          <p>Serati Ma</p>
          <p>0x52B4702909382a229D2CgfA529b098B25513ed03</p>
        </div>
      </div>
    </div>
  )
}

export default NFTDetail
