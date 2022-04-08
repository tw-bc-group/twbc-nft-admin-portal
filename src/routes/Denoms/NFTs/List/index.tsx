import React, { useState, useEffect } from 'react'
import { Table, Tag, Button, message } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { ColumnsType } from 'antd/lib/table/interface'
import dayjs from 'dayjs'

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

  // const navigate = useNavigate()

  // const handleCreateSuccess = () => {
  //   message.success('主题已上线')
  //   navigate(0)
  // }

  // const handleCreateError = () => {
  //   message.error('Failed to online, please retry.')
  // }

  // const { runSetDenomOnline, loading } = useSetDenomOnline({
  //   onSuccess: handleCreateSuccess,
  //   onError: handleCreateError
  // })

  const columns: ColumnsType<NFTItemInDenom> = [
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
      render: (v) => {
        return <Button type="primary">铸造</Button>
      }
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
