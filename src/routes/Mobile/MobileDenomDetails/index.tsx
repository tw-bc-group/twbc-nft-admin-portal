import React from 'react'
import './index.less'
import { Image } from 'antd'
import { useParams } from 'react-router-dom'
import placeholderImage from 'src/assets/images/placeholderImage.png'
import dayjs from 'dayjs'

import { MobileHeader } from '../share/MobileHeader'

interface InfoItemInfo {
  name: string
  info: string
}

const InfoItem = ({ name, info }: InfoItemInfo) => {
  return (
    <div className="infoItem">
      <p>{name || '--'}</p>
      <p>{info || '--'}</p>
    </div>
  )
}

const MobileDenomDetails = () => {
  const { denomId } = useParams()
  const detailInfo = JSON.parse(sessionStorage.getItem('detailInfo') || '')
  const denomInfo = JSON.parse(sessionStorage.getItem('denomInfo') || '')

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
          <span>立即获取</span>
        </div>
      </div>
    </div>
  )
}

export default MobileDenomDetails
