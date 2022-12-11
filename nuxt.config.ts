// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "vuetify/lib/styles/main.sass"
    ],
    build: {
        transpile: ["vuetify"]
    },
    vite: {
        define: {
            "process.env.DEBUG": false
        },
        // for HMR
        server: {
            watch: {
                usePolling: true
            }
        },
    },
    app: {
        head: {
            script: [
                {src: "https://accounts.google.com/gsi/client"},
            ]
        }
    },
    runtimeConfig : {
        public:{
            client_id: process.env.CLIENT_ID,
        },
    },
    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore']
            }
        ]
    ],
    alias: {
        pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
    },
    imports: {
        dirs: [
            'store'
        ],
    },
})
