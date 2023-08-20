import React, { useState } from 'react';
import {
  MenuFoldOutlined
} from '@ant-design/icons';
import { Layout, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { menuItems } from './MenuItems'; // Importa el array menuItems

const { Sider } = Layout;

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
      <MenuItems menuItems={menuItems} selectedIconKey={selectedIconKey} handleMenuClick={handleMenuClick} />
    </Sider>
  );
}
