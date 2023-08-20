import React, { useState } from 'react'
import logo from '../../assets/Logo_company.png'
import { Layout } from 'antd'
import {useNavigate} from 'react-router-dom'
import { MenuItems } from '../SideMenu/MenuItems'
import { menuItems } from '../SideMenu/MenuItems'
import { UserMenu } from './userMenu'
import { useMediaQuery } from 'react-responsive';

const { Header } = Layout;

export function AppHeader({ onMenuSelect}) {
  const navigate = useNavigate()
  const [selectedIconKey, setSelectedIconKey] = useState(menuItems[0].key); // Inicialmente, seleccionamos el primer icono

  const handleMenuClick = (item) => {
    const selectedItem = menuItems.find((menuItem) => menuItem.key === item.key);
    onMenuSelect(selectedItem.label);
    setSelectedIconKey(item.key); // Actualizamos el icono seleccionado
    navigate(item.key);
  };

  const handleLogout = () => {
    navigate('/');
    console.log('Sesión cerrada');
  }; 

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const appFooterStyles = {
    display: 'flex',
    justifyContent: 'space-between', // Espacio entre elementos
    alignItems: 'center', // Alineación vertical
    padding: '5px', // Espaciado interno
    backgroundColor: '#001529',
    color: 'red',
    marginTop: '63px',
  };

  return (
    <>
    <Header className='AppHeader'>
      <div className='logo'>
          <img src={logo} alt="logotipo"/>
      </div>
      <div>
      {isMobile && <MenuItems  
          menuItems={menuItems} 
          selectedIconKey={selectedIconKey} 
          handleMenuClick={handleMenuClick} 
          horizontal 
        />}
      </div>
      <div>      
        <UserMenu username='Admin' onLogout={handleLogout} />
      </div>
  </Header>
</>
  )
}