import { registerApplication, start } from 'single-spa'

function showExcept(routes) {
  return function (location) {
    return routes.every((route) => location.pathname !== route);
  };
}

registerApplication(
  'navBar', 
  () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
  () => true,
  showExcept(['/login']),
);

registerApplication(
  'leftmenu', 
  () => import('./src/leftmenu/leftMenu.app.js').then(module => module.leftMemu),
  () => true,
  showExcept(['/login']),
);



registerApplication(
  // Name of our single-spa application
  'login',
  // loadingFunction
  () => import('./src/login/login.app.js'),
  // Our activity function
  () => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/login')
);

registerApplication(
  // Name of our single-spa application
  'adminlogin',
  // loadingFunction
  () => import('./src/admin/login.app.js'),
  // Our activity function
  () => location.pathname.startsWith('/admin-login')
);


registerApplication(
  // Name of our single-spa application
  'loan',
  // loadingFunction
  () => import('./src/loan/loan.app.js'),
  // Our activity function
  () => location.pathname.startsWith('/loan')
);



function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(prefix);
    }
}
registerApplication(
  'angularJS', 
  () => import ('./src/angularJS/angularJS.app.js'), 
  pathPrefix('/angularJS')
);
start();
