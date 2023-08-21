import React, { useState, useEffect } from 'react';
import '../Home.css';
import { Layout } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { AppHeader } from './AppHeader';
import { TopNav } from './TopNav';
import { SideMenu } from './SideMenu';
import {Outlet} from 'react-router-dom'

const { Content } = Layout;

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define el ancho máximo para la vista móvil

  const [selectedSection, setSelectedSection] = useState('Registro de cajas'); // Inicializa con el label

  return (
    <>
      <AppHeader onMenuSelect={setSelectedSection} />
      {/*isMobile && <AppFooter onMenuSelect={setSelectedSection} />} {/* Muestra AppFooter solo en vista móvil */}
      <Layout style={{ height: '100vh', width: '100vw' }} hasSider>
      {!isMobile && <SideMenu onMenuSelect={setSelectedSection}/>} {/* Muestra AppFooter solo en vista móvil */}
        
        <Layout>
          <TopNav selectedSection={selectedSection} />
          <Content className='ContentContainer'>
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Home;
