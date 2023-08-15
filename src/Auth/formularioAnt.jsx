import React, { useState } from 'react'
import {Button,Form,Input, Typography, message} from 'antd'
import imagenLogo from '../assets/Logo_company.jpeg'
import './FormularioAnt.css'
import { GoogleBtn } from './GoogleBtn'

export function FormularioAnt({setUser}) {
  const [nombre,setNombre] = useState("")
  const [password,setPassword] = useState("")
  const handleNombreChange=(e)=>{
    setNombre(e.target.value)
  }
  const handlePasswordChange=(e)=>{
      setPassword(e.target.value)
  }
  const login = ()=>{
    if(nombre==''|| password==''){
      message.warning('Please enter password or user')
    }
    message.success('Login Succesful!!')

    setUser([nombre])
    
  }
  return (
    <div className='MainContainer'>
      <div className='CardContainer'>
      <Form className='loginForm' onFinish={login}>
          <img src = {imagenLogo} className='imgLogo' alt="logo"/>
          <Typography.Text style={{fontSize: '22px'}}>
            <strong>Sing up</strong>
          </Typography.Text>
          <Form.Item rules={[
              {
                /*required: true,*/
                type:"email",
                message:"Please enter valid email"
              },
            ]}
            className='Label'
            name="nombre"
          >
            <Input  placeholder='Enter your Email' onChange={handleNombreChange}/>
          </Form.Item>

          <Form.Item rules={[
              {
                /*required: true,*/
                message:"Please enter your password"
              },
            ]}
            className='Label'
            name="password"
          >
            <Input.Password placeholder='Enter password' onChange={handlePasswordChange}/>
          </Form.Item>
          <Button type='primary' htmlType='summit' block>Iniciar sesion</Button>
          <GoogleBtn/>
          <Typography.Text style={{color:'#191970'}}>¿Has olvidado tu contrasña?</Typography.Text>
    </Form>  
      </div>
    </div>
   
  )
}