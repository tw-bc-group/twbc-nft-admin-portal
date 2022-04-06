import React, { useState } from 'react'
import { Form, Image, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { RcFile } from 'antd/lib/upload'
import { FormInstance } from 'rc-field-form'
import { isEmpty } from 'lodash'

import { FileRule, UPLOAD_FILE_MAX_SIZE } from '../validation'
import { getPresignedUrl, uploadNFTFile } from '../../../utils/http/apis'
import './index.less'
import { externalInstance } from '../../../utils/http'

interface Props {
  form: FormInstance<any>
}

interface PresignedUrl {
  fileName: string
  uploadUrl: string
  url: string
}

const normFile = (e: any) => {
  if (e?.file.size > UPLOAD_FILE_MAX_SIZE) {
    return []
  }
  return e && e.fileList
}

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }} className="uploadButton">
      Upload
    </div>
  </div>
)

export const UploadFile = ({ form }: Props) => {
  const [visible, setVisible] = useState(false)
  const [fileUrl, setFileUrl] = useState<any>()

  const handlePreview = () => {
    setVisible(true)
  }

  const handleCustomRequest = ({ file, onSuccess, onError }: any) => {
    return getPresignedUrl(file.type)
      .then((res) => {
        const { uploadUrl, url }: PresignedUrl = res.data

        return externalInstance
          .put(uploadUrl, file, {
            responseType: 'json',
            headers: {
              'content-type': file.type
            }
          })
          .then((res) => {
            onSuccess?.(res, file)
            setFileUrl(url)
          })
      })
      .catch(onError())
  }

  const handleVisibleChange = (value: boolean) => {
    setVisible(value)
  }

  const handleBeforeUpload = async (file: RcFile) => {
    if (file.size > UPLOAD_FILE_MAX_SIZE) {
      form.setFieldsValue({ image: [] })
      return false
    }
  }

  return (
    <div className="uploadImageContainer">
      <Form.Item noStyle shouldUpdate>
        {({ getFieldValue }) => {
          return (
            <Form.Item
              label="Image"
              name="image"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              help="File size less than 10MB"
              rules={FileRule}
            >
              <Upload
                listType="picture-card"
                className="uploadFile"
                accept="image/*"
                beforeUpload={handleBeforeUpload}
                maxCount={1}
                onPreview={handlePreview}
                customRequest={handleCustomRequest}
              >
                {isEmpty(getFieldValue('image')) && uploadButton}
              </Upload>
            </Form.Item>
          )
        }}
      </Form.Item>
      <Image
        width={200}
        src={fileUrl}
        preview={{
          visible,
          src: fileUrl,
          onVisibleChange: handleVisibleChange
        }}
      />
    </div>
  )
}
