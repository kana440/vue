import { getToken } from "./getToken"
import { _getItems } from "./_getItems"

export const googleApi = {
    getToken,
    getEvents: async (
        token:string,
        calendarId:string,
        searchParams:{[key:string]:string}
        ):Promise<Array<Event>> => {
        let query = new URLSearchParams({
            ...searchParams,
            maxResults: "250",
        })
        return await _getItems(token, `https://www.googleapis.com/calendar/v3/calendars/`+calendarId+`/events?`+query)
    },
    getCalendars: async(token:string):Promise<Array<Calendar>> => {
        return await _getItems(token, `https://www.googleapis.com/calendar/v3/users/me/calendarList`)
    }
}