import React, { useState } from 'react'
import './App.css'
import { FormularioAnt } from './Auth/formularioAnt'
import Home from './components/Home'

function App() {
  const [user,setUser] = useState([])
  return(
    <div className={`App ${user.length > 0 ? 'loggedIn' : ''}`}>
      {
        !user.length>0
          ?<FormularioAnt setUser={setUser}/>
          :<Home user={user} setUser={setUser}/>
      }
    </div>
  )
}

export default App