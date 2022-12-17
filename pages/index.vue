<template>
  <v-app>
    <v-container>
      <v-btn @click="onAuth">auth</v-btn>
      <v-btn @click="onChange">change</v-btn>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
import { googleApi } from '~~/utils/googleApi';
const store = useGoogleApi()
const a = useMock()
const onChange = ( ) => {
  console.log("oya")
  alert(store.token)
}
const onAuth = () => {
  googleApi.getToken()
}
</script>
