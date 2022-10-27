import { withRouter } from 'umi';

export default withRouter((props: any) => {
  // 不带整体布局结构的视图
  if (['/login'].includes(props.location.pathname)) {
    return <div>{props.children}</div>;
  }

  // 带整体布局结构的视图
  return (
    <>
      <div>Header</div>
      {props.children}
      <div>Footer</div>
    </>
  );
});
