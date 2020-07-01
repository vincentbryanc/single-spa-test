import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
/* you'll need this CSS somewhere
.fade-enter {
  opacity: 0;
  z-index: 1;
}
.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}
*/
const AnimationExample = () => (
  <div className="container" style={{ display: "-webkit-inline-box",marginTop: "200px",marginLeft: "20%"}}>
      <div className="logo" style={{ width:"100%"}}>
        <img src="https://resize.hswstatic.com/w_907/gif/loan-personal.jpg"/>
      </div>
  </div>
);

export default AnimationExample;