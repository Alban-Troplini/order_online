import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/header';

import Aux from '../hoc/aux'

class Layout extends Component {

    state = {

        showSideDrawer: false

    }



    render() {

        return (
            <Aux>
                <Header />
                {/* <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/profile" exact component={Profile} />
                </Switch> */}
             
            </Aux>
        )
    }

    
}

export default Layout;