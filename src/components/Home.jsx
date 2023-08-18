import React from 'react';
import '../Home.css';
import { Layout } from 'antd';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AppHeader } from './AppHeader';
import { TopNav } from './TopNav';
import { PageContent } from './PageContent';
import { SideMenu } from './SideMenu';
import { AppFooter } from './AppFooter';
import {Outlet} from 'react-router-dom'

const { Content } = Layout;

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define el ancho máximo para la vista móvil

  const [collapsed, setCollapsed] = useState(false);
  const [selectedSection, setSelectedSection] = useState('Registro de cajas'); // Inicializa con el label

  return (
    <>
      <AppHeader />
      {isMobile && <AppFooter onMenuSelect={setSelectedSection} />} {/* Muestra AppFooter solo en vista móvil */}
      <Layout style={{ height: '100vh', width: '100vw' }} hasSider>
        <SideMenu onMenuSelect={setSelectedSection} />
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
