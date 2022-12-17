export const _getItems = async <T>(token:string, url:string) => {
    const repMax = 10;
    const init = {
      method: 'GET',
      async: true,
      headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
      },
      'contentType': 'json'
    }

    let items:Array<T> = []
    let query = new URLSearchParams({
        maxResults: "250",
    })
    
    try{
        for(let i=0; i<repMax; i++){
            let response = await fetch(url + query, init)
            let result = await(response).json()
            items = items.concat(result.items)

            if(result.nextPageToken) {
                await new Promise(resolve => setTimeout(resolve, 100))
                query = new URLSearchParams({
                    pageToken: result.nextPageToken,
                })
                url = url + query
            } else {
                break;
            }
        }
    } catch (error) {

    }

    return items

}