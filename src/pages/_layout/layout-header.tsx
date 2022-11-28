import { ReactComponent as LayoutHeaderSmiling } from '@/assets/svgs/layout/header-smiling.svg';
import { Divider } from 'antd';
import React, { useState } from 'react';

const LayoutHeader: React.FC = () => {
  /**
   * 固定/自适应屏幕宽度
   */
  const [collapsed, setCollapsed] = useState(false);
  const setLayoutId = () => {
    setCollapsed(!collapsed);
    const LAYOUT = document.querySelector('.layout');
    if (collapsed) {
      LAYOUT?.classList.add('collapsed');
    } else {
      LAYOUT?.classList.remove('collapsed');
    }
  };

  return (
    <div className="bg-white layout-header">
      <div className="flex justify-between pl-[12px] pr-[16px] layout-header-container">
        <div className="flex items-center left">
          {/* <Logo style={{ width: 32, height: 32, color: '#e74e3d' }} /> */}
          {/* <span className="ml-[4px] text-lg font-medium text-gray-600">后台管理中心</span> */}
        </div>
        <div className="flex items-center right">
          <div className="flex items-center cursor-pointer" onClick={setLayoutId}>
            <LayoutHeaderSmiling width={18} height={18} />
          </div>
          <Divider type="vertical" />
          <div className="cursor-pointer username">超级管理员</div>
          <Divider type="vertical" />
          <div className="cursor-pointer username">退出系统</div>
        </div>
      </div>
    </div>
  );
};
export default LayoutHeader;
