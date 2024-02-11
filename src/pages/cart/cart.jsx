import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from "../../context/shop-context"
import {CartItem} from "./cart-item";
import "./cart.css"; 
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { cartItems ,getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    //useNavigate hooks for navigation between pages
    const navigate =useNavigate()
    return (
        <div className='cart'>
            <div>
                <h1>
                    Your Cart Items
                </h1>
            </div>
            <div className='cartItems'>
                {PRODUCTS.map((product) => {
                    //mapping if product id is not equal to zero
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data = { product } />;
                    }
                })}
            </div>
                {totalAmount>0?(//total amount greater than zero than show the subtotal and other buttons
            <div className='checkout'>
                <p>Subtotal:$ {totalAmount}</p>
                <button onClick={()=>navigate("/")}>Continue Shopping</button>
                <button>Check Out</button>
            </div>
    ):(//if total amount is not than greater than 0 then show your cart is empty
        <h1>Your Cart is Empty</h1>
    )}
        </div>
    );
};
//PUSH TO GITHUB
