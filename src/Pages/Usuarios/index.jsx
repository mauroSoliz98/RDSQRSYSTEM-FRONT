import React, { useEffect, useState} from 'react'
import { Input, Space, Button, Table, Col, Row, Modal, Tooltip, Tag } from 'antd'
import {EditOutlined,DeleteOutlined,DownloadOutlined,PlusOutlined } from '@ant-design/icons';
import { render } from 'react-dom';
import TopButtons from '../TopButtons/TopButtons';
import { FormUsers } from './FormUsers';
const { Search } = Input;

export function Usuarios() {
  const [loading, setLoading] = useState(false)
  const [dataSource, setDataSource] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const data = [
    {
      id: '1',
      username: 'Egal92',
      email: 'Egal92@gmail.com',
      firstName: 'Erika',
      lastName: 'Galindo',
      roles: ['admin','devloper'],
    },
    {
      id: '2',
      username: 'Dalbri96',
      email: 'Dalbri96@gmail.com',
      firstName: 'Alan',
      lastName: 'Brito',
      roles: ['gerente'],
    },
    {
      id: '3',
      username: 'Esqui76',
      email: 'Esqui76@gmail.com',
      firstName: 'Esteban',
      lastName: 'Quito',
      roles: ['jefe de planta', 'encargado'],
    },
  ];

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
      dataIndex:'roles',
      responsive: ['md'],
      key: 'roles', 
      render: (roles)=>{
        return(
          <>
          {roles.map((rol)=>(
            <Tag color='blue' key={rol}>
              {rol}
            </Tag>
          ))}
          </>
        )
      }
    },
    {
      title:'Acciones',
      key: 'Actions',
      render:(record)=>(
        <Space size="middle">
          <Tooltip title="Editar">
              <Button type="link" icon={<EditOutlined />} onClick={() => showModal('Editar Usuario')}/>
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

  const showModal = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };
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
          dataSource={data}
          pagination={{
            pageSize: isMobile ? 5 : 8, 
          }}
          expandable={{ expandedRowRender: isMobile ? expandedRowRender : undefined }}
        />
      </div>

        <Modal title={modalTitle} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <FormUsers CancelButton={handleCancel}/>
      </Modal>
    </div>
  )
}



