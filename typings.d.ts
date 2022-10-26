declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}
declare const globalConfig: {
  UMI_CUSTOM_ENV: string;
  UMI_BASE_API: string;
};
