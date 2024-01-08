import { definePreset } from 'unocss'

// 解决uno会使rem数值变为1/4的情况，现将数值转换为1:.01rem
export const presetRemPer =  definePreset(() => {
  return {
    name: 'unoCss-rem-per',
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1]
        if (value && typeof value === 'string') {
          i[1] = value.replace(/(-?[\.\d]+)rem/g, (_, val) => `${val * 4 / 100}rem`)
        }
      })
    }
  }
})

export default presetRemPer