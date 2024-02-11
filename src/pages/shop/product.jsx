import React, { useContext } from 'react'
import {ShopContext} from "../../context/shop-context";

export const Product = (props) => {
    //desctructing the elements from props
    const { id, desc, productName, price, productImage } = props.data;
    //shop context context API functions
    const {addToCart,cartItems}= useContext(ShopContext);
    
    const cartItemAmount = cartItems[id];

    return (
        <div className='product'>
            <img src={productImage} />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>$ {price}</p>
            </div>
            <button className='addToCartBttn' onClick={()=>addToCart(id)}>
                Add To Cart{cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
        </div>
    )
};
