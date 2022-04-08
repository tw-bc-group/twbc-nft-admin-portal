import React from 'react'
import { Table } from 'antd'
import { useParams } from 'react-router-dom'
import { ColumnsType } from 'antd/lib/table/interface'
import dayjs from 'dayjs'

import TransferNFT from '../../../TransferNFT'
import { useNFTsListInDenom } from '../../../../utils/http/apis'

import './index.less'

export interface NFTItemInDenom {
  id: number
  no: string
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

const NFTList = () => {
  const { denomId } = useParams()
  const { data: list = [] } = useNFTsListInDenom(denomId)

  const columns: ColumnsType<NFTItemInDenom> = [
    {
      title: '缩略图',
      dataIndex: ['resource', 'url'],
      render: (url) => <img src={url} alt="" width={200} height={200} />
    },
    {
      title: '编号',
      dataIndex: 'no'
    },
    {
      title: '名称',
      dataIndex: 'name'
    },
    {
      title: '发行总量',
      dataIndex: ['issueTotal']
    },
    {
      title: '发行剩余',
      dataIndex: ['issueRemain']
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      render: (createdAt) => dayjs(createdAt).format('YYYY-MM-DD HH:mm:ss'),
      sorter: (a: any, b: any) =>
        dayjs(a.createdAt).unix() - dayjs(b.createdAt).unix()
    },
    {
      title: 'Action',
      key: 'action',
      render: (r) => (
        <TransferNFT
          type="primary"
          inDetail={false}
          name={r.name}
          no={r.no}
          url={r.resource.url}
          dno={denomId}
        />
      )
    }
  ]

  return (
    <div className="list-container">
      <Table
        rowKey={(item) => item.no}
        pagination={{ pageSize: 100 }}
        dataSource={list}
        columns={columns}
        className="denom-table"
      />
    </div>
  )
}

export default NFTList
