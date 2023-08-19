import React, { useState } from 'react'
import {Button,Form,Input, Typography, message} from 'antd'
import imagenLogo from '../assets/Logo_company.jpeg'
import './FormularioAnt.css'
import {useNavigate} from 'react-router-dom'
import App from '../App'

export function FormularioAnt() {
  const [nombre,setNombre] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const handleNombreChange=(e)=>{
    setNombre(e.target.value)
  }
  const handlePasswordChange=(e)=>{
      setPassword(e.target.value)
  }
  const login = ()=>{
    if (nombre.length > 0 && password === '123') {
      message.success('Login successful!');
      navigate('/home');
    } else {
      message.error('Invalid credentials');
    }
    
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
          <Typography.Text style={{color:'#191970'}}>¿Has olvidado tu contrasña?</Typography.Text>
    </Form>  
      </div>
    </div>
   
  )
}