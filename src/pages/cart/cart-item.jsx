import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    //destrcution
    //remove from cart function implemented to remove product from cart
    //add to  cart function implemented to add product to cart
    //update cart function for taking the input value and implemented to update  product in cart
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart,updateCartItemCount } = useContext(ShopContext);
    return (
        <div className='cartItem'>
            <img src={productImage} />
            <div className='decription'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>$ {price}</p>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}></input>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}