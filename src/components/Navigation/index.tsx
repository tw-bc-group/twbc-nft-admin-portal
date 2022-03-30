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
        {location.pathname !== '/' && <ArrowLeft onClick={() => navigate(-1)}/>}
        {location.pathname === '/' && 'List'}
        {location.pathname.startsWith('/detail') && 'Detail'}
        {location.pathname.startsWith('/create') && 'Create'}
      </div>
      {location.pathname === '/' && (
        <Link to="/create">
          <Button type="primary">+ Create</Button>
        </Link>
      )}
      {location.pathname.startsWith('/detail') && <TransferNFT type="primary" inDetail={true}/>}
    </div>
  )
}

export default Navigation
