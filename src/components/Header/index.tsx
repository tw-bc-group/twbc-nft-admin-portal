import React from 'react'
import { Layout } from 'antd'

import logo from '../../assets/images/logo.png'
import user from '../../assets/images/user.png'
import './index.less'

const { Header } = Layout

const NFTHeader = () => (
  <Header className="header">
    <img width={143} height={24} src={logo} />
    <img width={116} height={24} src={user} />
  </Header>
)

export default NFTHeader
