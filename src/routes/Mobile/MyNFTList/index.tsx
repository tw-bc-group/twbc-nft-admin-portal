import React from 'react'
import './index.less'
import { isEmpty, map } from 'lodash'
import { Image } from 'antd'
import noItem from 'src/assets/images/noItem.svg'
import placeholderImage from 'src/assets/images/placeholderImage.png'
import { useNFTList } from 'src/utils/http/apis'
import { NFTItem } from 'src/routes/List'
import { LoadingProgress } from 'src/components/LoadingProgress'

const NoNFTItem = () => {
  return (
    <div className="noItem">
      <img src={noItem} width={115} height={75} />
      <p>No Items Yet</p>
    </div>
  )
}

const NFTListItem = ({ nft, imgUrl, creator }: NFTItem) => {
  return (
    <div className="itemCard" key={nft.id}>
      <Image
        src={imgUrl}
        width="100%"
        height={327}
        className="itemImage"
        placeholder={
          <Image preview={false} src={placeholderImage} width="100%" />
        }
      />
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

export const MyNFTList = () => {
  const { data: list = [], loading } = useNFTList()

  return (
    <div className="listContainer">
      <div className="head">
        <span>My NFT</span>
      </div>
      {loading ? (
        <LoadingProgress />
      ) : (
        <div className="listContent">
          {isEmpty(list) ? (
            <NoNFTItem />
          ) : (
            map(list, (item) => <NFTListItem {...item} />)
          )}
        </div>
      )}
    </div>
  )
}
