import React from 'react'
import logo from '../../assets/Logo_company.jpeg'
import { Avatar,Layout, Typography} from 'antd'
import {UserOutlined} from '@ant-design/icons'
const { Header } = Layout;

export function AppHeader() {
  return (
      <Header className='AppHeader'>
        <div className='logo'>
            <img src={logo} alt="logotipo" className='icon' />
        </div>
        <div className='UserContainer'>
          <Avatar shape="square" size={60} icon={<UserOutlined />} />
          <Typography.Text style={{color:'white'}}>Admin</Typography.Text>
        </div>
    </Header>
  )
}