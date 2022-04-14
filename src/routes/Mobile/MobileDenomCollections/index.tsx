import React from 'react'
import './index.less'
import { map } from 'lodash'
import { Col, Image, Row } from 'antd'
import placeholderImage from 'src/assets/images/placeholderImage.png'
import { useNFTsListInDenom } from 'src/utils/http/apis'
import { LoadingProgress } from 'src/components/LoadingProgress'
import close from 'src/assets/images/close.png'
import { Link, useParams } from 'react-router-dom'
import { NFTItemInDenom } from 'src/routes/Denoms/NFTs/List'

import { MobileHeader } from '../share/MobileHeader'

export interface denomInfoType {
  name: string
  description: string
  issuer: string
  brand: string
}

const CollectionItem = (item: NFTItemInDenom & { denomId?: string }) => {
  const handleClickCollection = () => {
    sessionStorage.setItem('detailInfo', JSON.stringify(item))
  }
  return (
    <Col className="itemCard">
      <Link to={`/mobile/denom/${item?.denomId}/collections/${item?.no}`}>
        <Image
          onClick={handleClickCollection}
          src={item?.resource.url}
          width="100%"
          height={163}
          className="itemImage"
          preview={false}
          placeholder={
            <Image
              preview={false}
              src={placeholderImage}
              width="100%"
              height={163}
            />
          }
        />
      </Link>

      <div className="itemInfo">
        <p>{item?.name}</p>
      </div>
    </Col>
  )
}

export const CloseCustom = () => {
  return (
    <span className="close">
      <img src={close} width={16} height={16} />
    </span>
  )
}

let denomInfo: denomInfoType | null = null

const MobileDenomCollections = () => {
  const { denomId } = useParams()
  const { data: list = [], loading } = useNFTsListInDenom(denomId)

  try {
    denomInfo = JSON.parse(sessionStorage.getItem('denomInfo') as string)
  } catch (e) {
    console.log(e)
  }

  return (
    <div className="collectionContainer">
      <MobileHeader goBackUrl="/mobile/denom" />
      <div className="listContent">
        <div className="denomInfo">
          <p>{denomInfo?.name}</p>
          <p>{denomInfo?.brand}</p>
        </div>
        <Col className="denomDescription">{denomInfo?.description}</Col>

        <p className="totalNumber">共有{list.length}件藏品</p>
        {loading ? (
          <LoadingProgress />
        ) : (
          <Row justify="space-between">
            {map(list, (item) => (
              <CollectionItem denomId={denomId} {...item} key={item.id} />
            ))}
          </Row>
        )}
      </div>
    </div>
  )
}

export default MobileDenomCollections
