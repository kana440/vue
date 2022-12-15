import { Ref } from 'vue'
export const getEvents = async (token:string, calendarId:string) => {
    const repMax = 10;
    const baseUrl = `https://www.googleapis.com/calendar/v3/calendars/`+unref(calendarId)+`/events?`
    const init = {
      method: 'GET',
      async: true,
      headers: {
          Authorization: 'Bearer ' + unref(token),
          'Content-Type': 'application/json'
      },
      'contentType': 'json'
    }

    let events:Array<Event> = []
    let query = new URLSearchParams({
        maxResults: "250",
    })
    let url = baseUrl + query
    
    try{
        for(let i=0; i<repMax; i++){
            let response = await fetch(baseUrl + query, init)
            let result = await(response).json()
            events = events.concat(result.items)

            if(result.nextPageToken) {
                await new Promise(resolve => setTimeout(resolve, 100))
                query = new URLSearchParams({
                    pageToken: result.nextPageToken,
                })
                url = baseUrl+query
            } else {
                break;
            }
        }
    } catch (error) {

    }

    return events

}