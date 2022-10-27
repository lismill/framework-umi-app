import { Typography } from 'antd';
import styles from './index.less';
const { Title } = Typography;

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Title className="text-3xl font-bold underline">Hello world!</Title>
    </div>
  );
}
