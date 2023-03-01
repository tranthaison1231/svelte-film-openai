import { sveltekit } from '@sveltejs/kit/vite'
import {
	extractorSvelte,
	presetAttributify,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'
import unocss from 'unocss/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
	plugins: [
		unocss({
			presets: [
				presetUno({
					attributifyPseudo: true
				}),
				presetTypography(),
				presetAttributify()
			],
			transformers: [transformerDirectives(), transformerVariantGroup()],
			extractors: [extractorSvelte]
		}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default config
