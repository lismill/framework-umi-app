import router from '@/router';
import { Menu } from 'antd';
import React from 'react';
import { history, useLocation, useRouteMatch } from 'umi';

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
    useLocation().pathname.substring(0, useLocation().pathname.lastIndexOf('/')),
    // '/develop',
    // '/develop/others',
    // '/develop/others/affix',
  ];
  return (
    <div className="layout-aside bg-white">
      <Menu
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={defaultSelectedKeys}
        mode="inline"
        items={items}
        onClick={(item) => history.push(item.key)}
      />
    </div>
  );
};
export default LayoutAside;
