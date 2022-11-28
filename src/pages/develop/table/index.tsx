import LTable from '@/components/l-table';
import React, { useState } from 'react';
import defaultConfig from './config';

const DevelopList: React.FC = () => {
  const [config, setConfig] = useState(defaultConfig);
  return (
    <div>
      <LTable
        config={config}
        setConfig={setConfig}
        top={
          <div className="mb-[16px] bg-gray-100 px-[16px] py-[12px] rounded-[2px]">
            自定义顶部插槽
          </div>
        }
        center={
          <div className="mb-[16px] bg-gray-100 px-[16px] py-[12px] rounded-[2px]">
            自定义中间插槽
          </div>
        }
        bottom={
          <div className="mb-[16px] bg-gray-100 px-[16px] py-[12px] rounded-[2px]">
            自定义底部插槽
          </div>
        }
        handleOperate={(key: string, data?: any) => {
          console.log('-------');
          console.log(key, data);
        }}
      >
        <div>默认插槽</div>
      </LTable>
      {/* <div className="mt-[16px]">{JSON.stringify(config)}</div> */}
    </div>
  );
};

export default DevelopList;
