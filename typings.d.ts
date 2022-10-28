declare const globalConfig: {
  /** 自定义环境变量 */
  UMI_CUSTOM_ENV: string;
  /** 请求接口基础地址 */
  UMI_BASE_API: string;
};

declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

declare module 'react-custom-scrollbars';
