import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RegistroCajas } from '../../Pages/Registro_cajas'
import { Elementos } from '../../Pages/Elementos'
import { Escanear } from '../../Pages/Escanear'
import { Reportes } from '../../Pages/Reportes'
import { Usuarios } from '../../Pages/Usuarios'
import Home from '../Home'
import { FormularioAnt } from '../../Auth/formularioAnt'


export function AppRoutes() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<FormularioAnt/> } />
          <Route path='home' element={<Home/>}>
            <Route index element={<RegistroCajas/>}/>
            <Route path='elementos' element={<Elementos/>}/>
            <Route path='escanear' element={<Escanear/>}/>
            <Route path='usuarios' element={<Usuarios/>}/>
            <Route path='reportes' element={<Reportes/>}/>
          </Route>
        </Routes>
    </div>
  )
}