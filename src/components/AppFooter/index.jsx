import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  BoxPlotOutlined,
  ProfileOutlined,
  QrcodeOutlined,
  TeamOutlined,
  ScheduleTwoTone,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const menuItems = [
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

export function AppFooter({ onMenuSelect }) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [selectedIconKey, setSelectedIconKey] = useState(menuItems[0].key); // Inicialmente, seleccionamos el primer icono

  const handleMenuClick = (item) => {
    const selectedItem = menuItems.find((menuItem) => menuItem.key === item.key);
    onMenuSelect(selectedItem.label);
    setSelectedIconKey(item.key); // Actualizamos el icono seleccionado
    navigate(item.key);
  };

  return (
    <Sider
    className='app-menu'
    width={'100vw'}
      theme='light'
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{display: 'flex',justifyContent: 'center'}}
    >
      
      <Menu
        onClick={handleMenuClick}
        theme="light"
        mode="horizontal" // Cambia el modo según el estado colapsado
        selectedKeys={[selectedIconKey]}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
          </Menu.Item>
        ))}
      </Menu>
 
    </Sider>
  );
}

