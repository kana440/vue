<script lang="ts" setup>
    const { client_id, client_secret, redirect_uri } = useRuntimeConfig()
    const route = useRoute()
    const params:{[key:string]: string} = {
        authuser: typeof route.params.authuser == "string" ? route.params.authuser: 'array',
        code: typeof route.params.code == "string" ? route.params.code: 'array',
        hd: typeof route.params.hd == "string" ? route.params.hd: 'array',
        prompt: typeof route.params.prompt == "string" ? route.params.prompt: 'array',
        scope: typeof route.params.scope == "string" ? route.params.scope: 'array',
        state: typeof route.params.state == "string" ? route.params.state: 'array',
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
        console.log(result)
    }

</script>
<template>
    <div>
        redirected
        <div>{{params.code}}</div>
        <v-btn @click="getToken"></v-btn>
    </div>
</template>
