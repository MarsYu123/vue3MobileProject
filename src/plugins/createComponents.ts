import { defineAsyncComponent } from 'vue'
import type { App } from 'vue'

const getCompModules = () => {
  return import.meta.glob('../components/*.vue')
}
export const asyncComponent = function (app: App<Element>): void {
  const modules = Object.assign({}, getCompModules())
  Object.keys(modules).forEach((key: string) => {
    const AsyncComponent = defineAsyncComponent(modules[key])
    const name = key.replace(/^\..\/components\/(.*)\.\w+$/, '$1')
    app.component(name, AsyncComponent)
  })
}
