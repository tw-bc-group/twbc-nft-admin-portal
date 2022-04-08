import React from 'react'
import { Form, message, Input } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'

import { UploadFile } from './../../../CreateNFT/UploadFile'
import { InputFormItem } from '../../../../components/InputFormItem'
import { ButtonFormItem } from '../../../../components/ButtonFormItem'
import { InputNumberFormItem } from '../../../../components/InputNumberFormItem'
import { useCreateNFTinDenom } from '../../../../hooks/useCreateNFTinDenom'
import { createNFTinDenomRequestBody } from '../../../../shared/types'

import './index.less'

interface formParamsType extends createNFTinDenomRequestBody {
  image: any[]
}

const CreateNFT = () => {
  const { denomId } = useParams()
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const handleCreateSuccess = () => {
    message.success('NFT created')
    navigate(-1)
  }

  const handleCreateError = () => {
    message.error('Failed to create, please retry.')
  }

  const { runCreateNFTinDenom, loading } = useCreateNFTinDenom({
    onSuccess: handleCreateSuccess,
    onError: handleCreateError
  })

  const onFinish = (v: formParamsType) => {
    runCreateNFTinDenom(denomId, {
      name: v.name,
      description: v.description,
      issueTotal: v.issueTotal,
      url: v.image?.[0]?.response?.url
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
        <InputNumberFormItem
          label="发行总量"
          name="issueTotal"
          rule={[{ required: true, message: 'Please input name!' }]}
          placeholder="Set NFT number"
          className="countInput"
        />
        <UploadFile form={form} />
        <ButtonFormItem text="Create" loading={loading} />
      </Form>
    </div>
  )
}

export default CreateNFT
