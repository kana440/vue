
import CryptoJS from 'crypto-js'
export const getToken = async ():Promise<string> => {
  let token:string = ""
  const { client_id, encryptKey } = useRuntimeConfig()
  let localToken  = localStorage.getItem("tokenEncrypted")    
  console.log(localToken)
  if(!localToken){
    try {
      const tokenResponse:google.accounts.oauth2.TokenResponse = await new Promise((resolve,reject)=>{
        const tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: client_id,
          scope: 'https://www.googleapis.com/auth/calendar.readonly',
          callback: (result) => resolve(result),
          prompt: 'consent',
          error_callback: (error) => reject(error),
        })
        tokenClient.requestAccessToken()
      })
      token = tokenResponse.access_token
      const encryptToken = CryptoJS.AES.encrypt(token,encryptKey).toString()
      localStorage.setItem("tokenEncrypted",encryptToken);
    } catch (error) {

    }
  } else {
      let decryptLocalToken = CryptoJS.AES.decrypt(localToken,encryptKey).toString(CryptoJS.enc.Utf8)
      token = decryptLocalToken
  } 
  return token
}


 