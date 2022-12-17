import { Ref, ref, unref, watchEffect } from 'vue'
import { googleApi } from '~/utils/googleApi'
/** counterストア */
export const useGoogleApi = defineStore('googleApi', <T>() => {
  const token = ref("")
  const loading = ref(false)
  const data = ref<T | null>(null)
  const error = ref<unknown | null>(null)
  const calendarId = ref("primary")
 
  async function getToken () {
    token.value = await googleApi.getToken()
  }

  async function getEvents() {
    const events = googleApi.getEvents(token.value, calendarId.value,{})
    return await events
  }

  return {
    data,
    loading,
    error,
    getToken,
    getEvents,
  }
}
)