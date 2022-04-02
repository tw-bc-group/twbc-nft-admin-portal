import React, { useState } from 'react'
import './index.less'
import { Image } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useNFTDetail } from 'src/utils/http/apis'
import { LoadingProgress } from 'src/components/LoadingProgress'
import { Link, useParams } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import placeholderImage from 'src/assets/images/placeholderImage.png'
import copy from 'src/assets/images/copy.png'

import { CloseCustom } from '../MobileNFTList'

export const BackIconCustom = () => {
  return (
    <Link to="/mobile/nfts">
      <span className="backIcon">
        <LeftOutlined />
      </span>
    </Link>
  )
}

const MobileNFTDetail = () => {
  const { denomId, id } = useParams()
  const [copied, setCopied] = useState<boolean>(false)

  const { data: detail, loading } = useNFTDetail(denomId, id)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div className="detailContainer">
      {loading ? (
        <LoadingProgress />
      ) : (
        <div className="NFTDetails">
          {copied && <div className="copied">Address copied</div>}
          <div className="head">
            <BackIconCustom />
            <CloseCustom />
          </div>
          <Image
            src={detail?.imageUrl}
            width="100%"
            height={327}
            className="itemImage"
            preview={false}
            placeholder={
              <Image preview={false} src={placeholderImage} width="100%" />
            }
          />
          <div className="info">
            <p className="name">{detail?.nft.name}</p>
            <div className="creator">
              <span>created by</span>
              <span>{detail?.creator.name}</span>
            </div>
            <div className="address">
              <p>NFT Address</p>
              <div>
                <span>{detail?.nft.id}</span>
                <CopyToClipboard
                  text={detail?.nft.id || ''}
                  onCopy={handleCopy}
                >
                  <img src={copy} width={16} height={16} />
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNFTDetail
