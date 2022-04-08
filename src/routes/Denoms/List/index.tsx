import React from 'react'
import { Table, Tag, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ColumnsType } from 'antd/lib/table/interface'
import dayjs from 'dayjs'

import { useDenomsList } from '../../../utils/http/apis'
import { useSetDenomOnline } from '../../../hooks/useSetDenomOnline'

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

const NFTList = () => {
  const { data: list = [] } = useDenomsList()

  const navigate = useNavigate()

  const handleCreateSuccess = () => {
    message.success('主题已上线')
    navigate(0)
  }

  const handleCreateError = () => {
    message.error('Failed to online, please retry.')
  }

  const { runSetDenomOnline, loading } = useSetDenomOnline({
    onSuccess: handleCreateSuccess,
    onError: handleCreateError
  })

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
      render: (record) => {
        return record == 0 ? (
          <Tag color="red">未发布</Tag>
        ) : (
          <Tag color="green">已发布</Tag>
        )
      }
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
      render: (v) => renderOnlineBtn(v)
    }
  ]

  const renderOnlineBtn = (v: any) => {
    return v.status === 0 ? (
      <Button
        type="link"
        onClick={() => {
          runSetDenomOnline(v.no)
        }}
      >
        发布上线！
      </Button>
    ) : null
  }

  return (
    <div className="list-container">
      <Table
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`/denoms/${record.no}/collections`)
            }
          }
        }}
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
