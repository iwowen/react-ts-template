import { Menu } from 'antd';
import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import { RouteConfig } from 'react-router-config';
import adminRoutes from '@/routes/adminRoutes';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import styles from './index.module.scss';

const { SubMenu } = Menu;

// 将路径转化为key
const withRouteKey = (path?: string | string[]): string => {
  // 一般只是字符串
  if (Array.isArray(path)) return path.join().replaceAll('/', '_');
  if (typeof path === 'string') return path.replaceAll('/', '_');
  // 防止出现没有path的情况
  return String(Math.random()).slice(-6);
};

const MenuItem: React.FunctionComponent<any> = (props: any) => {
  const { route } = props;
  return (
    <>
      {route.routes ? (
        <SubMenu icon={<MailOutlined />} title={route.title} {...props}>
          {route.routes.map((item: RouteConfig) => (
            <MenuItem route={item} key={withRouteKey(item.path)} />
          ))}
        </SubMenu>
      ) : (
        <Menu.Item {...props}>
          <Link to={route.path}>{route.title}</Link>
        </Menu.Item>
      )}
    </>
  );
};

interface LeftSideState {
  selectedKey: string;
}

class LeftSideBar extends React.Component<RouteComponentProps, LeftSideState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      selectedKey: withRouteKey(props.location.pathname)
    };
  }

  render() {
    return (
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={[this.state.selectedKey]}
        defaultOpenKeys={['sub1']}
        theme='dark'
        mode='inline'
        className={styles.menuWrap}
      >
        {adminRoutes.map(
          (item: RouteConfig) => item.component && <MenuItem route={item} key={withRouteKey(item.path)} />
        )}
      </Menu>
    );
  }
}

export default withRouter(LeftSideBar);
