import React from 'react'
import { motion } from "framer-motion";
import AutoHeight from "react-auto-height";
import { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import ReactiveButton from 'reactive-button';
import "./account.css";


export const Account = () => {
    const [state, setState] = useState('idle');
    const onClickHandler = () => {
        setState('loading');

        // send an HTTP request
        setTimeout(() => {
            setState('success');
        }, 2000);
    };
    return (
        <div className='main'>
            <div className='create'>Create Account
                <form>
                    <label>First Name : </label>
                    <input
                        type='text'
                        required
                    />
                    <label>Last Name : </label>
                    <input
                        type='text'
                        required
                    />
                    <label>Mobile : </label>
                    <input
                        type='text'
                        required
                    />
                    <label>Email : </label>
                    <input
                        type='text'
                        required
                    />
                    <label>Select Country : </label>
                    <select>
                        <option>Canada</option>
                        <option>US</option>
                    </select>
                    <label>Shipping Address : </label>
                    <input
                        type='text'
                        required
                    />
                    <ReactiveButton
                        buttonState={state}
                        idleText="Create"
                        loadingText="Loading"
                        successText="Done"
                        onClick={onClickHandler}
                    />
                </form>
            </div>
        </div>
    )
}
