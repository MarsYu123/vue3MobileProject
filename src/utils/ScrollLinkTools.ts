// 多滚动条联动工具，传入refs为 {id: '', isLock: false}
import { Ref, ref } from 'vue'
export class ScrollLinkTools {
  isMask: Ref<boolean>
  scrollTime: number | null
  refs: IRefs[]
  constructor (refs: IRefs[]) {
    this.scrollTime = null
    this.refs = refs
    this.isMask = ref(false)
  }
  build () {

    this.refs.forEach((item) => {
      document.querySelector('#'+item.id).addEventListener('scroll', (event) => {
        if (item.isLock) return
        // 滚动时将其他的滚动条锁住
        this.refs.forEach((ref) => {
          if (item.id !== ref.id) {
            ref.isLock = true
          }
        })
        const scrollLeft = (event.target as HTMLElement).scrollLeft
        this.isMask.value = scrollLeft > 10
        this.refs.forEach((ref) => {
          document.querySelector('#'+ref.id).scrollLeft = scrollLeft
        })
        if (this.scrollTime) {
          clearTimeout(this.scrollTime)
        }
        this.scrollTime = setTimeout(() => {
          this.refs.forEach((ref) => {
            ref.isLock = false
          })
        }, 500)
      })
    })
    return this.isMask
  }
}