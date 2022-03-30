import React from 'react'
import { Form } from 'antd'

import './index.less'
import { InputFormItem } from '../../components/InputFormItem'
import { InputNumberFormItem } from '../../components/InputNumberFormItem'
import { ButtonFormItem } from '../../components/ButtonFormItem'
import { NameRule, CountRule } from './validation'
import { UploadFile } from './UploadFile'

const CreateNFT = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Success:', values)
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
        <ButtonFormItem text="Create" />
      </Form>
    </div>
  )
}

export default CreateNFT
