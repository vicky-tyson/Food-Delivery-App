import React from 'react';
import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './fooditem.css';
import { StoreContext } from '../../Context/StoreContext';

export default function FoodItem({id, name, price, description, image}) {

  const{ cartItems, seCartItems, addToCart, removeCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt={name} className='food-item-image' />
            {!cartItems[id] 
               ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='add' /> 
               : <div className='food-item-counter'>
                    <img onClick={() => removeCart(id)} src={assets.remove_icon_red} alt='remove' />
                    <p>{cartItems[id]}</p>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt='rating' />
            </div>
            <p className='food-item-description'>{description}</p>
            <p className="food-item-price">₹{price}</p>
        </div>
    </div>
  )
}
