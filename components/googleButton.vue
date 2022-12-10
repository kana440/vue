<script lang="ts" setup>
import CryptoJS from 'crypto-js';
import 'google.accounts';

const token = useToken()

onMounted(async()=>{
    let localToken  = localStorage.getItem("tokenEncrypted")    
    if(!localToken){
        try {
            const tokenResponse:google.accounts.oauth2.TokenResponse = await new Promise((resolve,reject)=>{
                const tokenClient = google.accounts.oauth2.initTokenClient({
                    client_id: "137883974894-647favgip80lb92ghc7r7stoqadojfjp.apps.googleusercontent.com",
                    scope: 'https://www.googleapis.com/auth/calendar.readonly',
                    callback: (result) => resolve(result),
                    prompt: 'consent',
                    error_callback: (error) => reject(error),
                })
                tokenClient.requestAccessToken()
            })
            token.value = tokenResponse.access_token
            const encryptToken = CryptoJS.AES.encrypt(token.value,"kwgcalendaryuki").toString()
            localStorage.setItem("tokenEncrypted",encryptToken);
        } catch (err) {
            alert("ポップアップを許可してください")
            throw err
        }
    } else {
        let decryptLocalToken = CryptoJS.AES.decrypt(localToken,"kwgcalendaryuki").toString(CryptoJS.enc.Utf8)
        token.value = decryptLocalToken
    }
})
const api = useApi()
const apiget = () =>{
    api.getEvents("primary")
    console.log(token.value)
}

</script>
<template>
    <v-btn @click="apiget">google</v-btn>
</template>