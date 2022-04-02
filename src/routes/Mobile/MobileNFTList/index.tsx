import React from 'react'
import './index.less'
import { isEmpty, map } from 'lodash'
import { Image } from 'antd'
import noItem from 'src/assets/images/noItem.svg'
import placeholderImage from 'src/assets/images/placeholderImage.png'
import { useNFTList } from 'src/utils/http/apis'
import { NFTItem } from 'src/routes/List'
import { LoadingProgress } from 'src/components/LoadingProgress'
import close from 'src/assets/images/close.png'
import { Link } from 'react-router-dom'

const NoNFTItem = () => {
  return (
    <div className="noItem">
      <img src={noItem} width={115} height={75} />
      <p>No Items Yet</p>
    </div>
  )
}

const NFTListItem = ({ denom, nft, imageUrl, creator }: NFTItem) => {
  return (
    <div className="itemCard">
      <Link to={`/mobile/nfts/detail/${denom.id}/${nft.id}`}>
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
        <p>{nft.name}</p>
        <div className="creatorInfo">
          <span> Created by</span>
          <span> {creator?.name}</span>
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
  const { data: list = [], loading } = useNFTList()

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
            map(list, (item) => <NFTListItem {...item} key={item.nft.id} />)
          )}
        </div>
      )}
    </div>
  )
}

export default MobileNFTList
