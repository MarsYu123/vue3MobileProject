/* eslint-disable */
import { AxiosRequestConfig } from 'axios'
declare module 'axios' {
  interface AxiosRequestConfig {
    isUser?: boolean
  }
}