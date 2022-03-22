import React from 'react'
import '../css/navigation.less'
import { Button } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {trim, get} from 'lodash'
import {ReactComponent as ArrowLeft} from '../assets/images/arrow-left.svg'

const getPathName = (path: string) => trim(path, '/')

const navigationMap = {
  detail: 'Detail',
  create: 'Create',
}

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const pathName = getPathName(location.pathname);
  const router = get(navigationMap, pathName, 'List')

  return (
    <div className='navigation'>
      <div className='router'>
        {router !== 'List' && <ArrowLeft onClick={() => navigate(-1)} />}
        {router}
      </div>
      {router === 'List' && <Link to='/create'><Button type='primary'>+ Create</Button></Link>}
    </div>
  )
}

export default Navigation
