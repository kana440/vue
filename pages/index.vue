<template>
  <v-app>
    <v-container>
      <v-btn @click="onAuth">auth</v-btn>
      <v-btn @click="onChange"></v-btn>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
import { googleApi } from '~~/utils/googleApi';
const a = useMock()
const onChange = ( ) => {
  console.log("oya")
  console.log(a.projectsMass)
}
const onAuth = () => {
  googleApi.getToken()
}
</script>
