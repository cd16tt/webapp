/// <reference types="vitest" />
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [UnoCSS(), react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './tests/setup.ts',
		include: ['./src/**/*.spec.tsx'],
	},
	resolve: {
		alias: {
			'#/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/',
			'#assets/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/assets/',
			'#components/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/components/',
			'#config/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/config/',
			'#contracts/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/contracts/',
			'#domains/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/domains/',
			'#hooks/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/hooks/',
			'#lib/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/lib/',
			'#providers/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/providers/',
			'#routes/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/routes/',
			'#stores/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/stores/',
			'#tests/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/tests/',
			'#types/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/types/',
			'#utils/': path.resolve(path.dirname(fileURLToPath(import.meta.url))) + '/src/utils/',
		},
	},
	server: {
		host: true,
	},
});
