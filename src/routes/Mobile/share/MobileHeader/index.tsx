import React from 'react'
import cls from 'classnames'

import './index.less'
import { BackIconCustom } from '../../MobileNFTDetail'
import { CloseCustom } from '../../MobileNFTList'

interface Props {
  text?: string
  goBackUrl?: string
  closeIcon?: boolean
  children?: React.ReactElement
  className?: string
}

export const MobileHeader = ({
  text,
  goBackUrl,
  closeIcon,
  children,
  className
}: Props) => {
  return (
    <div className={cls('head', className)}>
      {text && <span>{text}</span>}
      {goBackUrl && <BackIconCustom url={goBackUrl} />}
      {closeIcon && <CloseCustom />}
      {children}
    </div>
  )
}
