import React, { useState } from 'react'
import { Table, Tag, Button } from 'antd'
import { Link } from 'react-router-dom'
import { ColumnsType } from 'antd/lib/table/interface'
import dayjs from 'dayjs'

import { useDenomsList, setDenomOnline } from '../../../utils/http/apis'
import './index.less'

export interface DenomItem {
  id: number
  no: string
  name: string
  description: string
  issuer: string
  brand: string
  status: number
  salesTime: Date
  createdAt: Date
  updatedAt: Date
}

const renderStatus = (status: number) => {
  return status == 0 ? (
    <Tag color="red">未发布</Tag>
  ) : (
    <Tag color="green">已发布</Tag>
  )
}

const columns: ColumnsType<DenomItem> = [
  {
    title: '编号',
    dataIndex: 'no'
  },
  {
    title: '名称',
    dataIndex: 'name'
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (_, record) => renderStatus(record.status)
  },
  {
    title: '发行人',
    dataIndex: ['issuer']
  },
  {
    title: '品牌方',
    dataIndex: ['brand']
  },
  {
    title: '销售时间',
    dataIndex: ['salesTime'],
    render: (t) => dayjs(t).format('YYYY-MM-DD HH:mm:ss')
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
    render: (v) => (
      <Button
        type="link"
        onClick={() => {
          setDenomOnline(v.no)
        }}
      >
        发布上线！
      </Button>
    )
  }
]

const NFTList = () => {
  const { data: list = [] } = useDenomsList()

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
