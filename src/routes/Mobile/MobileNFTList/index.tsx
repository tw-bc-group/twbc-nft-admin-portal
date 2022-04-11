import React from 'react'
import './index.less'
import { isEmpty, map, orderBy } from 'lodash'
import { Image } from 'antd'
import noItem from 'src/assets/images/noItem.svg'
import placeholderImage from 'src/assets/images/placeholderImage.png'
import { useMyNFTList } from 'src/utils/http/apis'
import { LoadingProgress } from 'src/components/LoadingProgress'
import close from 'src/assets/images/close.png'
import { Link } from 'react-router-dom'

import { DenomFooter } from '../share/DenomFooter'

const NoNFTItem = () => {
  return (
    <div className="noItem">
      <img src={noItem} width={115} height={75} />
      <p>No Items Yet</p>
    </div>
  )
}

const NFTListItem = ({ denom, nft, imageUrl, subject }: any) => {
  return (
    <div className="itemCard">
      <Link to={`/mobile/nfts/detail/${subject.no}/${nft.no}`}>
        <Image
          src={imageUrl}
          width="100%"
          height={327}
          className="itemImage"
          preview={false}
          placeholder={
            <Image preview={false} src={placeholderImage} width="100%" />
          }
        />
      </Link>

      <div className="itemInfo">
        <p>藏品名称：{nft.name}</p>
        <div className="creatorInfo">
          <span> 主题 </span>
          <span> {subject?.name}</span>
        </div>
        <div className="creatorInfo">
          <span> 品牌方 </span>
          <span> {subject?.brand}</span>
        </div>
      </div>
    </div>
  )
}

export const CloseCustom = () => {
  return (
    <span className="close">
      <img src={close} width={16} height={16} />
    </span>
  )
}

const MobileNFTList = () => {
  const { data: list = [], loading } = useMyNFTList(
    'adam.wong@thoughtworks.com'
  )

  return (
    <div className="listContainer">
      <div className="head">
        <span>My NFT</span>
        <CloseCustom />
      </div>
      {loading ? (
        <LoadingProgress />
      ) : (
        <div className="listContent">
          {isEmpty(list) ? (
            <NoNFTItem />
          ) : (
            map(orderBy(list, ['createdAt'], ['desc']), (item) => {
              const data = {
                subject: item.collection.subject,
                imageUrl: item.collection.resource.url,
                denom: item.collection.subject,
                nft: item.collection,
                createdAt: item.createdAt
              }
              return <NFTListItem {...data} key={item.no} />
            })
          )}
        </div>
      )}
      <DenomFooter />
    </div>
  )
}

export default MobileNFTList
