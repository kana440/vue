export const useApi = () => {
    const token = useToken()
    const client_id = "137883974894-647favgip80lb92ghc7r7stoqadojfjp.apps.googleusercontent.com"
    const config = {
        client_id,
        scope: [
            'https://www.googleapis.com/auth/calendar',
            'https://www.googleapis.com/auth/calendar.readonly',
        ],
        ux_mode: 'popup',
    }
    let status:string = "no"
    const getEvents = async (calendar:string):Promise<Array<Event>> => {
        const repMax = 10;
        const baseUrl = `https://www.googleapis.com/calendar/v3/calendars/`+calendar+`/events?`
        const init = {
            method: 'GET',
            async: true,
            headers: {
                Authorization: 'Bearer ' + token.value,
                'Content-Type': 'application/json'
            },
            'contentType': 'json'
        }

        let events:Array<Event> = []
        let query = new URLSearchParams({
            maxResults: "250",
        })
        let url = baseUrl + query
        
        alert(token)
        for(let i=0; i<repMax; i++){
            let response = await fetch(baseUrl + query, init)
            let result = await(response).json()
            events = events.concat(result.items)

            if(result.nextPageToken) {
                await new Promise(resolve => setTimeout(resolve, 1000))
                query = new URLSearchParams({
                    pageToken: result.nextPageToken,
                })
                url = baseUrl+query
            } else {
                break;
            }
        }

        return events
    }

    return {
        status,
        getEvents,
    }
}