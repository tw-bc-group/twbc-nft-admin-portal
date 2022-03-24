import { Rule } from "antd/lib/form";

export const UPLOAD_FILE_MAX_SIZE = 10 * 1024 * 1024;

export const NameRule:Rule[]=[
    {
      required: true,
      message: "Please input NFT name!",
    },
  ]

export const FileRule:Rule[]=[
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
  ]

export const CountRule:Rule[]=[
    {
      required: true,
      message: "Please set NFT number!",
    },
  ]
