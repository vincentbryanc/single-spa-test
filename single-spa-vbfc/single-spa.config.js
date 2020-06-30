import { registerApplication, start } from 'single-spa'

registerApplication(
    // Name of our single-spa application
    'home',
    // loadingFunction
    () => import('./src/home/home.app.js'),
    // activityFunction
    (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/home')
);

registerApplication(
    'navBar', 
    () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
    () => true
);

registerApplication(
    'angularJS', 
    () => import ('./src/angularJS/angularJS.app.js'), 
    pathPrefix('/angularJS')
);

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(prefix);
    }
}

registerApplication(
    'login', 
    () => import('./src/login/login.app.js'),
    location => location.pathname === '/login'
);

start();