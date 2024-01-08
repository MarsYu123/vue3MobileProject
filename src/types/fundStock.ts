import { IFundStockData } from '@type/apis/fundStock'
import { IFundStockSearchData } from '@type/apis/fundStock/detail'

export interface IFundStockCheckList {
  ids: string[]
  items: IFundStockData[] | IFundStockSearchData[]
}

export interface IFundStockHistory {
  ids: string
  names: string
}