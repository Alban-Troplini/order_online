import React from 'react';
import style from './menuCategories.module.css';
import { Link } from 'react-router-dom';


import burger from '../../../assets/icons/burger.png';
import pizza from '../../../assets/icons/pizza.png';
import drink from '../../../assets/icons/drink.png';


const Categories = () => {

    const card = [
        {logo: burger, text: "Burger"},
        {logo: pizza, text: "Pizza"},
        {logo: drink, text: "Drinks"}
     ]  

     const cards = card.map((ca, i) => {
        return(
            <Link to={ca.text} key={i} className={style.ancor}>
                <div className={style.card}
                    >
                    <img src={ca.logo} alt="logo" />
                    <h3>{ca.text}</h3>
                </div>
            </Link>
        )})


    return(
        <div className={style.cards}>
           {cards}
        </div>
    )
}

export default Categories;