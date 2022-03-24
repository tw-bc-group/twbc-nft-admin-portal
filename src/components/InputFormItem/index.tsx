import React from "react";
import { Form, Input } from "antd";
import { Rule } from "antd/lib/form";

interface Props {
  label: string;
  name: string;
  rule: Rule[];
  placeholder: string;
  className?: string;
}

export const InputFormItem = ({
  label,
  name,
  rule,
  placeholder,
  className,
  ...rest
}: Props) => {
  return (
    <Form.Item label={label} name={name} rules={rule} {...rest}>
      <Input placeholder={placeholder} className={className} />
    </Form.Item>
  );
};
