import React from 'react'
import { Form, Button } from 'antd'

interface Props {
  type?: 'primary' | 'link' | 'text' | 'ghost' | 'default' | 'dashed'
  htmlType?: 'button' | 'submit' | 'reset'
  text: string
  loading?: boolean
  className?: string
}

export const ButtonFormItem = ({
  type = 'primary',
  htmlType = 'submit',
  text,
  className,
  loading,
  ...rest
}: Props) => {
  return (
    <Form.Item
      wrapperCol={{
        offset: 8
      }}
      {...rest}
    >
      <Button
        type={type}
        htmlType={htmlType}
        className={className}
        loading={loading}
      >
        {text}
      </Button>
    </Form.Item>
  )
}
