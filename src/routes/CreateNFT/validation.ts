import { Rule } from 'antd/lib/form'

export const UPLOAD_FILE_MAX_SIZE = 10 * 1024 * 1024

export const NameRule: Rule[] = [
  {
    required: true,
    message: 'Please input NFT name!'
  }
]

export const FileRule: Rule[] = [
  {
    required: true,
    message: 'Please upload the file! File size less than 10MB!'
  }
]

export const CountRule: Rule[] = [
  {
    required: true,
    message: 'Please set NFT number!'
  }
]
