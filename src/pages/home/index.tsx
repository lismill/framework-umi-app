import { Button, Typography } from 'antd';
import React from 'react';
import { Link } from 'umi';
const { Title } = Typography;

const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-white rounded-8 p-16">
        <Title className="text-3xl font-bold underline bg-blue-200">Hello world!</Title>
        <Button type="primary">Button</Button>
        <Link to="/user">User</Link>
        <div className="mt-16 border border-red-500 border-solid rounded-8 p-16 text-16">
          阿萨德阿萨德按时大声道
        </div>
        <div className="text-primary">asdasd</div>
        <div className="text-success">asdasd</div>
        <div className="text-info aa">asdasd</div>
        <div className="text-warning w-100">asdasd</div>
        <div className="flex justify-between space-x-20">
          <div className="w-full p-8 rounded-8 text-white text-16 bg-red-600">1</div>
          <div className="w-full p-8 rounded-8 text-white text-16 bg-red-600">2</div>
          <div className="w-full p-8 rounded-8 text-white text-16 bg-red-600">3</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
