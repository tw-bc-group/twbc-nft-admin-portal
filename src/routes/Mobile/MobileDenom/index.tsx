import React from 'react'
import './index.less'
import { isEmpty, map } from 'lodash'
import { Image } from 'antd'
import noItem from 'src/assets/images/noItem.svg'
import placeholderImage from 'src/assets/images/placeholderImage.png'
import { useDenomsList } from 'src/utils/http/apis'
import { LoadingProgress } from 'src/components/LoadingProgress'
import { Link } from 'react-router-dom'
import { DenomItem } from 'src/routes/Denoms/List'

import { CloseCustom } from '../MobileNFTList'
import { DenomFooter } from '../share/DenomFooter'

const NoDenomItem = () => {
  return (
    <div className="noItem">
      <img src={noItem} width={115} height={75} />
      <p>No Items Yet</p>
    </div>
  )
}

const DenomListItem = ({ name, no, brand, description, issuer }: DenomItem) => {
  const handleClickDenom = () => {
    sessionStorage.setItem(
      'denomInfo',
      JSON.stringify({
        name,
        brand,
        description,
        issuer
      })
    )
  }
  return (
    <div className="itemCard">
      <Link to={`/mobile/denom/${no}/collections`}>
        <Image
          onClick={handleClickDenom}
          src={undefined}
          width="100%"
          height={327}
          className="itemImage"
          preview={false}
          placeholder={
            <Image
              preview={false}
              src={placeholderImage}
              width="100%"
              height={327}
            />
          }
        />
      </Link>

      <div className="itemInfo">
        <p>{name}</p>
        <div className="creatorInfo">
          <span> {brand}</span>
        </div>
      </div>
    </div>
  )
}

const MobileDenom = () => {
  const { data: list = [], loading } = useDenomsList()

  return (
    <div className="denomContainer">
      <div className="head">
        <span>NFT</span>
        <CloseCustom />
      </div>
      {loading ? (
        <LoadingProgress />
      ) : (
        <div className="listContent">
          {isEmpty(list) ? (
            <NoDenomItem />
          ) : (
            map(list, (item) =>
              item.status ? <DenomListItem {...item} key={item.id} /> : null
            )
          )}
        </div>
      )}

      <DenomFooter />
    </div>
  )
}

export default MobileDenom
