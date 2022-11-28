import routes from '@/routes';
import { iconMapping } from '@/routes/icon';
import { Menu } from 'antd';
import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { history, useLocation, useRouteMatch } from 'umi';

/**
 * 获取左侧菜单
 * @param data
 * @returns
 */
const computedRoutes = (data: any) => {
  return data.map((item: any) => {
    if (!item?.meta?.hidden) {
      return {
        key: item.path,
        children: item.routes ? computedRoutes(item.routes) : null,
        label: item.title,
        ...item.meta,
        icon: iconMapping[item?.meta?.icon],
      };
    }
  });
};
const ROUTES = (routes[1] as any).routes.filter(
  (item: any) => item.path && !['/login'].includes(item.path),
);
const items = computedRoutes(ROUTES);

const LayoutAside: React.FC = () => {
  const defaultSelectedKeys: string[] = [useLocation().pathname];
  const defaultOpenKeys: string[] = [
    useRouteMatch().path,
    `/${useLocation().pathname.split('/')[1]}`,
    useLocation().pathname.substring(0, useLocation().pathname.lastIndexOf('/')),
  ];
  return (
    <div className="layout-aside bg-white pt-[6px] pr-[8px] pb-[8px] pl-[8px]">
      <Scrollbars>
        <Menu
          style={{ width: 'calc(100% - 1px)' }}
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
