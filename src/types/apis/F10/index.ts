export interface IDstxData {
  stockcode: string //	股票代码
  event_type: string //	事件类型
  declaredate: string //	事件时间
  event: string //	事件概要
}

export interface ICompanyInfoData {
  comname: string //	公司名称
  nation: string //	所属区域
  sw_indu_code: string //	所属行业代码
  sw_indu_name: string //	所属行业名称
  regi_addr: string //	注册地址
  regi_cap: string //	注册资本(万元)
  leg_person: string //	法人代表
  pri_biz: string //	主营业务
  com_brief: string //	公司概况
}

export interface ICompanyManagerData {
  indi_name: string  //姓名
  post: string  //职位
  degree: string  //学历
}

export interface IFinancialData {
  enddate: string //	报告期

  epsp: number //	基本每股收益（元）
  bps: number //	每股净资产（元）
  ps_cr: number //	每股资本公积金（元）
  ps_up: number //	每股未分配利润（元）
  ps_net_val: number //	每股现金流（元）
  roe: number //	净资产收益率（%）
  roa: number //	总资产报酬率（%）

  p110101: number //	营业总收入（万元）
  p130101: number //	营业利润（万元）
  p160101: number //	净利润（万元）
  p110101_yoy_gr: number //	营业总收入同比增长（%）
  p130101_yoy_gr: number //	营业利润同比增长（%）
  p160101_yoy_gr: number //	净利润同比增长（%）

  b100000: number  // 资产合计（万元）
  b200000: number  // 负债合计（万元）
  b300000: number  // 所有者权益合计（万元）

  c100000: number // 经营现金流量净额（万元）
  c200000: number // 投资现金流量净额（万元）
  c300000: number // 筹资现金流量净额（万元）
  c410201: number // 现金及现金等价物净增加额（万元）
}

export interface IShareholderData {
  enddate: string  //	日期
  holder_name: string  //	股东
  rank: number  //	名次
  hold_stk_vol: number  //	持股数量(万股)
  hold_stk_pct: number  //	持股比例
  tot_num_pct: number  //	较上期变化比例
}

export interface IShareCapitalData {
  chng_date: string //	日期
  total: number //	总股本(万股)
  fl_shr: number //	流通股本(万股)
}

export interface IBusinessData {
  bussiness: {
    pri_prd: string //	String	主营产品
    pri_biz: string //	String	主营业务
  }
  product: IBusinessItemData[]
  industry: IBusinessItemData[]
  area: IBusinessItemData[]
}

export interface IBusinessItemData {
  // 各项内容
  item_name: string //	String	项目名称
  income: number //	double	营业总收入（万元）
  pri_rvnu_pct: number //	double	营业总收入占比
  gp_ratio: number //	double	毛利率
  enddate: string // 日期
}

export interface IIndustryCompareBase {
  rank: number // 排名
  stockcode: string //	股票代码
  stocksname: string //	股票名称
  du_mic?: number //	净利润(万元)
  inc_j?: number // 营业总收入(万元)
  epsp_ttm?: number // 每股收益(元)
}

export interface IIndustryCompareData {
  jlr: IIndustryCompareBase[]
  yyzsr: IIndustryCompareBase[]
  mgsy: IIndustryCompareBase[]
}

