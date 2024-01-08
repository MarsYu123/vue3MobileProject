
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, any>
  export default component
}

declare interface Window {
  Vue: any
}

const wx = window['wx']