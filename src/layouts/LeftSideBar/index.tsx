import { Menu } from 'antd';
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const { SubMenu } = Menu;

// const CuMenu: React.FunctionComponent = () => (<div>dhd</div>);

class LeftSideBar extends React.Component {
  handleClick = (e: any) => {
    console.log('click', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        theme='dark'
        mode='inline'
        className={styles.menuWrap}
      >
        <SubMenu key='sub1' icon={<MailOutlined />} title='Navigation One'>
          <Menu.ItemGroup key='g1' title='Item 1'>
            <Menu.Item key='1'>Option 1</Menu.Item>
            <Menu.Item key='2'>Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key='g2' title='Item 2'>
            <Menu.Item key='3'>Option 3</Menu.Item>
            <Menu.Item key='4'>Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Navigation Two'>
          <Menu.Item key='5'>Option 5</Menu.Item>
          <Menu.Item key='6'>Option 6</Menu.Item>
          <SubMenu key='sub3' title='Submenu'>
            <Menu.Item key='7'>Option 7</Menu.Item>
            <Menu.Item key='8'>Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key='sub4' icon={<SettingOutlined />} title='Navigation Three'>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
          <Menu.Item key='11'>Option 11</Menu.Item>
          <Menu.Item key='12'>Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default LeftSideBar;