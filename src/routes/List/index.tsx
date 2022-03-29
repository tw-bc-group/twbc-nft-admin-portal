import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "./index.less";
import { Link } from "react-router-dom";
import { ColumnsType } from "antd/lib/table/interface";
import TransferNFT from "../TransferNFT";
import { getNFTList } from "../../utils/http/apis";

interface Denom {
  id: string;
  name: string;
}

interface NFT {
  id: string;
  name: string;
}

export interface NFTItem {
  denom: Denom;
  nft: NFT;
  imgUrl: string;
  createdAt: string;
}

const renderNFTName = ({ id, name }: any) => {
  const idCount = parseInt(id.slice(-10));
  return `${name} [#${idCount}]`;
};

const NFTColumns: ColumnsType<NFTItem> = [
  {
    title: "素材",
    dataIndex: ["nft", "name"],
    render: (value: string, record: NFTItem, index: number) => (
      <Link className="nft-name" to="/detail">
        <img src={record.imgUrl} alt="" width={90} height={90} />
      </Link>
    ),
    width: 110,
  },
  {
    title: "NFT名称",
    dataIndex: ["nft", "name"],
    render: (value: string, record: NFTItem, index: number) => (
      <Link className="nft-name" to="/detail">
        <span>{renderNFTName(record.nft)}</span>
      </Link>
    ),
  },
  {
    title: "NFT编号",
    dataIndex: ["nft", "id"],
    ellipsis: true,
  },
  {
    title: "主题名称",
    dataIndex: ["denom", "name"],
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
    sorter: true,
  },
];

const ownedNFTColumns: ColumnsType<NFTItem> = [
  ...NFTColumns,
  {
    title: "Action",
    key: "action",
    width: 90,
    render: () => <TransferNFT type="link" inDetail={false} />,
  },
];

const transferredColumns: ColumnsType<NFTItem> = [
  ...NFTColumns,
  {
    title: "Transferred Time",
    dataIndex: "transferredTime",
    key: "transferredTime",
    sorter: true,
  },
];

const NFTList = () => {
  const [tab, setTab] = useState("owned");
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getNFTList();

      setList(resp);
    };

    fetchData();
  }, []);

  return (
    <div className="list-container">
      {/* <Radio.Group onChange={(e) => setTab(e.target.value)} value={tab}>
        <Radio.Button value="owned">Owned</Radio.Button>
        <Radio.Button value="transferred">Transferred</Radio.Button>
      </Radio.Group> */}
      <Table pagination={{ pageSize: 100 }} dataSource={list} columns={tab === "owned" ? ownedNFTColumns : transferredColumns} className="nft-table" />
    </div>
  );
};

export default NFTList;
