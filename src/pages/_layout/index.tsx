import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import LayoutAside from './layout-aside';
import LayoutHeader from './layout-header';

const Layout: React.FC = (props: any) => {
  // 不带整体布局结构的视图
  if (['/login'].includes(props.location.pathname)) {
    return <div>{props.children}</div>;
  }

  // 带整体布局结构的视图
  return (
    <div className="framework">
      <LayoutHeader />
      <div className="framework-footer">
        <LayoutAside />
        <Scrollbars style={{ height: 'calc(100%)' }}>
          <div className="framework-content">{props.children}</div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default Layout;
