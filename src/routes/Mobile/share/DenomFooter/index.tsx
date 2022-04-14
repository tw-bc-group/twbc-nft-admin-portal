import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import homeActive from 'src/assets/images/home-active.svg'
import homeNoActive from 'src/assets/images/home-no-active.svg'
import mineNoActive from 'src/assets/images/mine-no-active.svg'
import mineActive from 'src/assets/images/mine-active.svg'
import './index.less'

export const DenomFooter = () => {
  const location = useLocation()

  return (
    <div className="footer">
      <div>
        <Link to="/mobile/denom">
          <img
            src={
              location.pathname.startsWith('/mobile/denom')
                ? homeActive
                : homeNoActive
            }
          />
        </Link>
      </div>
      <div>
        <Link to="/mobile/nfts">
          <img
            src={
              location.pathname.startsWith('/mobile/nfts')
                ? mineActive
                : mineNoActive
            }
          />
        </Link>
      </div>
    </div>
  )
}
