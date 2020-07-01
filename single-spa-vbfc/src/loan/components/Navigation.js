import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Requests = lazy(() => import('./Requests/index'));
const ActiveLoans = lazy(() => import('./ActiveLoans/index'));
const Financials = lazy(() => import('./Financials/index'));

class Navigation extends Component {

    render() {
        return (
            <div className="row">
                <Router>
                    <div className="col s12 m3 l2 offset-l2">
                        <div className="card-panel">
                            <h5 className="center-align">Loan Nav</h5>
                            <Link to="/loan/requests">Requests</Link><br />
                            <Link to="/loan/active-loans">Active Loans</Link><br />
                            <Link to="/loan/financials">Financials</Link>
                        </div>
                    </div>
                    <div className="col s12 m9 l6">
                        <Suspense fallback={<div className="card-panel">Loading...</div>}>
                            <Switch>
                                <Route path="/loan/requests" component={ Requests } />
                                <Route path="/loan/active-loans" component={ ActiveLoans } />
                                <Route path="/loan/financials" component={ Financials } />
                            </Switch>
                        </Suspense>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Navigation;