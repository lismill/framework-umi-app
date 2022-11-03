import { ReactComponent as MenuDashboard } from '@/assets/svgs/menu/dashboard.svg';
import { ReactComponent as MenuDevelop } from '@/assets/svgs/menu/develop.svg';
import { ReactComponent as MenuSystem } from '@/assets/svgs/menu/system.svg';

const style = { width: '17px', height: '17px', marginTop: '-1px' };

export const iconMapping: Record<string, any> = {
  MenuDashboard: <MenuDashboard style={style} />,
  MenuSystem: <MenuSystem style={style} />,
  MenuDevelop: <MenuDevelop style={style} />,
};
