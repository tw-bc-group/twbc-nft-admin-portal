import React, { useState } from "react";
import { Form, Upload, Image } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { FileRule, UPLOAD_FILE_MAX_SIZE } from "../validation";
import { isEmpty } from "lodash";
import { RcFile } from "antd/lib/upload";
import { FormInstance } from "rc-field-form";
import { formatBase64Image } from "../../../utils/format";
import "./index.less";

interface Props {
  form: FormInstance<any>;
}

const normFile = (e: any) => {
  if (e?.file.size > UPLOAD_FILE_MAX_SIZE) {
    return [];
  }
  return e && e.fileList;
};

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }} className="uploadButton">
      Upload
    </div>
  </div>
);

export const UploadFile = ({ form }: Props) => {
  const [visible, setVisible] = useState(false);
  const [fileUrl, setFileUrl] = useState<any>();

  const handlePreview = () => {
    setVisible(true);
  };

  const handleVisibleChange = (value: boolean) => {
    setVisible(value);
  };

  const handleBeforeUpload = async (file: RcFile) => {
    if (file.size > UPLOAD_FILE_MAX_SIZE) {
      form.setFieldsValue({ image: [] });
    } else {
      setFileUrl(await formatBase64Image(file));
    }
    return false;
  };

  return (
    <>
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
              >
                {isEmpty(getFieldValue("image")) && uploadButton}
              </Upload>
            </Form.Item>
          );
        }}
      </Form.Item>
      <Image
        width={200}
        style={{ display: "none" }}
        src={fileUrl}
        preview={{
          visible,
          src: fileUrl,
          onVisibleChange: handleVisibleChange,
        }}
      />
    </>
  );
};
