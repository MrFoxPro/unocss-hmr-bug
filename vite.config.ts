import { defineConfig } from 'vite'
import ViteSolid from 'vite-plugin-solid'
import ViteUnoCss from 'unocss/vite'
import { presetUno, presetIcons, presetAttributify, transformerCompileClass, transformerVariantGroup, transformerDirectives } from "unocss"

export default defineConfig({
	plugins: [
		ViteUnoCss({
			envMode: "dev",
			postcss: false,
			mode: "global",
			presets: [
				presetUno(),
				presetAttributify(),
				presetIcons({
					extraProperties: {
						'display': 'inline-block',
						'vertical-align': 'middle',
					},
				}),
			],
			transformers: [
				transformerDirectives(),
				transformerVariantGroup(), // causes flickering in dev mode after first load idk why
				transformerCompileClass({ classPrefix: "u" }), // causes flickering in dev mode after first load idk why
			]
		}),
		ViteSolid({
			dev: true,
			hot: true,
			solid: {
				contextToCustomElements: false,
				wrapConditionals: false,
				generate: "dom"
			}
		}),
	],
	css: {
		modules: false,
		transformer: "lightningcss",
		lightningcss: {
			// https://lightningcss.dev/transpilation.html#browser-targets
			targets: {
				chrome: 110 << 16,
				firefox: 110 << 16,
				ios_saf: (15 << 16) | (4 << 8),
			},
			drafts: {
				customMedia: true,
			},
		},
	},
	build: {
		target: 'esnext',
	},
})
