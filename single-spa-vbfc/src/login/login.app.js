import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Login from './root.component.js';
function domElementGetter() {
  return document.getElementById("login")
}
export const login = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Login,
  domElementGetter,
})

export const bootstrap = [
  login.bootstrap,
];

export const mount = [
  login.mount,
];

export const unmount = [
  login.unmount,
];