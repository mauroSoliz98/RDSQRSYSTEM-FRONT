import React, { useEffect, useState} from 'react'
import { Space, Button, Table, Modal, Tooltip } from 'antd'
import {EditOutlined,DeleteOutlined} from '@ant-design/icons';
import TopButtons from '../TopButtons/TopButtons';

export function Elementos() {
  const [loading, setLoading] = useState(false)
  const [dataSource, setDataSource] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableHeight, setTableHeight] = useState(0);
  const data = [
    {
      id:'1',
      title:'Smartphones',
      description:'Celulares inteligentes de diversas marcas',
      box:'C12',
      owner:'Galindo Erika',
      category:'Tecnologia'
    },
    {
      id:'2',
      title:'Tubos',
      description:'Tubos de plastico',
      box:'C23',
      owner:'Brito Alan',
      category:'Plomeria'
    },
    {
      id:'3',
      title:'Lamparas',
      description:'Lamparas de dormitorio',
      box:'C50',
      owner:'Quito Esteban',
      category:'Muebleria'
    },
  ]


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
      dataIndex:'box'
    },
    {
      title:'Propietario',
      dataIndex:'owner',
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
      <TopButtons onClick={() => showModal('Crear Elemento')}/>
        <div>
        <Table rowKey={'id'}
          loading={loading}
          columns={columns}
          dataSource={data}
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
