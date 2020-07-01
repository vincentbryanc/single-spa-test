import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import AdminLogin from './root.component.js';
function domElementGetter() {
  return document.getElementById("admin-login")
}
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: AdminLogin,
  domElementGetter,
});
export const bootstrap = [
  reactLifecycles.bootstrap,
];
export const mount = [
  reactLifecycles.mount,
];
export const unmount = [
  reactLifecycles.unmount,
];