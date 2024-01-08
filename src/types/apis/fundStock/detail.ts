export interface IFundByStockParams {
  stocks: string //	股票集合 用逗号分开，做多组合5个
  type: string //	fullin全包含  union非全包含，不填默认是union
  page: number //	显示页码 从1开始
  size: number //	显示条数 默认20条
  sort: string //	排序字段 默认持仓占比 totValProp,desc
}

export interface IFundItemDatStock {
  stockCode: string //	股票代码
  stockName: string //	股票名称
  totValProp: number //	持仓占比（%）
  scale?: number // 多个股票时，单个占比
}

export interface IFundItemData {
  fundCode: string //	基金代码
  fundName: string //	基金名称
  totValProp: number //	股票持仓占比（单个股票筛选时使用）（%）
  changeProp: number //	较上季度变动（单个股票筛选时使用）（%）
  totProp: number //	总占比（两个以上股票筛选时使用）（%）
  monZdf: number //	近1月涨跌幅（%）
  halfYearZdf: number //	近6月涨跌幅（%）
  oneYearZdf: number //	近1年涨跌幅（%）
  threeYearZdf: number //	近3年涨跌幅（%）
  thisYearZdf: number //	今年以来涨跌幅（%）
  stockList: IFundItemDatStock[]
}

export interface IFundByStockData {
  pageInfo: {
    list: IFundItemData[],
    pages: number
    total: number
  }
}

export interface IFundStockSearchData {
  stockName: string
  stockCode: string
}