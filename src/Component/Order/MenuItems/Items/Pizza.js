import React from 'react';
import style from './Items.module.css';
import { Button } from 'react-bootstrap';


const Pizza = (props) => {


    const items = props.toPizza.map(item => {
        return (
            <div key={item.id} className={style.itemCard}>
            <img src={item.img} alt="icon" className={style.itemImage}/>
            <h1 className={style.itemText}>{item.text}</h1>
            <h4 className={style.itemPrice}>{item.price} €</h4>
            <Button variant="warning" size="lg" className={style.button} >Add</Button>
        </div>
        )
    })

     

    return(

        <div className={style.item}>
             {items}
        </div>
      
    )}

export default Pizza;