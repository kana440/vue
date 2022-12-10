<template>
  <project-edit :project="project"></project-edit>
</template>

<script lang="ts" setup>
const mock= useMock()
const project = mock.project
</script>