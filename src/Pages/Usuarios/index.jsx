import React, { useEffect, useState} from 'react'
import { Input, Space, Button, Table, Col, Row, Modal, Tooltip, Tag } from 'antd'
import {EditOutlined,DeleteOutlined,DownloadOutlined,PlusOutlined } from '@ant-design/icons';
import { render } from 'react-dom';
import TopButtons from '../TopButtons/TopButtons';
const { Search } = Input;

export function Usuarios() {
  const [loading, setLoading] = useState(false)
  const [dataSource, setDataSource] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      title:'Usuario',
      dataIndex:'username'
    },
    {
      title:'Correo',
      dataIndex:'email',
      responsive: ['md'],
    },
    {
      title:'Nombre(s)',
      dataIndex:'firstName',
      responsive: ['md'],
    },
    {
      title:'Apellido(s)',
      dataIndex:'lastName',
      responsive: ['md'],
    },
    {
      title:'Roles',
      dataIndex:'eyeColor',
      responsive: ['md'],
      /*key: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
              <Tag color= 'blue' key={tag}>
                {tag}
              </Tag>
           
          })}
        </>
      ),*/
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
              <Button style={{color:"red"}} type="ghost" icon={<DeleteOutlined />}/>
          </Tooltip>
        </Space>
      ),
    }
  ]

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
    getUsers().then(res=>{
      setDataSource(res.users)
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
       <TopButtons onClick={() => showModal('Crear Usuario')}/>
        <div>
        <Table rowKey={'id'}
          className="custom-table"
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            pageSize: isMobile ? 5 : 8, 
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



