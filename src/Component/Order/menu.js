import React, { Component } from 'react';
import Categories from './MenuCategory/menuCategories';
import CatItems from './MenuItems/categoryItems';


class Menu extends Component {



    render() { 

        return ( 
            <div>
               <Categories/>
               <CatItems/>
            </div>
            
        );
    }
}
 
export default Menu;