import { AddIcCallRounded, AddRounded, Favorite, StarRounded } from '@mui/icons-material';
import { Items } from './Data';

import React, {useEffect, useState } from "react";
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';
let cartData = [];

function ItemCard({imgSrc, name, rating, price, itemId}) {
    const [currentValue, setCurrentValue] = useState(Math.floor(rating));

    const [isCart, setCart] = useState(null);
    const [{},dispatch] = useStateValue();

    useEffect(()=>{
        if(isCart){
        cartData.push(isCart);
        dispatch({
            type : actionType.SET_CART,
            cart : cartData

        })
        }
    },[isCart])


    const handleClick = (value) => {
        setCurrentValue(value);
    };


 

  return (
    <div className='itemCard' id={itemId}>
        <div className='isfavourite'>
            <Favorite/>
        </div>
        <div className='imgBox'>
            <img src={imgSrc} alt="" className='itemImg'/>
        </div>
        <div className='itemContent'>
            <h3 className='itemName'>{name}</h3>
            <div className='bottom'>
                <div className='rating'>
                    {Array.apply(null, {length:5}).map((e, i) => (
                        <i key = {i} className={`rating ${currentValue > i ? "orange" : "grey"} `} 
                        onClick={()=> handleClick(i+1)}>
                            <StarRounded/>
                        </i>
                    ))}
                    <h3 className='price'><span>$</span>{price}</h3>
                </div>
                <div className='addtoCart' onClick = {()=>setCart(Items.find(n=> n.id === itemId))}>
                    <AddRounded/>
                </div>

            </div>
        </div>

    </div>
  )
}

export default ItemCard