import React from 'react';
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, Button, DatePicker } from 'antd';
import { ButtonContainer } from '../../Styles';
import dayjs from 'dayjs';
import { useMediaQuery } from 'react-responsive';

const { Search } = Input;

function TopButtons({ onClick }) {
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define el ancho máximo para la vista móvil
  
  const container = {
    
    display: isMobile ? 'grid' : 'flex',
    justifyContent: isMobile ? 'none' : 'space-between',
    margin: '10px 0',
  };
  const searchContainerStyle = {
    display: isMobile ? 'flex' : 'flex',
    gap: '8px',

  };

  const buttonContainerStyle = {
    textAlign: isMobile ? 'left' : 'left',
    display: isMobile ? 'fex' : 'flex',
    flexDirection: isMobile ? 'none' : 'none',
    gap: '8px',

  };

  const buttonStyle = {
    width: isMobile ? '50%' : 'auto', // Ajusta el ancho del botón
    marginTop: isMobile ? '10px' : '0px',
    gap: '8px',
  };

  return (
    <div style={container}>
      <div style={searchContainerStyle}>
        <Search placeholder="Buscar" />
        <DatePicker
            defaultValue={dayjs('01/01/2015', dateFormatList[0])}
            format={dateFormatList}
          />
      </div>
      <div style={buttonContainerStyle}>
          <Button type="default" icon={<DownloadOutlined />}     style={buttonStyle}>
            Reporte
          </Button>
          <Button type="primary" icon={<PlusOutlined />} onClick={onClick}     style={buttonStyle}>
            Nuevo registro
          </Button>
      </div>
    </div>
  );
}

export default TopButtons;
