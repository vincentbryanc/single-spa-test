import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import LeftMenu from './root.component.js';
function domElementGetter() {
  return document.getElementById("left-menu")
}
export const leftMemu = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: LeftMenu,
  domElementGetter,
}) 