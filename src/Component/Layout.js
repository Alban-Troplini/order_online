import React, { Component } from 'react';
import Header from './Header/header';

import Aux from '../hoc/aux'
import Menu from './Order/menu';

class Layout extends Component {

    state = {

        

    }



    render() {

        return (
            <Aux>
                
                <Header />
                <Menu/>
             
            </Aux>
        )
    }

    
}

export default Layout;