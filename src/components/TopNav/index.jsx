import React from 'react'
import { Breadcrumb, Typography } from 'antd'
import { useMediaQuery } from 'react-responsive';


export function TopNav({selectedSection}) {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // Define el ancho mínimo para la vista de escritorio

  return (
    <div style={{backgroundColor:'white', borderBlockEnd:50}}>
      <Breadcrumb style={{margin: '16px 16px',}}>
        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item>{selectedSection}</Breadcrumb.Item>
      </Breadcrumb>
      {isDesktop && <Typography.Title level={3} style={{ margin: '16px' }}>{selectedSection}</Typography.Title>}
    </div>
  )
}
