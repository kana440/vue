<template>
  <v-app>
    <google-button></google-button>
    <v-btn @click="request">req</v-btn>
    <project-edit :project="project"></project-edit>
    <project-edit :project="project"></project-edit>
    <div>aa</div>
  </v-app>
</template>

<script lang="ts" setup>
const mock= useMock()
const project = mock.project
const token = useToken()
const api = useApi()
const request = async() => {
  console.log(await api.getEvents("primary"))
}
</script>