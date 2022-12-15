<template>
  <v-app>
    <v-container>
      <piniaTest/>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
const { projects } = useMock()
const onChange = ( updatedProject:Project ) => {
  console.log("oya")
  console.log(updatedProject)
}
</script>