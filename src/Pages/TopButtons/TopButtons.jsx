import React from 'react'
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
const { Search } = Input;
function TopButtons({onClick}) {
  return (
    <div style={containerStyle}>
            <Search style={searchStyle} placeholder="Buscar" />
            <div style={buttonContainerStyle}>
                <Button style={reportButtonStyle} type="default" icon={<DownloadOutlined />}>
                  Reporte
                </Button>
                <Button
                  style={newRecordButtonStyle}
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={onClick}
                >
                 Nuevo registro
                </Button>
            </div>
    </div>
  )
}

export default TopButtons