import React from 'react'
import { useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'
export function GoogleBtn({setUser}) {
  const clientID = "765294758132-s33nuo370am9hv8jgn5tp2dlgl8fkrqo.apps.googleusercontent.com"
  useEffect(()=>{
    const start =()=>{
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client: auth2", start)
  },[])

  const onSuccess = (response)=>{
    setUser(response.googleId)
    console.log("El usuario se logeo correctamente");

  }
  const onFailure = ()=>{
    console.log("Algo anda mal con el usuario");
  }

  return ( 
    <div className='GoogleContainer'>
      <GoogleLogin
        clientId={clientID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_policy'}
      />
    </div>
  )
}