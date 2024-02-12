import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from "../../context/shop-context"
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from 'react-router-dom';
import ReactiveButton from 'reactive-button';
import Marquee from "react-fast-marquee";



export const Cart = () => {

    const [state, setState] = useState('idle');
    const onClickHandler = () => {
        setState('loading');

        // send an HTTP request
        setTimeout(() => {
            setState('success');
        }, 2000);
    };
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);


    const totalAmount = getTotalCartAmount()
    //useNavigate hooks for navigation between pages
    const navigate = useNavigate()

    return (
        <div className='cart'>
            <div >
                
                {totalAmount>2500?//if total is more than 2500 than cus eligible for free shipping
                <Marquee>
                    <p className='freeShipping'>Congratulations!! You are eligible for free shipping !!</p>
                </Marquee>
                :
                <Marquee>
                <p>Buy products worth $2500 or more items to get free shipping</p>
            </Marquee>
                }
            </div>
                <h1>
                    Your Cart Items
                </h1>
            <div className='cartItems'>
                {PRODUCTS.map((product) => {
                    //mapping if product id is not equal to zero
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>
            {totalAmount > 0 ? (//total amount greater than zero than show the subtotal and other buttons
                <div className='checkout'>
                    <p>Subtotal:$ {totalAmount}</p>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                    <ReactiveButton
                        buttonState={state}
                        idleText="Checkout"
                        loadingText="Loading"
                        successText="Done"
                        onClick={onClickHandler}
                    />
                </div>
            ) : (//if total amount is not than greater than 0 then show your cart is empty
                <h1>Your Cart is Empty</h1>
            )}
        </div>
    );
};
//PUSH TO GITHUB