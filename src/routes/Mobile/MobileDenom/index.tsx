import React from 'react'
import './index.less'
import { isEmpty, map } from 'lodash'
import { Image } from 'antd'
import noItem from 'src/assets/images/noItem.svg'
import placeholderImage from 'src/assets/images/placeholderImage.png'
import { useDenomsList } from 'src/utils/http/apis'
import { LoadingProgress } from 'src/components/LoadingProgress'
import homeActive from 'src/assets/images/home-active.png'
import homeNoActive from 'src/assets/images/home-no-active.png'
import mineNoActive from 'src/assets/images/mine-no-active.png'
import mineActive from 'src/assets/images/mine-active.png'
import { Link, useLocation } from 'react-router-dom'
import { DenomItem } from 'src/routes/Denoms/List'

import { CloseCustom } from '../MobileNFTList'

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

export const DenomFooter = () => {
  const location = useLocation()

  return (
    <div className="footer">
      <div>
        <Link to="/mobile/denom">
          <img
            src={
              location.pathname.startsWith('/mobile/denom')
                ? homeActive
                : homeNoActive
            }
          />
        </Link>
      </div>
      <div>
        <Link to="/mobile/nfts">
          <img
            src={
              location.pathname.startsWith('/mobile/nfts')
                ? mineActive
                : mineNoActive
            }
          />
        </Link>
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
