export const getToken = async () => {
  const { client_id, redirect_uri } = useRuntimeConfig()
  let token:string
  try {
    await new Promise((resolve,reject)=>{
      const codeClient = google.accounts.oauth2.initCodeClient({
        client_id: client_id,
        ux_mode: 'redirect',
        redirect_uri: redirect_uri,
//        include_granted_scopes: false,
        scope: 'https://www.googleapis.com/auth/calendar.readonly',
      })
      console.log(redirect_uri)
      codeClient.requestCode()
    })
  } catch (error) {
    throw error
  }
}


 