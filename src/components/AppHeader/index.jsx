import React from 'react'
import logo from '../../assets/Logo_company.jpeg'
import { Avatar,Layout, Typography, Popover, Button} from 'antd'
import {UserOutlined,LogoutOutlined} from '@ant-design/icons'
import {useNavigate} from 'react-router-dom'
const { Header } = Layout;

export function AppHeader() {
  const navigate = useNavigate()
  const hadelLogout=()=>{
    navigate('/')
    console.log('Sesion cerrada');
  }  
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
        onClick={hadelLogout}
      >
        Cerrra sesion
      </Button>
    </div>
  )
  return (
    <>
    <Header className='AppHeader'>
      <div className='logo'>
          <img src={logo} alt="logotipo" className='icon' />
      </div>
      <Popover style={{height: 'fit-content', width: 'fit-content'}} placement="bottomRight" arrow = {false} content={content} trigger={'click'}>
        <Button className='UserContainer'>
          <Avatar shape="square" size={30} icon={<UserOutlined />} />
          <Typography.Text style={{ color: 'white', marginLeft: '10px' }}>Admin</Typography.Text>
        </Button>
      </Popover>
  </Header>
</>
  )
}