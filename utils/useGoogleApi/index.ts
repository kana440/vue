import { Ref, ref, unref, watchEffect } from 'vue'
import { getEvents as _getEvents } from './getEvents'
import { getToken as _getToken } from './getToken'
/** counterストア */
export const useGoogleApi = defineStore('googleApi', <T>() => {
  const token = ref("")
  const loading = ref(false)
  const data = ref<T | null>(null)
  const error = ref<unknown | null>(null)
  const calendarId = ref("primary")
 
  async function getToken () {
    token.value = await _getToken()
  }

  async function getEvents() {
    const events = _getEvents(token.value, calendarId.value)
    console.log(await events)
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