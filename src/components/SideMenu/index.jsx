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
    key: '/registro_cajas',
    label: 'Registro de cajas',
    icon: <BoxPlotOutlined />,
  },
  {
    key: '/elementos',
    label: 'Elementos',
    icon: <ProfileOutlined />,
  },
  {
    key: '/escanear',
    label: 'Escanear',
    icon: <QrcodeOutlined />,
  },
  {
    key: '/usuarios',
    label: 'Usuarios',
    icon: <TeamOutlined />,
  },
  /*{
    key: '/reportes',
    label: 'Reportes',
    icon: <ScheduleTwoTone />,
  },*/
];

export function SideMenu({ onMenuSelect }) {
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
    className='web'
      theme='light'
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuFoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
      <Menu
        onClick={handleMenuClick}
        theme="light"
        mode="inline" // Cambia el modo según el estado colapsado
        selectedKeys={[selectedIconKey]}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}
