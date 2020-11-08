import React from 'react';
import style from './Items.module.css';


const Pizza = (props) => {


    const items = props.toPizza.map(item => {
        return (
            <div key={item.id} className={style.itemCard}>
            <img src={item.img} alt="icon" className={style.itemImage}/>
            <h1 className={style.itemText}>{item.text}</h1>
            <h4 className={style.itemPrice}>{item.price} €</h4>
        </div>
        )
    })

     

    return(

        <div className={style.item}>
             {items}
        </div>
      
    )}

export default Pizza;