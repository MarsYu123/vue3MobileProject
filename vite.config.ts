import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslint from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

import UnoCSS from 'unocss/vite'


// @ts-ignore
import { viteZip } from 'vite-plugin-zip-file'
import viteCompression from 'vite-plugin-compression'

const resolve = (dir: string) => path.join(__dirname, dir)


// https://vitejs.dev/config/
export default ({ mode }: { mode: any }) => {
  const baseName = loadEnv(mode, process.cwd()).VITE_APP_BASE_NAME
  const baseUrl = loadEnv(mode, process.cwd()).VITE_APP_WEB_URL
  return defineConfig({
    base: `/${baseName}/`,
    build: {
      outDir: `dist/${baseName}`
    },
    plugins: [ vue(), eslint({
      cache: false,
      lintOnStart: false,
      failOnError: false
    }), Components({
      resolvers: [ VantResolver() ],
      dts: true
    }), viteCompression({
      verbose: true, // 默认即可
      disable: false, //开启压缩(不禁用)，默认即可
      deleteOriginFile: false, //删除源文件
      threshold: 10240, //压缩前最小文件大小
      algorithm: 'gzip', //压缩算法
      ext: '.gz' //文件类型
    }),  viteZip({
      folderPath: `./dist/${baseName}`,
      outPath: './dist',
      zipName: `${baseName}.zip`
    }), vueSetupExtend(), // 解决setup没有name问题
      UnoCSS()
    ],
    server: {
      fs: {
        allow: [ '..' ]
      },
      base: `/${baseName}/`,
      hmr: {
        overlay: false // 禁止报错在浏览器上输出
      },
      proxy: {
        '/api': {
          target: `http://${baseUrl}`,
          changeOrigin: true,
          rewrite: path => path.replace('/api', '')
        }
      },
      host: '0.0.0.0',
      port: 3000
    },
    resolve: {
      alias: [
        { find: '@', replacement: resolve('./src') },
        { find: '@apis', replacement: resolve('./src/apis') },
        { find: '@comps', replacement: resolve('./src/components') },
        { find: '@type', replacement: resolve('./src/types') },
        { find: '@utils', replacement: resolve('./src/utils') },
        { find: '@imgs', replacement: resolve('./src/assets/image') }
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/mixins.scss";'
        }
      }
    }
  })
}