import { Button } from 'react-bootstrap';
import React from 'react';
import style from './Items.module.css';


const Burger = (props) => {


    const items = props.toBurger.map(item => {
        return (
            <div key={item.id} className={style.itemCard}>
                <img src={item.img} alt="icon" className={style.itemImage}/>
                <h1 className={style.itemText}>{item.text}</h1>
                <h4 className={style.itemPrice}>{item.price} €</h4>
                <Button onClick={props.add} variant="warning" size="lg" className={style.button} >Add</Button>
            </div>
        )
    })

     

    return(

        <div className={style.item}>
             {items}
        </div>
      
    )}

export default Burger;