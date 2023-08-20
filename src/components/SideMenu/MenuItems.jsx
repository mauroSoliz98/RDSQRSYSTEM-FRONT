import React from 'react';
import {
  BoxPlotOutlined,
  ProfileOutlined,
  QrcodeOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Menu} from 'antd';

export const menuItems = [
  {
    key: '/home',
    label: 'Registro de cajas',
    icon: <BoxPlotOutlined />,
  },
  {
    key: '/home/elementos',
    label: 'Elementos',
    icon: <ProfileOutlined />,
  },
  {
    key: '/home/escanear',
    label: 'Escanear',
    icon: <QrcodeOutlined />,
  },
  {
    key: '/home/usuarios',
    label: 'Usuarios',
    icon: <TeamOutlined />,
  },
  /*{
    key: '/reportes',
    label: 'Reportes',
    icon: <ScheduleTwoTone />,
  },*/
];

export function MenuItems({  menuItems, selectedIconKey, handleMenuClick, horizontal }) {

  const menuStyles = {
    width:  horizontal ? '100%' : 'auto', // Abarcar todo el ancho
    justifyContent: horizontal ? 'center' : 'none', // Centrado si es horizontal, inicio si es vertical
    backgroundColor: horizontal ? '#001529' : '#ffffff',
    color: horizontal ? '#ffffff' : 'rgba(0, 0, 0, 0.88)',


  };
  
  const itemStyles = {
    width: horizontal ? '15%' : 'auto',
    justifyContent: horizontal ? 'center' : 'none', // Centrado si es horizontal, inicio si es vertical
  };
  return (
      <Menu
        onClick={handleMenuClick}
        theme= "light"
        mode={horizontal ? 'horizontal' : 'inline'} // Cambia el modo según la prop horizontal
        style={menuStyles}
        >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}  style={itemStyles}>
            {horizontal ? null : item.label} 
          </Menu.Item>
        ))}
      </Menu>
  );
}
