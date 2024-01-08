export interface IBaseInfo {
  fundCode: string
  fundName: string
}

export interface IBaseData {
  fundCode: string
  fundName: string
  fundLevel1Type: string
  fundLevel2Type: string
  fundLabels: {
    LAB_CODE: number
    LAB_NAME: string
    LAB_TERGET: number
    LAB_GOOD_BAD: number
  }[]
}

// 指数数据
export interface IIndexData {
  indxName?: string
  indxCode?: string
  indexName: string
  indexCode: string
}

export interface INameDate {
  date: string
  name: string
  alias?: string
}

export interface ISelectStockInfo {
  key: string
  name: string
  per?: boolean
  value?: string | number
}

export interface ISceneCheckItem {
  name: string
  children: {
    name: string
    key: string
    tips: string
  }[]
}

// 图表legend
export interface ILegend {
  name: string
  key: string
  color: string
  pct?: boolean
}

export interface IDiffLineType {
  name: string
  value: number
  isCheck: boolean
  color: string
  key: string
}