import React, { useState } from 'react'
import { Radio, Table } from 'antd';
import '../css/list.less'
import { NFT, ownedNFTList } from '../mockData'
import { Link } from 'react-router-dom'
import monkey from '../assets/images/monkey.png'
import woman from '../assets/images/woman.png'
import { ColumnsType } from 'antd/lib/table/interface'

const ownedNFTColumns: ColumnsType<NFT> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (value: string, record: any, index: number) => (
      <Link className='nft-name' to='/detail'>
        <img src={index < 5 ? monkey : woman} alt="" width={30} height={30}/>
        <span>{value}</span>
      </Link>
    )
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'NFT address',
    dataIndex: 'address',
    key: 'nftAddress',
  },
  {
    title: 'Created Time',
    dataIndex: 'createdTime',
    key: 'createdTime',
    sorter: true,
  },
  {
    title: 'Action',
    key: 'action',
    render: (value: string, record: any) => (<Link to='/transfer'>Transfer</Link>)
  },
]

const NFTList = () => {
  const [tab, setTab] = useState('owned');

  return (
    <div className='list-container'>
      <Radio.Group onChange={e => setTab(e.target.value)} value={tab}>
        <Radio.Button value='owned'>Owned</Radio.Button>
        <Radio.Button value='transferred'>Transferred</Radio.Button>
      </Radio.Group>
      <Table dataSource={ownedNFTList} columns={ownedNFTColumns} className='nft-table' />
    </div>
  )
}

export default NFTList
