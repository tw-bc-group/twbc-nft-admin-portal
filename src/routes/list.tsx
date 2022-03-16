import React from 'react'
import {Button, Row, Col} from 'antd'
import '../css/list.css'
import {nftList} from '../mockData'
import {map} from 'lodash'
import { Link } from 'react-router-dom'

const NFTList = () => (
  <>
    <div className="list-header">
      <div className="list-name">NFT list</div>
      <Link to="/create"><Button className="create-button">Create</Button></Link>
    </div>
    <div className="list">
      <Row className="list-row">
        <Col span={10} className="column-header">Name</Col>
        <Col span={4} className="column-header">ID</Col>
        <Col span={6} className="column-header">Address</Col>
        <Col span={4} className="column-header">CreatedTime</Col>
      </Row>
      {
        map(nftList, ({name, id, address, createdTime}, index) => (
          <Row key={index} className="list-row">
            <Col span={10}>
              <Link to="detail" className="column-name">
                <div className="column-name-avatar"/>
                <div>{name}</div>
              </Link>
            </Col>
            <Col span={4}>{id}</Col>
            <Col span={6}>{address}</Col>
            <Col span={4}>{createdTime}</Col>
          </Row>
        ))
      }
    </div>
  </>
)

export default NFTList
