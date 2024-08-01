import { presetForms } from '@julr/unocss-preset-forms';
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import { extractorArbitraryVariants } from '@unocss/extractor-arbitrary-variants';

export default defineConfig({
	content: {
		filesystem: ['src/**/*.tsx', 'index.html'],
		pipeline: {
			include: ['src/**/*.tsx', 'index.html'],
		},
	},
	rules: [['decoration-skip-ink', { 'text-decoration-skip-ink': 'none' }]],
	extendTheme: [
		(theme) => ({
			...theme,
			colors: {
				...theme.colors,
				brand: theme.colors.purple,
				neutral: theme.colors.slate,
				success: theme.colors.emerald,
				warning: theme.colors.amber,
				danger: theme.colors.red,
				info: theme.colors.sky,
			},
		}),
	],
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				primary: { name: 'Inter', weights: ['400', '500', '600', '700'] },
				secondary: { name: 'Phudu', weights: ['400', '500', '600', '700'] },
			},
		}),
		presetAttributify(),
		presetTypography(),
		presetForms(),
		presetIcons({
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'middle',
			},
		}),
		presetRemToPx(),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	extractors: [extractorArbitraryVariants],
});
