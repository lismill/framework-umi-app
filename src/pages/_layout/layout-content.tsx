import { ConfigProvider } from 'antd';
import globalConfig from './globalConfig';

export default (props: any) => {
  return (
    <ConfigProvider {...globalConfig}>
      <div className="layout-content">{props.children}</div>
    </ConfigProvider>
  );
};
