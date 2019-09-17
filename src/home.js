import React, { Component } from 'react'
import { BrowserRouter,Route,Redirect } from 'react-router-dom'

import A from './pages/a'
import B from './pages/b'
import C from './pages/c'
import D from './pages/d'
import E from './pages/e'

import DaoHang from './components/daohang'

class home extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <DaoHang />
                        <Route path="/a" component={A} />
                        <Route path="/b" component={B} />
                        <Route path="/c" component={C} />
                        <Route path="/d" component={D} />
                        <Route path="/e" component={E} />
                        <Redirect to="/a" />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default home