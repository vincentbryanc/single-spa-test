import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


/* const mySubmitHandler = (event) => {
  event.preventDefault();
  alert("You are submitting " + this.state.username);
  history.push("/login");
}
 */
const AnimationExample = () => (
  <div className="container" style={{ display: "-webkit-inline-box",marginTop: "200px",marginLeft: "20%"}}>
      <div className="logo" style={{ width:"70%"}}>
        <img src="https://www.spmais.com.br/wp-content/uploads/2016/04/conx.jpg"/>
      </div>
     
      <div className="loginFormContainer" style={{ width:"30%", borderRadius:"15px", border:"1px solid darkgrey" , padding: "20px"}}>
        <span style={{padding:"20px",fontSize:"50px",marginLeft:"20%"}}> Login</span>
        <form name="login" action="/loan">
            <label htmlFor="username" >Username</label><input name="username" type="text"></input>
            <label htmlFor="password" >Password</label><input name="password" type="password"></input>
            <input  style={{marginLeft:"40%"}} type='submit'/>
        </form>
      </div>
  </div>
);

export default AnimationExample;