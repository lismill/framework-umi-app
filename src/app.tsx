/**
 * 初始加载和路由切换
 * @param param
 */
export function onRouteChange({ matchedRoutes }: { matchedRoutes: any[] }) {
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title ?? '';
  }
}
