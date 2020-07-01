import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Accounts = lazy(() => import('./Accounts'));
const Reports = lazy(() => import('./Reports'));
const Financials = lazy(() => import('./Financials'));

class Navigation extends Component {

    render() {
        return (
            <div className="row">
                <Router>
                    <div className="col s12 m3 l2 offset-l2">
                        <div className="card-panel">
                            <h5 className="center-align">Admin Nav</h5>
                            <Link to="/admin/accounts">Accounts</Link><br />
                            <Link to="/admin/reports">Reports</Link><br />
                            <Link to="/admin/financials">Financials</Link>
                        </div>
                    </div>
                    <div className="col s12 m9 l6">
                        <Suspense fallback={<div className="card-panel">Loading...</div>}>
                            <Switch>
                                <Route path="/admin/accounts" component={ Accounts } />
                                <Route path="/admin/reports" component={ Reports } />
                                <Route path="/admin/financials" component={ Financials } />
                            </Switch>
                        </Suspense>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Navigation;