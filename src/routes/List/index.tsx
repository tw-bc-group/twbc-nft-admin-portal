import React, {useEffect, useState} from "react";
import { Radio, Table } from "antd";
import "./index.less";
import { NFT, transferredNFTList } from "../../mockData";
import { Link } from "react-router-dom";
import monkey from "../../assets/images/monkey.png";
import woman from "../../assets/images/woman.png";
import { ColumnsType } from "antd/lib/table/interface";
import TransferNFT from "../TransferNFT";
import {httpInstance} from "../../utils/http";

const NFTColumns: ColumnsType<NFT> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (value: string, record: any, index: number) => (
      <Link className="nft-name" to="/detail">
        <img src={index < 5 ? monkey : woman} alt="" width={30} height={30} />
        <span>{value}</span>
      </Link>
    ),
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "NFT address",
    dataIndex: "address",
    key: "nftAddress",
  },
  {
    title: "Created Time",
    dataIndex: "createdTime",
    key: "createdTime",
    sorter: true,
  },
];

const ownedNFTColumns: ColumnsType<NFT> = [
  ...NFTColumns,
  {
    title: "Action",
    key: "action",
    render: () => <TransferNFT type="link" inDetail={false} />,
  },
];

const transferredColumns: ColumnsType<NFT> = [
  ...NFTColumns,
  {
    title: "Transferred Time",
    dataIndex: "transferredTime",
    key: "transferredTime",
    sorter: true,
  },
];

const useNFTList = () => {
  const [list, setList] = useState<NFT[]>([])

  useEffect(() => {
    httpInstance.get('/nft').then(
      res => {
        const details = res.data.data.details
        const list = details.map( (detail:any) => detail.key = detail.id)
        setList(list)
      }
    ).catch(err => {
      console.log(err)
    })
  }, [])

  return list
}

const NFTList = () => {
  const [tab, setTab] = useState("owned");
  const ownedNFTList = useNFTList()

  return (
    <div className="list-container">
      <Radio.Group onChange={(e) => setTab(e.target.value)} value={tab}>
        <Radio.Button value="owned">Owned</Radio.Button>
        <Radio.Button value="transferred">Transferred</Radio.Button>
      </Radio.Group>
      <Table
        dataSource={tab === "owned" ? ownedNFTList : transferredNFTList}
        columns={tab === "owned" ? ownedNFTColumns : transferredColumns}
        className="nft-table"
      />
    </div>
  );
};

export default NFTList;
