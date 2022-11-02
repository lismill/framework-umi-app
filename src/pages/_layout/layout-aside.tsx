import router from '@/router';
import { Menu } from 'antd';
import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { history, useLocation, useRouteMatch } from 'umi';
import { iconMapping } from './layout-aside-menu';

/**
 * 获取左侧菜单
 * @param routes
 * @returns
 */
const computedRoutes = (routes: any) => {
  return routes.map((item: any) => {
    if (!item?.meta?.hidden) {
      return {
        exact: '',
        key: item.path,
        children: item.routes ? computedRoutes(item.routes) : null,
        label: item.title,
        ...item.meta,
        icon: iconMapping[item?.meta?.icon],
      };
    }
  });
};
const ROUTES = router[0].routes.filter((item: any) => item.path && !['/login'].includes(item.path));
const items = computedRoutes(ROUTES);

const LayoutAside: React.FC = () => {
  const defaultSelectedKeys: string[] = [useLocation().pathname];
  const defaultOpenKeys: string[] = [
    useRouteMatch().path,
    `/${useLocation().pathname.split('/')[1]}`,
    useLocation().pathname.substring(0, useLocation().pathname.lastIndexOf('/')),
  ];
  return (
    <div className="layout-aside bg-white p-8">
      <Scrollbars>
        <Menu
          defaultOpenKeys={defaultOpenKeys}
          defaultSelectedKeys={defaultSelectedKeys}
          mode="inline"
          items={items}
          onClick={(item) => history.push(item.key)}
        />
      </Scrollbars>
    </div>
  );
};
export default LayoutAside;
