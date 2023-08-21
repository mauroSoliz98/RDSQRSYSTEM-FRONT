import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import { FormularioAnt } from './Auth/formularioAnt'
import Home from './components/Home'
import { AppRoutes } from './components/AppRoutes'

function App() {
  const [user, setUser] = useState('');

    // Este efecto se ejecutará cada vez que 'user' cambie su valor
    useEffect(() => {
      console.log("User array changed:", user);
    }, [user]);

  return(
    <div className={`App ${user.length > 0 ? 'loggedIn' : ''}`}>
      <AppRoutes  user={user} setUser={setUser} />
    </div>
    )
  }
  
  export default App
  
  {/*<div className={`App ${user.length > 0 ? 'loggedIn' : ''}`}>
    {
      !user.length>0
        ?<FormularioAnt setUser={setUser}/>
        :<Home user={user} setUser={setUser}/>
    }
  </div>*/}