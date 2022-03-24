import React from "react";
import { Form, Input, Button, Upload, InputNumber } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import "../css/createNFT.less";
import { RcFile } from "antd/lib/upload";
import { isEmpty } from "lodash";

const UPLOAD_FILE_MAX_SIZE = 10 * 1024 * 1024;

const normFile = (e: any) => {
  if (e?.file.size > UPLOAD_FILE_MAX_SIZE) {
    return [];
  }
  return e && e.fileList;
};

const CreateNFT = () => {
  const [form] = Form.useForm();

  const handleBeforeUpload = (file: RcFile) => {
    if (file.size > UPLOAD_FILE_MAX_SIZE) {
      form.setFieldsValue({ image: [] });
      return false;
    }

    return false;
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }} className="uploadButton">
        Upload
      </div>
    </div>
  );

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="container">
      <Form
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input NFT name!",
            },
          ]}
        >
          <Input placeholder="NFT name" className="nameInput" />
        </Form.Item>
        <Form.Item noStyle shouldUpdate>
          {({ getFieldValue }) => {
            return (
              <Form.Item
                label="Image"
                name="image"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                help="File size less than 10MB"
                rules={[
                  {
                    required: true,
                    message: "Please upload the file!",
                  },
                  {
                    validator(_, value) {
                      if (value[0]?.size > UPLOAD_FILE_MAX_SIZE) {
                        return Promise.reject(
                          new Error("File size less than 10MB")
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Upload
                  listType="picture-card"
                  className="uploadFile"
                  accept="image/*"
                  beforeUpload={handleBeforeUpload}
                  maxCount={1}
                >
                  {isEmpty(getFieldValue("image")) && uploadButton}
                </Upload>
              </Form.Item>
            );
          }}
        </Form.Item>

        <Form.Item
          label="Count"
          name="count"
          className="countItem"
          rules={[
            {
              required: true,
              message: "Please set NFT number!",
            },
          ]}
        >
          <InputNumber placeholder="Set NFT number" className="countInput" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateNFT;
