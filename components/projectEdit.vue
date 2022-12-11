<script lang="ts" setup>
import { identifier } from '@babel/types';
import { emit } from 'process';
import { Ref, PropType } from 'vue'

const props = defineProps({
    project:{
        type: Object as PropType<Project>,
        required: true,
    },
})

const emit = defineEmits<{
    (e: 'change', updatedProject: Project): void
}>()

const id = ref(props.project.id)
const name = ref(props.project.name)
const client = ref(props.project.client)
const sales = ref(props.project.sales)
const hours = ref(props.project.hours)
const startDate = ref(props.project.startDate)
const endDate = ref(props.project.endDate)

const updatedProject = computed(()=>({
    id: unref(id),
    name: unref(name),
    client: unref(client),
    sales: unref(sales),
    hours: unref(hours),
    startDate: unref(startDate),
    endDate: unref(endDate),
}))

const dateToStringBinding = ( dateRef:Ref<Date> ) => {
    return computed({
        get: function() {
        return [
            (dateRef.value.getFullYear()).toString().padStart(2,'0'),
            (dateRef.value.getMonth()+1).toString().padStart(2,'0'),
            (dateRef.value.getDate()).toString().padStart(2,'0'),
            ].join("-")
        },
        set: function ( newDate:string ) {
            let [year, month, day] = newDate.split("-").map(e=>Number(e))
            dateRef.value = new Date(year, month-1, day)
        }
    })
}
const startDateString = dateToStringBinding(startDate)
const endDateString = dateToStringBinding(endDate)

const onSubmit = () => {
    // console.log("props")
    // console.log(props.project)
    // console.log("updated")
    // console.log(updatedProject.value)
    emit('change', updatedProject.value)

}
 
</script>

<template>
<v-form>
    <v-row>
        <v-col>
            <v-text-field
                label = "案件名"
                v-model="name"
            >
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-text-field
                label = "クライアント名"
                v-model="client"
            >
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-text-field
                label = "受注金額"
                inputmode = "numeric"
                suffix = "円"
                type="number"
                v-model.number = "sales"
            >
            </v-text-field>
        </v-col>
        <v-col>
            <v-text-field
                label="計画稼働時間(h)"
                inputmode="numeric"
                type="number"
                v-model="hours"
            >
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-text-field
                label="開始日"
                type="date"
                v-model="startDateString"
            >
            </v-text-field>
        </v-col>
        <v-col>
            <v-text-field
                label="終了日"
                type="date"
                v-model="endDateString"
            >
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-btn @click="onSubmit">SUBMIT</v-btn>

        </v-col>
    </v-row>
</v-form>
</template>
