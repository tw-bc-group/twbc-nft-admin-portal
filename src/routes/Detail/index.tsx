import React, {useEffect, useState} from "react";
import { Image } from "antd";
import "./index.less";
import img from "../../assets/images/avatar.png";
import {useParams} from "react-router-dom";
import {httpInstance} from "../../utils/http";

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

const useDetail = (id:string | undefined) => {
  const [detail, setDetail] = useState<DetailType | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setDetail(null)
    setError(null)
    httpInstance.get(`/nft/${id}`).then(res => {
      setLoading(false)
      setDetail(res.data.data)
    }).catch(err => {
      setLoading(false)
      setError(err)
    })
  }, [id])

  return {loading, error, detail}
}

const NFTDetail = () => {
  const { id } = useParams()
  const {loading, error, detail} = useDetail('2')

  return (
    <div className="content">
      <Image width={260} height={260} src={img} />
      <div className="title-container">
        <span className="detail-title">{detail?.name}</span>
        <span className="NFT-number">{detail?.id}</span>
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
          <p>{detail?.createdBy}</p>
          <p>{detail?.createdAt}</p>
          <p className="info-border">
            {detail?.address}
          </p>
          <p>Serati Ma</p>
          <p>0x52B4702909382a229D2CgfA529b098B25513ed03</p>
        </div>
      </div>
    </div>
  )
};

export default NFTDetail;
