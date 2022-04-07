import React from 'react'
import dayjs from 'dayjs'
import { Form, message, Input, DatePicker } from 'antd'
import { useNavigate } from 'react-router-dom'

import { InputFormItem } from '../../../components/InputFormItem'
import { ButtonFormItem } from '../../../components/ButtonFormItem'
import { useCreateDenom } from '../../../hooks/useCreateDenom'
import { createDenomRequestBody } from '../../../shared/types'

import './index.less'

const CreateNFT = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const handleCreateSuccess = () => {
    message.success('NFT created')
    navigate('/')
  }

  const handleCreateError = () => {
    message.error('Failed to create, please retry.')
  }

  const { runCreateDenom, loading } = useCreateDenom({
    onSuccess: handleCreateSuccess,
    onError: handleCreateError
  })

  const onFinish = (v: createDenomRequestBody) => {
    runCreateDenom(v)
  }
  function disabledDate(current: any) {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day')
  }

  function range(start: any, end: any) {
    const result = []
    for (let i = start; i < end; i++) {
      result.push(i)
    }
    return result
  }

  return (
    <div className="container">
      <Form
        form={form}
        labelCol={{
          span: 8
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <InputFormItem
          label="名称"
          name="name"
          placeholder="Denom name"
          className="nameInput"
          rule={[{ required: true, message: 'Please input name!' }]}
        />
        <Form.Item
          label={'描述'}
          name={'description'}
          rules={[{ required: true, message: 'Please input description!' }]}
        >
          <Input.TextArea placeholder={'描述'} className={'nameInput'} />
        </Form.Item>
        <InputFormItem
          label="发行人"
          name="issuer"
          placeholder="issuer"
          className="nameInput"
          rule={[{ required: true, message: 'Please input issuer!' }]}
        />
        <InputFormItem
          label="品牌方"
          name="brand"
          placeholder="brand"
          className="nameInput"
          rule={[{ required: true, message: 'Please input brand!' }]}
        />
        <Form.Item
          label={'销售开始时间'}
          name={'salesTime'}
          rules={[{ required: true, message: 'Please input salesTime!' }]}
        >
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={disabledDate}
            showTime={{ format: 'HH:mm:ss' }}
          />
        </Form.Item>

        <ButtonFormItem text="Create" loading={loading} />
      </Form>
    </div>
  )
}

export default CreateNFT
