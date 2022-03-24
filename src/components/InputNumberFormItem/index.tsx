import React from "react";
import { Form, InputNumber } from "antd";
import { Rule } from "antd/lib/form";

interface Props {
  label: string;
  name: string;
  rule: Rule[];
  placeholder: string;
  className?: string;
}

export const InputNumberFormItem = ({
  label,
  name,
  rule,
  placeholder,
  className,
  ...rest
}: Props) => {
  return (
    <Form.Item label={label} name={name} rules={rule} {...rest}>
      <InputNumber placeholder={placeholder} className={className} />
    </Form.Item>
  );
};
