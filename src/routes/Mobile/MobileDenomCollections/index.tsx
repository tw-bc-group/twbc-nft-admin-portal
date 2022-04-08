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

import { BackIconCustom } from '../MobileNFTDetail'

const CollectionItem = (item: NFTItemInDenom & { denomId?: string }) => {
  const handleClickCollection = () => {
    sessionStorage.setItem('detailInfo', JSON.stringify(item))
  }
  return (
    <Col className="itemCard">
      <Link to={`/mobile/denom/${item?.denomId}/collections/${item?.no}`}>
        <Image
          onClick={handleClickCollection}
          src={undefined}
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

const MobileDenomCollections = () => {
  const { denomId } = useParams()
  const { data: list = [], loading } = useNFTsListInDenom(denomId)
  const denomInfo = JSON.parse(sessionStorage.getItem('denomInfo') || '')

  return (
    <div className="collectionContainer">
      <div className="head">
        <BackIconCustom url="/mobile/denom" />
      </div>
      <div className="listContent">
        <Row justify="space-between">
          <Col>
            <Image
              src={undefined}
              width={100}
              height={100}
              className="denomImage"
              preview={false}
              placeholder={
                <Image
                  preview={false}
                  src={placeholderImage}
                  width={100}
                  height={100}
                />
              }
            />
          </Col>
          <Col span={16} className="denomInfo">
            <p>{denomInfo?.name}</p>
            <p>{denomInfo?.brand}</p>
          </Col>
          <Col className="denomDescription">{denomInfo?.description}</Col>
        </Row>

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
