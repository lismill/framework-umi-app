import { ConfigProvider } from 'antd';
import Scrollbars from 'react-custom-scrollbars';
import globalConfig from './globalConfig';
import LayoutAside from './layout-aside';
import LayoutHeader from './layout-header';

export default (props: any) => {
  return (
    <ConfigProvider {...globalConfig}>
      <div className="layout collapsed">
        <LayoutHeader />
        <div className="layout-footer">
          <LayoutAside />
          <Scrollbars style={{ height: 'calc(100%)' }}>{props.children}</Scrollbars>
        </div>
      </div>
    </ConfigProvider>
  );
};
