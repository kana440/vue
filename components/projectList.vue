<script lang="ts" setup>
import {mdiPencil,mdiTrashCan} from '@mdi/js'
const { projects }  = defineProps({
    projects: Array<Project>
})

const onEditProject = (project:Project) => {
    console.log(project)
}
const onDeleteProject = (project:Project) => {
    console.log(project)
}
console.log(projects)

</script>
<template>
<v-table>
    <thead>
        <tr>
            <th class="text-left">
                案件名
            </th>
            <th class="text-left">
                クライアント
            </th>
            <th class="text-left">
                売上額
            </th>
            <th>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr
            v-for="project in projects"
            :key="project.id"
            >
            <td>{{project.name}}</td>
            <td>{{project.client}}</td>
            <td>{{project.sales}}</td>
            <td class="text-right">
                <div
                    style="cursor: pointer"
                    class="d-inline-block"
                    @click="onEditProject(project)"
                >
                <v-icon :icon="mdiPencil"></v-icon>
                </div>
                <div
                    class="d-inline-block"
                    @click="onDeleteProject(project)"
                >
                <v-icon :icon="mdiTrashCan"></v-icon>
                </div>
            </td>
        </tr>
    </tbody>
</v-table>
</template>
