import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Footer from './root.component.js';
function domElementGetter() {
  return document.getElementById("footer")
}
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Footer,
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