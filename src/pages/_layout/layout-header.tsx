import { ReactComponent as FrameworkHeaderSmiling } from '@/assets/svgs/framework-header-smiling.svg';
import { Divider } from 'antd';
import React from 'react';

const LayoutHeader: React.FC = () => {
  return (
    <div className="pl-16 pr-16 flex justify-between bg-white framework-header">
      <div className="left">中后台管理中心</div>
      <div className="flex items-center right">
        <div className="flex items-center cursor-pointer">
          <FrameworkHeaderSmiling width={18} height={18} />
        </div>
        <Divider type="vertical" />
        <div>Right</div>
      </div>
    </div>
  );
};
export default LayoutHeader;
