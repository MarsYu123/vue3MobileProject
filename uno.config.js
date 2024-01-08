// uno.config.js
import { defineConfig, presetUno, transformerVariantGroup, transformerDirectives, presetAttributify } from 'unocss'
import unoCSSRem from './src/styles/unocss-rem'

export default defineConfig({
	presets: [
			presetUno(), // 添加 UnoCSS 的默认样式预设
			// presetAttributify(), // 属性化预设
			unoCSSRem() // 将所有属性单位 1 / 100
	],
	transformers: [
		transformerVariantGroup(),
			transformerDirectives()
	],
	theme: {
		colors: {
			//背景色
			bgColor: '#F6F6F6',
			//主色
			mainColor: '#1777FF',
			subMainColor: '#159AF2',
			viceMainColor: '#2E81EB',
			//字体色
			textColor: '#171424',
			viceTextColor: '#222A41',
			subTextColor: '#818498',
			textColor333: '#333',
			//边框色
			borderColor: '#bababa',
			borderColorE5: 'rgba(229, 229, 229, 0.51)',
			borderColorE5Solid: '#e5e5e5',
			//警告色
			red: '#FF3440',
			green: '#0FBA6A',
			waring: '#FDB600'
		}
	}
})