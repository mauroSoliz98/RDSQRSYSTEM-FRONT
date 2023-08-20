import React from 'react'
import { Avatar,Layout, Typography, Popover, Button} from 'antd'
import {UserOutlined,LogoutOutlined} from '@ant-design/icons'
import {useNavigate} from 'react-router-dom'

export function UserMenu({ username, onLogout }) {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    console.log('Sesión cerrada');
    onLogout(); // Llama a la función proporcionada en las propiedades
  };

  const content = (
    <div>
      <Button  
        style={{ 
                  border:'none', 
                  backgroundColor:'transparent',
                  height: 'fit-content', 
                  width: 'fit-content'
                }} 
        icon={<LogoutOutlined />}
        onClick={handleLogout}
      >
        Cerrra sesion
      </Button>
    </div>
  )
  return (
    <div className='UserMenu'>
    <Popover  style={{height: 'fit-content', width: 'fit-content'}} placement="bottomRight" arrow = {false}  content={content} trigger='click'>
      <Button className='UserContainer'>
        <Avatar shape='square' size={30} icon={<UserOutlined />} />
        <Typography.Text style={{ color: 'white', marginLeft: '10px' }}>{username}</Typography.Text>
      </Button>
    </Popover>
  </div>
  )
}