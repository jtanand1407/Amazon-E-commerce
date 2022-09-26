import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({id , title , price , rating , image}) {
  const [state,dispatch]= useStateValue();

  const addToBasket=() => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  
  return (
    <div className='product'>
    <div className='product__info'>
    <h4>{title}</h4>
    
    <p>
     
     <h3>₹ {price}</h3>
    </p>
    </div>
    <div className='product__rating'>
    {Array(rating).fill().map((_,i) => (<p>⭐</p>))}
    </div>
    
    <img className='product__image' src={image} />
    <button className='product__button' onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product