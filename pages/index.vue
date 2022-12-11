<template>
  <v-app>
    <v-container>
      <project-edit
        :="{ project } "
        @change="onChange"
      ></project-edit>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
const { project } = useMock()
const onChange = ( updatedProject:Project ) => {
  console.log("oya")
  console.log(updatedProject)
}
</script>