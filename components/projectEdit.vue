<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
    project:{
        type: Object as PropType<Project>,
        required: true,
    },
})

//年月	案件名	クライアント名	受注金額	稼働時間	時給
</script>

<template>
<v-form>
    <v-row>
        <v-text-field
            v-model=project.name
        >
        </v-text-field>
    </v-row>
</v-form>
</template>
