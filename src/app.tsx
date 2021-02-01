import React from 'react';
import { Layout } from 'antd';
import './app.scss';
import CuMenu from './layout/CuMenu';

const { Sider, Content } = Layout;

const App: React.FunctionComponent = () => (
  <Layout className='layout-wrap'>
    <Sider width={256}>
      <CuMenu />
    </Sider>
    <Layout>
      <Content>Content</Content>
    </Layout>
  </Layout>
);

export default App;
