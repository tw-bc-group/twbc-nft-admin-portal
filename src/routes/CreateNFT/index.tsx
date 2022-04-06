import React from 'react'
import { Form, message } from 'antd'
import { useNavigate } from 'react-router-dom'

import './index.less'
import { InputFormItem } from '../../components/InputFormItem'
import { InputNumberFormItem } from '../../components/InputNumberFormItem'
import { ButtonFormItem } from '../../components/ButtonFormItem'
import { NameRule, CountRule } from './validation'
import { UploadFile } from './UploadFile'
import { useCreateNFT } from '../../hooks/useCreateNFT'

interface formParamsType {
  count: number
  name: string
  image: any[]
}

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

  const { runCreateNFT, loading } = useCreateNFT({
    onSuccess: handleCreateSuccess,
    onError: handleCreateError
  })

  const onFinish = (values: formParamsType) => {
    runCreateNFT({
      count: values.count,
      name: values.name,
      imageUrl: values.image?.[0]?.response?.url,
      denomName: 'Denom'
    })
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
          label="Name"
          name="name"
          rule={NameRule}
          placeholder="NFT name"
          className="nameInput"
        />
        <UploadFile form={form} />
        <InputNumberFormItem
          label="Count"
          name="count"
          rule={CountRule}
          placeholder="Set NFT number"
          className="countInput"
        />
        <ButtonFormItem text="Create" loading={loading} />
      </Form>
    </div>
  )
}

export default CreateNFT
