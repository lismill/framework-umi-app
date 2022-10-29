import React from 'react';

const Layout: React.FC = (props: any) => {
  return <div className="layout-content">{props.children}</div>;
};

export default Layout;
