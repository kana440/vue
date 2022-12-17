<script lang="ts" setup>
    import { useRoute } from 'vue-router';

    const store = useGoogleApi()
    const { client_id, client_secret, redirect_uri } = useRuntimeConfig()
    const route = useRoute()
    const router = useRouter()

    const params:{[key:string]:string} = {
        authuser: route.query.code?.toString() || '',
        code: route.query.code?.toString() || '',
        hd: route.query.code?.toString() || '',
        prompt: route.query.code?.toString() || '',
        scope: route.query.scope?.toString() || '',
    }

    async function getToken() {
        const url = `https://oauth2.googleapis.com/token`
        const urlSearchParams = new URLSearchParams({
            client_id: client_id,
            client_secret: client_secret,
            code: params.code,
            grant_type: 'authorization_code',
            redirect_uri: redirect_uri,
        })
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: urlSearchParams,
        }
        const response = await fetch(url, config)
        const result = await response.json()
        store.$patch({token: result.access_token})
        alert(result.access_token)
        alert(store.token)
        router.push('/')
        console.log(result)
    }
    function log () {
        console.log(route.query)
    }

</script>
<template>
    <div>
        redirected
        <div>{{params.code}}</div>
        <v-btn @click="getToken">getToken</v-btn>
        <v-btn @click="log">log</v-btn>
    </div>
</template>
