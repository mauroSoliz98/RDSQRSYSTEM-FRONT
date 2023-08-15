import React, { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined, DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, Space, Button, Table, Col, Row, Modal, message, Tooltip } from 'antd';
import { getBoxes } from '../../API';
import { ButtonContainer } from '../../Styles';
import { FormBoxes } from './FormBoxes';

const { Search } = Input;

export function RegistroCajas() {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [modalTitle, setModalTitle] = useState('');

  // Define una función auxiliar para determinar si es un dispositivo móvil
  const isMobile = window.innerWidth <= 768;
  const isMobileS = window.innerWidth <= 390;


  const columns = [
    {
      title: 'N°',
      dataIndex: 'id',
      render: (text, record, index) => index + 1,
      width: 50, 
      align: 'center', 
    },
    {
      title: 'Nombre caja',
      dataIndex: 'title',
    },
    {
      title: 'Ubicación',
      dataIndex: 'discountedPrice',
      responsive: ['sm'], // Esta columna se mostrará en dispositivos de tamaño md (escritorio) y superiores
    },
    {
      title: 'Propietario',
      dataIndex: 'SAMSUMG',
      responsive: ['md'],
    },
    {
      title: 'Fecha de creación',
      dataIndex: 'discountPercentage',
      responsive: ['md'],
    },
    {
      title: 'Acciones',
      key: 'Actions',
      render: (record) => (
        <Space size="middle">
          <Tooltip title="Editar">
            <Button type="link" icon={<EditOutlined />} onClick={() => showModal('Editar Caja')} />
          </Tooltip>
          <Tooltip title="Eliminar">
            <Button style={{ color: 'red' }} type="ghost" icon={<DeleteOutlined />} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  // Función para renderizar la fila expandible en la tabla
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
    setLoading(true);
    getBoxes().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  const showModal = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    message.success('Se creó una caja correctamente');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /* estilos accciones buscador */
  const containerStyle = {
    flexDirection: window.innerWidth <= 600 ? 'column' : 'row',
    marginBottom: 8,
    display: 'flex',
  };
  
  const searchStyle = {
    flex: '1',
    marginBottom: window.innerWidth <= 600 ? 8 : 0,
    marginRight: window.innerWidth <= 600 ? 0 : 8,
    transition: 'margin 0.3s ease-in-out',
  };
  
  const buttonContainerStyle = {
    alignItems: window.innerWidth <= 600 ? 'flex-start' : 'center',
    justifyContent: 'flex-end',
    display: 'flex',
    flex: '1',
  };
  
  const reportButtonStyle = {
    marginRight: 4,
    width: window.innerWidth <= 600 ? '50%' : 'auto',
  };
  
  const newRecordButtonStyle = {
    marginLeft: 4,
    width: window.innerWidth <= 600 ? '50%' : 'auto',
  };
  
  return (
    <div>
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
                  onClick={() => showModal('Crear Caja')}
                >
                 Nuevo registro
                </Button>
            </div>
          </div>


      <div>
        <Table rowKey={'id'}
          className="custom-table"
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            pageSize: isMobile ? 5 : 10, 
          }}
          expandable={{ expandedRowRender: isMobile ? expandedRowRender : undefined }}
        />
      </div>

      <Modal
        title={modalTitle}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Guardar
          </Button>,
        ]}
      >
        <FormBoxes />
      </Modal>
    </div>
  );
}
