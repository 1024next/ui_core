
const sw = process.env.SW === 'true'
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	target: 'static',
	devtools: { enabled: true },
	devServer: {
		host: '0.0.0.0',
		port: 3002, // 你可以根据需要更改端口
	  },
	nitro: {
		devProxy: {
		  "/api": {
			target: "http://localhost:4000/api", // 这里是接口地址
			changeOrigin: true,
			prependPath: true,
		  },
		},
	 },
	ssr:false,
	components: true,
	router: {
		options:{
			hashMode: true
		},
		middleware: ['auth']
	},
	modules:[
		'@pinia/nuxt',
		'@vite-pwa/nuxt',
	],
	css: [
		// 在这里可以添加全局的样式文件
		'~/styles/main.scss',
	],
	build: {
		loaders: {
		  scss: { }
		}
	  }
	,
	pwa: {
		strategies: sw ? 'injectManifest' : 'generateSW',
		srcDir: sw ? 'service-worker' : undefined,
		filename: sw ? 'sw.ts' : undefined,
		registerType: 'autoUpdate',
		manifest: {
		name: "你的PWA应用名称",
  		short_name: "简短名称",
  			start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#000000",
  form_factor: "wide",  // 添加此配置来支持宽屏设备
  icons: [
    {
      "src": "/pwa-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"  // 你可以根据需要设置为"maskable"或"any"
    },
    {
      "src": "/pwa-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"  // 你可以根据需要设置为"maskable"或"any"
    }
  ]
		},
		workbox: {
		  globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
		},
		injectManifest: {
		  globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
		},
		client: {
		  installPrompt: true,
		  // you don't need to include this: only for testing purposes
		  // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
		  periodicSyncForUpdates: 3600,
		},
		devOptions: {
		  enabled: true,
		  suppressWarnings: true,
		  navigateFallback: '/',
		  navigateFallbackAllowlist: [/^\/$/],
		  type: 'module',
		},
	  },

	
})
