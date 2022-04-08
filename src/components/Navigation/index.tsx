import React from 'react'
import { Button } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { ReactComponent as ArrowLeft } from '../../assets/images/arrow-left.svg'
import TransferNFT from '../../routes/TransferNFT'
import './index.less'

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="navigation">
      <div className="router">
        {location.pathname !== '/' && (
          <ArrowLeft onClick={() => navigate(-1)} />
        )}
        {location.pathname === '/' && '主题列表'}
        {location.pathname.startsWith('/nfts/detail') && 'Detail'}
        {location.pathname.startsWith('/create') && 'Create'}
        {location.pathname.startsWith('/denoms/') && '藏品'}
      </div>
      {location.pathname === '/' && (
        <Link to="/denoms/create">
          <Button type="primary">+ 创建主题</Button>
        </Link>
      )}
      {location.pathname === '/nfts' && (
        <Link to="/create">
          <Button type="primary">+ Create</Button>
        </Link>
      )}
      {/* {location.pathname.startsWith('/nfts/detail') && (
        <TransferNFT type="primary" inDetail={true} />
      )} */}
      {location.pathname.startsWith('/denoms/') && (
        <Link to={`${location.pathname}/create`}>
          <Button type="primary">+ 创建藏品</Button>
        </Link>
      )}
    </div>
  )
}

export default Navigation
