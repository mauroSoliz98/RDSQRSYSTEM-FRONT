import React, { useEffect, useState} from 'react'
import { Input, Space, Button, Table, Modal, Tooltip } from 'antd'
import {EditOutlined,DeleteOutlined,DownloadOutlined,PlusOutlined } from '@ant-design/icons';
import { getProducts } from '../../API'
const { Search } = Input;

export function Elementos() {
  const [loading, setLoading] = useState(false)
  const [dataSource, setDataSource] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableHeight, setTableHeight] = useState(0);


  // Define una función auxiliar para determinar si es un dispositivo móvil
  const isMobile = window.innerWidth <= 768;

  const columns=[
    {
      title:'N°',
      dataIndex:'id',
      render: (text, record, index) => index + 1,
      width: 50, 
      align: 'center', 
    },
    {
      title:'Elemento',
      dataIndex:'title'
    },
    {
      title:'Descripcion',
      dataIndex:'description',
      responsive: ['md'], 
    },
    {
      title:'Caja',
      dataIndex:'stock'
    },
    {
      title:'Propietario',
      dataIndex:'brand',
      responsive: ['md'], 
    },
    {
      title:'Categoria',
      dataIndex:'category',
      responsive: ['md'], 
    },
    {
      title:'Acciones',
      key: 'Actions',
      render:(record)=>(
        <Space size="middle">
          <Tooltip title="Editar">
              <Button type="link" icon={<EditOutlined />}/>
          </Tooltip>
          <Tooltip title="Eliminar">
              <Button style={{color:"red" }} type="ghost" icon={<DeleteOutlined />}/>
          </Tooltip>
        </Space>
      ),
    }
  ];

  const expandedRowRender = (record) => {
    const responsiveColumns = columns.filter((col) => col.responsive && col.responsive.includes('md'));

    return (
      <div>
        {responsiveColumns.map((col) => (
          <p key={col.dataIndex}>
           <strong>{col.title}:</strong> {record[col.dataIndex]}
          </p>
        ))}
        {/* Agrega aquí el contenido adicional que deseas mostrar en la fila expandible */}
      </div>
    );
  };

  useEffect(() => {
    setLoading(true)
    getProducts().then(res=>{
      setDataSource(res.products)
      setLoading(false)
    }) 
  }, [])
  const showModal=()=>{
    setIsModalOpen(true);
  }
  const handleOk=()=>{
    setIsModalOpen(false);
  }
  const handleCancel=()=>{
    setIsModalOpen(false);
  }
  
  return (
    <div>
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
            <Button type="default" icon={<DownloadOutlined />} style={{ marginRight: 4, width: window.innerWidth <= 600 ? '50%' : 'auto' }}>
                Reporte
            </Button>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal('Crear Caja')} style={{ marginLeft: 4, width: window.innerWidth <= 600 ? '50%' : 'auto' }}>
                Nuevo registro
              </Button>
          </div>
      </div>
        <div>
        <Table rowKey={'id'}
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            pageSize: isMobile ? 10 : 10, 
          }}
          scroll={{
            y: 550
          }}
          expandable={{ expandedRowRender: isMobile ? expandedRowRender : undefined }}
        />
      </div>
        <Modal title="Nueva Caja" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h1>Hola mundo</h1>
      </Modal>
    </div>
  )
}
