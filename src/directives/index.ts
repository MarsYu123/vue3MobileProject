import { isEmpty as _isEmpty } from 'lodash-es'
import type { App } from 'vue'
enum EColor {
  red = '#FF3440',
  green = '#0FBA6A'
}
export default function (app: App) {
  app.directive('initval', {
    mounted: (el, binding) => {
      let val = binding.value
      let plus = ''
      let color = ''
      if (_isEmpty(val) || +val === 0) {
        if (_isEmpty(val)) {
          el.innerText = '--'
        } else {
          el.innerText = '0.00%'
        }
      } else {
        if (+val > 0) {
          plus = '+'
          color = 'red'
        } else if (+val < 0) {
          color = 'green'
        }
        val = (+val).toFixed(binding.modifiers.noFix ? 4: 2)
        // 是否需要改颜色
        if (!binding.modifiers.noColor && color) {
          el.style.color = EColor[color as keyof typeof EColor]
        }
        // 纯改颜色
        if (binding.modifiers.pureColor) {
          return
        }
        // 是否需要箭头
        let preHtml = ''
        if (binding.modifiers.arrow) {
          preHtml = color === 'red'
            ? '<i class="up"></i>'
            : color === 'green'
              ? '<i class="down"></i>'
              : ''
        }
        el.innerHTML = `${preHtml}${binding.modifiers.noColor ? '' : plus}${val}%`
      }
    }
  })
  app.directive('textBr', {
    mounted: (el, binding) => {
      const _length = binding.value
      if (el.innerText.length > _length) {
        el.classList.add('br')
      }
    }
  })
}