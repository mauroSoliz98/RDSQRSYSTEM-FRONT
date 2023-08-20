import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RegistroCajas } from '../../Pages/Registro_cajas'
import { Elementos } from '../../Pages/Elementos'
import { Escanear } from '../../Pages/Escanear'
import { Reportes } from '../../Pages/Reportes'
import { Usuarios } from '../../Pages/Usuarios'
import Home from '../Home'
import { FormularioAnt } from '../../Auth/formularioAnt'
import ElementosListar from '../../Pages/Registro_cajas/ElementosListar'


export function AppRoutes({ user, setUser}) {

  return (
    <div>
        <Routes>
        <Route path='/' element={<FormularioAnt setUser={setUser} /> } />
          <Route path='home' element={<Home  user={user} />}>
            <Route index element={<RegistroCajas/>}/>
            <Route path='elementos' element={<Elementos/>}/>
            <Route path='escanear' element={<Escanear/>}/>
            <Route path='usuarios' element={<Usuarios/>}/>
            <Route path='reportes' element={<Reportes/>}/>
            <Route path='elementos_listar' element={<ElementosListar/>}/>
          </Route>
        </Routes>
    </div>
  )
}