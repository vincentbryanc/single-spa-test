import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Requests = lazy(() => import('./Requests/index'));
const ActiveBorrows = lazy(() => import('./ActiveBorrows/index'));
const Financials = lazy(() => import('./Financials/index'));

class Navigation extends Component {

    render() {
        return (
            <div className="row">
                <Router>
                    <div className="col s12 m3 l2 offset-l2">
                        <div className="card-panel">
                            <h5 className="center-align">Borrow Nav</h5>
                            <Link to="/borrow/requests">Requests</Link><br />
                            <Link to="/borrow/active-borrows">Active Borrows</Link><br />
                            <Link to="/borrow/financials">Financials</Link>
                        </div>
                    </div>
                    <div className="col s12 m9 l6">
                        <Suspense fallback={<div className="card-panel">Loading...</div>}>
                            <Switch>
                                <Route path="/borrow/requests" component={ Requests } />
                                <Route path="/borrow/active-borrows" component={ ActiveBorrows } />
                                <Route path="/borrow/financials" component={ Financials } />
                            </Switch>
                        </Suspense>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Navigation;