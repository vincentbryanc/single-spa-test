import React, { Component } from "react";

class Login extends Component {

  componentDidCatch() {

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s4 offset-s4">
            <div className="card-panel">
              <h3 className='center-align'>LOGIN</h3>
              <div className='center-align'>
                <a className="waves-effect waves-light btn">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;