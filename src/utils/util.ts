import { isEmpty as _isEmpty } from 'lodash-es'

/**
 * 返回对象类型
 * @param obj {any} 判断对象
 * @returns {String} 类型
 */
export const getType = (obj: any) => {
  if (typeof obj !== 'object') {
    return typeof obj
  }
  return Object.prototype.toString.call(obj).slice(1, -1).split(' ')[1]
}

/**
 * 返回整理过的净值数值
 * @param value {String | Number | null } 原始数据
 * @param [isPer] {Boolean} 是否添加百分号
 * @param [isFixed] {Boolean} 是否将0转为0.00
 * @returns {String}
 */
export const initPercent = (value: string | number | null, isPer= true, isFixed = false) => {
  if (typeof value === 'string' && isNaN(+value)) {
    return value
  }
  if (isEmpty(value) || isNaN(+value)) {
    return '--'
  } else {
    value = +value
    if (value === 0) {
      return isFixed ? '0.00%' : '0'
    } else {
      // 防止去小数点后2位变0.00
      return (Math.abs(value) < 0.005 ? value.toFixed(4) : value.toFixed(2))  + (isPer ? '%' : '')
    }
  }
}

// 返回货币单位
export const initMoney = (val: string | number | null, isUnit = true): string => {
  if (isEmpty(val)) return '--'
  const value = +val
  const absValue = Math.abs(value)
  const unit = isUnit ? '元' : ''

  // 大于万亿
  if (absValue > 10000 * 10000 * 10000 * 10000) {
    return initPercent(value / 10000 / 10000 / 10000 / 10000, false) + '兆' + unit
  } else if (absValue > 10000 * 10000 * 1000) {
  // 大于千亿
    return initPercent(value / 10000 / 10000 / 1000, false) + '万亿'
  } else if (absValue > 10000 * 1000) {
    // 大于千万
    return initPercent(value / 10000 / 10000, false) + '亿' + unit
  } else if (absValue > 10000) {
    return initPercent(value / 10000, false) + '万' + unit
  } else {
    return initPercent(value, false) + unit
  }
}
/**
 * 判断对象是否为空，或者基础类型转换boolean为false，对lodash做了基础类型判断
 * @param params {String | Object | Number | Null | Boolean}
 */
type params = string | object | number | null | boolean
export const isEmpty = (params: params) => {
  if (typeof params === 'number') {
    return false
  } else if (typeof params !== 'object') {
    return !params
  } else {
    return _isEmpty(params)
  }
}

/**
 * 根据rem返回当前分辨率的真实px
 * @param rem {Number} 要返回的rem
 * @returns {Number} 当前px
 */
export const rem2px = (rem: number) => {
  return document.querySelector('#app').clientWidth / 750 * rem * 100
}

/**
 * 格式化时间
 * @param date {String | Date | Number} 时间对象或时间戳
 * @param formatter {String} 时间格式 'yyyy-MM-dd hh:mm:ss'
 */
export const dateFormatter = (date: string | Date | number, formatter: string) => {
  let newDate: Date
  if (typeof date === 'string') {
    // 可以传以转换的时间格式
    if (isNaN(+date)) {
      newDate = new Date(date.replace(/-/g, '/'))
    } else {
      newDate = new Date(+date)
    }
  } else if (typeof date === 'number') {
    newDate = new Date(date)
  } else {
    newDate = date
  }
  const o: IEnum = {
    'y+': (newDate.getFullYear()).toString(),
    'M+': (newDate.getMonth() + 1).toString(), //月份
    'd+': (newDate.getDate()).toString(), //日
    'h+': (newDate.getHours()).toString(), //小时
    'm+': (newDate.getMinutes()).toString(), //分
    's+': (newDate.getSeconds()).toString() //秒
  }
  for (const k in o) {
    const ret = new RegExp('('+k+')').exec(formatter)
    if (ret) {
      if (k === 'y+') {
        formatter = formatter.replace(ret[1], o[k].slice(-ret[1].length))
      } else {
        formatter = formatter.replace(ret[1],
          (ret[0].length === 1)
            ? o[k]
            : (o[k].padStart(ret[1].length, '0')))
      }
    }
  }
  return formatter
}

export const dateArea = (type: string) => {
  const newDate = new Date()
  const newDateString = dateFormatter(new Date(), 'yyyy-MM-dd')
  let [ y, m ] = [ newDate.getFullYear(), newDate.getMonth() + 1 ]
  const d = newDate.getDate()
  if (type === '3m') {
    if (m < 4) {
      m = 12 + (m - 3)
      y = y - 1
    } else {
      m = m - 3
    }
    return [ `${y}-${m}-${d}`, newDateString ]
  } else if (type === '6m') {
    if (m < 7) {
      m = 12 + (m - 6)
      y = y - 1
    } else {
      m = m - 6
    }
    return [ `${y}-${m}-${d}`, newDateString ]
  } else if (type.endsWith('y')) { // 往前推n年
    const num = type.match(/\d+/)[0]
    return [ `${y - Number(num)}-${m}-${d}`, newDateString ]
  } else if (type === 'all') {  // 由基金以来全部时间
    return [ '1980-01-01', newDateString ]
  } else if (type.startsWith('from')) { // 从哪年起
    return [ type.split('_')[1], newDateString ]
  } else if (type.startsWith('allYear')) { // 固定年份
    y = Number(type.split('_')[1])
    return [ `${y}-01-01`, `${y}-12-31` ]
  }
}

// 处理高亮
export const selectFormatter = (text: string, keyWord: string): string => {
  const reg = new RegExp('(' + keyWord + ')', 'ig')
  return text.replace(reg, '<i class="key">$1</i>')
}

// 文字过长修改class函数
export const textBr = (text: string, _length: number): string => {
  return text.length > _length ? 'br' : ''
}

// 获取图片
export const getAssetsFile = (url: string) => {
  return new URL(`../assets/image/${url}`, import.meta.url).href
}
// 将param对象转换为url参数字符串 isEncode 是否进行字符串转码
export const params2url = (obj: IEnum, isEnCode: boolean) => {
  let param = ''
  for (const objI in obj) {
    if (obj.hasOwnProperty(objI) && obj[objI]) {
      param += `${objI}=${
        isEnCode ? encodeURIComponent(obj[objI]) : obj[objI]
      }&`
    }
  }
  return param.slice(0, -1)
}

// 获取当前路由参数
export const getUrlParams = () => {
  // 通过 ? 分割获取后面的参数字符串
  const urlStr = location.href.split('?')[1]
  // 创建空对象存储参数
  const obj: IObj = {}
  // 再通过 & 将每一个参数单独分割出来
  const paramsArr = urlStr.split('&')
  for (let i = 0, len = paramsArr.length;i < len;i++){
    // 再通过 = 将每一个参数分割为 key:value 的形式
    const arr = paramsArr[i].split('=')
    obj[arr[0]] = arr[1]
  }
  return obj
}

type TPosition = [number, number]
export const getElOffset = (el: HTMLElement, position: TPosition = [ 0, 0 ]): TPosition => {
  if (!el) {
    return position
  }
  const elParent = el.offsetParent as HTMLElement
  if (!elParent) {
    return position
  } else {
    let [ x, y ] = position
    x = el.offsetLeft + x
    y = el.offsetTop + y
    return getElOffset(elParent, [ x, y ])
  }
}

