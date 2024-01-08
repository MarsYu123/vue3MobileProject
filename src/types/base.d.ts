
interface AxiosResponse <T, U> {
  data?: T
  errCode: number
  message: string
  msg: string
  data1?: T
  data2?: U
}


type AxiosPromise<T = any, U = any> = Promise<AxiosResponse<T, U>>

interface IObj {
  [key: string]: any
}

interface IEnum {
  [key: string]: string
}

interface IEnumNumber {
  [key: string]: number
}

//
interface ITabHead extends Record<string, string | boolean>{
  name: string
  key: string
  isVal?: boolean // 是否是净值数据（处理单位，带上颜色）
  slot?: string
  pct?: boolean
  // [key: string]: boolean | string
}

interface ILegend {
  name: string
  key: string
  color: string
}

interface INameKey {
  name: string
  key: string
}

interface IRefs {
  id: string
  isLock: boolean
}

interface IList <T> {
  list: T[]
  pageNum: number
  pages: number
  size: number
  total: number
}