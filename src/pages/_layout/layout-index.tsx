import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import LayoutAside from './layout-aside';
import LayoutHeader from './layout-header';

const Layout: React.FC = (props: any) => {
  return (
    <div className="layout collapsed">
      <LayoutHeader />
      <div className="layout-footer">
        <LayoutAside />
        <Scrollbars style={{ height: 'calc(100%)' }}>{props.children}</Scrollbars>
      </div>
    </div>
  );
};

export default Layout;
