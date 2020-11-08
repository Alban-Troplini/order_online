import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import Burger from './Items/Burger';
import Pizza from './Items/Pizza';
import Drinks from './Items/Drinks';

const Main = () => (<h1 style={{textAlign: "center"}}>Select a category to show the items!</h1>);

class CatItems extends Component {

    state = {
        items: [{  
            burgerItems: [
                {id: 1, text: "ChesseBurger",price: 5, img: "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png"},
                {id: 2, text: "Bacon",price: 4, img: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=1000%2C1000"},
                {id: 3, text: "Special Burger",price: 6, img: "https://www.searchpng.com/wp-content/uploads/2019/01/Burger-Png-715x715.png"},
                {id: 4, text: "Chicken",price: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUISuCeCBijhsMwn4vmkaaYzg6BWxCEC071w&usqp=CAU"},
                {id: 5, text: "Vega Burger",price: 5, img: "https://www.clipartkey.com/mpngs/m/265-2651371_veg-burger-png-mcdonalds-veg-burger.png"},
                {id: 6, text: "Double",price: 5, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwtMdL2puHvaTzIVSoX60EJTyHX3Z9ktJ9DA&usqp=CAU"}
            ],

            pizzaItems: [
                {id: 7, text: "Margarita",price: 4.5, img: "https://banner2.cleanpng.com/20180423/kie/kisspng-pizza-margherita-italian-cuisine-mozzarella-nutrit-pizza-ingredient-5add74bba84a05.0859935915244627796893.jpg"},
                {id: 8, text: "Prosciutto",price: 5, img: "https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?size=626&ext=jpg"},
                {id: 9, text: "Diavola",price: 5, img: "https://www.pngkit.com/png/detail/52-520229_pepperoni-pizza-png-pizza-pepperoni.png"},
                {id: 10, text: "Fish & Chips",price: 8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL0D73w0sU_sh4CDKtG6yRFKjNSyP8qeTSSw&usqp=CAU"},
                {id: 11, text: "Fungi",price: 5, img: "https://www.daserafino.it/wp-content/uploads/2019/04/da-serafino-home-slide-pizza.png"},
                {id: 12, text: "Vegetables",price: 6, img:"https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-13.png"},
                {id: 13, text: "Capricosa",price: 7, img: "https://www.pngjoy.com/pngm/251/4865269_pizza-hd-pizza-png-hd-png-download.png"},
                {id: 14, text: "Salame & Olive",price: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThEZ92XXQ1WvcoBqDOhuv-LovuB73CAbCgHg&usqp=CAU"},
                {id: 15, text: "Delicioza",price: 8, img: "https://purepng.com/public/uploads/large/purepng.com-pizzafood-pizza-941524625790xzrxh.png"}
                
            ],

            drinkItems: [
                {id: 16, text: "Coca Cola",price: 1.5, img: "https://img1.pnghut.com/16/3/20/k3W1604ba7/cola-brand-cocacola-beverages-africa-coca-kwanza.jpg"},
                {id: 17, text: "Fanta",price: 1.5, img: "https://cdn.iconscout.com/icon/free/png-512/fanta-282449.png"},
                {id: 18, text: "Sprite",price: 1.5, img: "https://toppng.com/uploads/preview/bottle-of-sprite-png-picture-stock-sprite-glass-bottle-11563220225w2kyrcbxop.png"},
                {id: 19, text: "Water",price: 1, img: "https://www.transparentpng.com/thumb/water-bottle/fO4Ttp-water-bottle-vector.png"},
                {id: 20, text: "Beer",price: 2, img: "https://i.pinimg.com/736x/ee/77/c3/ee77c34e290aaf0401964bc5420da2f3.jpg"}
            ]
        }],

        listItems: [
            {id: 16, text: "Coca Cola",price: 1.5, img: "https://img1.pnghut.com/16/3/20/k3W1604ba7/cola-brand-cocacola-beverages-africa-coca-kwanza.jpg"}
        ]
    }

    // addToCart = (product) => {
    //     const {items} = this.state;
    //     const existingProductIndex = this.findProductIndex(items, product.index);
    
    //     this.setState({
    //       items: existingProductIndex >= 0 
    //         ? this.updateProductUnits(items, product)
    //         : [...items, product]
    //     });
    
    //   };

    render() { 


        return ( 
            <Switch>
                 <Route exact path="/" component={Main}/>

                 <Route path="/Burger" 
                 render={(props) => <Burger 
                    toBurger={this.state.items.burgerItems} {...props}/>}/>
                 <Route path="/Pizza" 
                 render={(props) => <Pizza
                    toPizza={this.state.items.pizzaItems} {...props}/>}/>
                 <Route path="/Drinks"
                  render={(props) => <Drinks 
                    toDrinks={this.state.items.drinkItems} {...props}/>}/>
            </Switch>
           
         );
    }
}
 
export default CatItems;