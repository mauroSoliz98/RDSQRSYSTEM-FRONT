import React from 'react'
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
const { Search } = Input;
function TopButtons({onClick}) {
  return (
    <div style={{ flexDirection: window.innerWidth <= 600 ? 'column' : 'row', marginBottom: 8, display: 'flex' }}>
    <Search
      placeholder="Buscar"
      style={{
        flex: '1',
        marginBottom: window.innerWidth <= 600 ? 8 : 0,
        marginRight: window.innerWidth <= 600 ? 0 : 8,
        transition: 'margin 0.3s ease-in-out',
      }}
    />
    <div style={{ alignItems: window.innerWidth <= 600 ? 'flex-start' : 'center', justifyContent: 'flex-end', display: 'flex', flex: '1' }}>
      <Button type="primary" icon={<PlusOutlined />} onClick={onClick} style={{ marginLeft: 4, width: window.innerWidth <= 600 ? '100%' : 'auto' }}>
        Nuevo registro
      </Button>
    </div>
  </div>
  )
}

export default TopButtons