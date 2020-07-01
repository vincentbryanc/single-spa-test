import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Admin from './root.component.js';
function domElementGetter() {
  return document.getElementById("admin")
}
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Admin,
  domElementGetter,
})
export const bootstrap = [
  reactLifecycles.bootstrap,
];
export const mount = [
  reactLifecycles.mount,
];
export const unmount = [
  reactLifecycles.unmount,
];