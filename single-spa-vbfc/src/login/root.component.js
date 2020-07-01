import React, { Component } from "react";
import {navigateToUrl} from 'single-spa'

class Login extends Component {

  componentDidCatch() {

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6 l4 offset-m3 offset-l4">
            <div className="card-panel">
              <h3 className="center-align">LOGIN</h3>
              <div className="input-field col s12">
                <input type="text" id="username" className="autocomplete" />
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-field col s12">
                <input type="password" id="password" className="autocomplete" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="center-align">
                <a href="/loan" onClick={navigateToUrl} className="waves-effect waves-light btn">Login</a>
                <div><a className="btn-flat">or Register here...</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;