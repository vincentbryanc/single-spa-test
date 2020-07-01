import React, { Component } from "react";
import {navigateToUrl} from 'single-spa'
import Navigation from './components/Navigation';

class Loan extends Component {

  componentDidCatch() {

  }

  render() {
    return (
      <Navigation />
      // <div>
      //   <div className="row">
      //     <div className="col s12 m3 l2 offset-l1">
      //       <div className="card-panel">
      //         <ul>
      //           <li><h5>Loan Nav</h5></li>
      //           <li><a>Request</a></li>
      //           <li><a>Loan</a></li>
      //           <li><a>Financial</a></li>
      //         </ul>
      //       </div>
      //     </div>
      //     <div className="col s12 m9 l8">
      //       <div className="card-panel">
      //         <h3 className="center-align">Content Goes Here</h3>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
export default Loan;