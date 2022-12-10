<script lang="ts" setup>
import { mdiCircle } from '@mdi/js'
const props = defineProps({
    items: Array<{name:string, color:string}>,
})

</script>
<template>
<v-app><v-container>
<v-form>
    <div v-for="item in items">
        <v-row>
            <v-text-field
                v-model=item.name
            >
            <prepend-icon>
                <v-icon #prepend-icon :icon="mdiCircle" :color="item.color"></v-icon>
            </prepend-icon>
            </v-text-field>
        </v-row>
    </div>
</v-form>
</v-container></v-app>
</template>
