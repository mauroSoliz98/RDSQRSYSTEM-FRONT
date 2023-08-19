import React from 'react'
import { Breadcrumb, Typography, Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';


export function TopNav({selectedSection}) {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Define el ancho mínimo para la vista de escritorio
  const location = useLocation();

  const goBack = () => {
    window.history.back(); // Retrocede en la historia
  };

  return (
    <div style={{backgroundColor:'white', borderBlockEnd:50}}>
      <div style={{display: 'flex', alignItems: 'baseline'}}>
      {location.pathname === '/home/elementos_listar' && (
            <Button type="link" onClick={goBack} icon={<ArrowLeftOutlined />}>
            </Button>
          )}
      <Breadcrumb style={{margin: '16px 16px',}}>
        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item>{selectedSection}</Breadcrumb.Item>
        {location.pathname === '/home/elementos_listar' && (<Breadcrumb.Item>
            {selectedSection} - CB98
        </Breadcrumb.Item>
  )}
      </Breadcrumb>
      </div>
      
      {isDesktop && <Typography.Title level={3} style={{ margin: '16px' }}>{selectedSection}</Typography.Title>}
     
    </div>
  )
}
