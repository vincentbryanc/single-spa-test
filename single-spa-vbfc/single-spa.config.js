import { registerApplication, start } from 'single-spa'

// registerApplication(
//     // Name of our single-spa application
//     'home',
//     // loadingFunction
//     () => import('./src/home/home.app.js'),
//     // activityFunction
//     // (location) => location.pathname === "" || 
//     // location.pathname === "/" || 
//     // location.pathname.startsWith('/home')
//     () => true
// );

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(prefix);
    }
}

function showWhenAnyOf(routes) {
    return function (location) {
        return routes.some((route) => location.pathname === route);
    };
}
  
function showWhenPrefix(routes) {
    return function (location) {
        return routes.some((route) => location.pathname.startsWith(route));
    };
}

function showExcept(routes) {
    return function (location) {
        return routes.every((route) => location.pathname !== route);
    };
}

registerApplication(
    'navBar', 
    () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
    showExcept(['/', '/login']),
);

registerApplication(
    'login', 
    () => import('./src/login/login.app.js'),
    showWhenAnyOf(['/', '/login']),
);

registerApplication(
    'loan', 
    () => import('./src/loan/loan.app.js'),
    pathPrefix('/loan')
);

registerApplication(
    'borrow', 
    () => import('./src/borrow/borrow.app.js'),
    pathPrefix('/borrow')
);

registerApplication(
    'hire', 
    () => import('./src/hire/hire.app.js'),
    pathPrefix('/hire')
);

registerApplication(
    'admin', 
    () => import('./src/admin/admin.app.js'),
    pathPrefix('/admin')
);

registerApplication(
    'footer', 
    () => import('./src/footer/footer.app.js'),
    showExcept(['/', '/login']),
);

start();