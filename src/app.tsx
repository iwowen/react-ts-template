import React from 'react';
import { Layout } from 'antd';
import LeftSideBar from '@/layouts/LeftSideBar';
import Logo from '@/components/Logo';
import 'antd/dist/antd.css';
import './app.scss';

const { Sider, Content } = Layout;

const App: React.FunctionComponent = () => (
  <Layout className='layout-wrap'>
    <Sider width={256}>
      <Logo />
      <LeftSideBar />
    </Sider>
    <Layout>
      <Content>Content</Content>
    </Layout>
  </Layout>
);

export default App;
