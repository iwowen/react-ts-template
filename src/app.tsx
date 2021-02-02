import React from 'react';
import { Layout } from 'antd';
import './app.scss';
import LeftSideBar from '@/layouts/LeftSideBar';

const { Sider, Content } = Layout;

const App: React.FunctionComponent = () => (
  <Layout className='layout-wrap'>
    <Sider width={256}>
      <LeftSideBar />
    </Sider>
    <Layout>
      <Content>Content</Content>
    </Layout>
  </Layout>
);

export default App;
