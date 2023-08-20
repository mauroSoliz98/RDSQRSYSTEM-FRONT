import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItems } from '../SideMenu/MenuItems';
import { menuItems } from '../SideMenu/MenuItems';
import logo from '../../assets/Logo_company.jpeg';
import { UserMenu } from '../AppHeader/userMenu';

export function AppFooter({ onMenuSelect }) {
  const navigate = useNavigate();
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
    <div style={appFooterStyles} className='app-menu'  >
       <div>
          <img src={logo} alt="logotipo" className='icon' />
      </div>
      <div>
        <MenuItems  
          menuItems={menuItems} 
          selectedIconKey={selectedIconKey} 
          handleMenuClick={handleMenuClick} 
          horizontal 
        />
      </div>
      <div>      
        <UserMenu username='Admin' onLogout={handleLogout} />
      </div>
    </div>
  );
}

