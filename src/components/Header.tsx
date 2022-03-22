import React from 'react'
import { Layout } from 'antd';
import logo from '../assets/images/Logo.png'
import user from '../assets/images/User.png'
import '../css/header.less'

const { Header } = Layout

const NFTHeader = () => (
  <Header className="header">
    <img width={143} height={24} src={logo}/>
    <img width={116} height={24} src={user}/>
  </Header>

)

export default NFTHeader
