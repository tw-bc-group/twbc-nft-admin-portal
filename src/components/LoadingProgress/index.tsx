import React from 'react'
import { Spin } from 'antd'
import './index.less'

export const LoadingProgress = () => {
  return (
    <div className="loading">
      <Spin />
    </div>
  )
}
